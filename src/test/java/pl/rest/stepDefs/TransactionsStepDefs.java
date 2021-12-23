package pl.rest.stepDefs;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.qc.cuke.ScenarioContext;
import com.qc.qa.ConfigPropertyException;
import com.qc.qa.FrameworkException;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.restassured.mapper.ObjectMapperType;
import io.restassured.path.json.JsonPath;
import io.restassured.path.json.config.JsonPathConfig;
import io.restassured.response.Response;
import org.apache.commons.lang3.exception.ExceptionUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.testng.Assert;
import pl.rest.domain.response.AuthorizeResponse;
import pl.rest.domain.response.CardDetailResponse;
import pl.rest.domain.response.CardIssueResponse;
import pl.rest.utils.DBUtils;
import pl.rest.utils.TestSetDataReader;
import pl.rest.utils.Transaction;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import static com.qc.BaseAPI.getResponseKeyValue;
import static org.assertj.core.api.Assertions.assertThat;
import static pl.rest.utils.TestSetDataReader.getAPITestSetData;


public class TransactionsStepDefs {

    private ScenarioContext context;
    private static final Logger logger = LoggerFactory.getLogger(TransactionsStepDefs.class);
    private String flag;

    public TestSetDataReader testSetDataReader;

    public TransactionsStepDefs(ScenarioContext context) {
        this.context = context;
        testSetDataReader = new TestSetDataReader(context);
    }

    public static boolean isDouble(Double data) {
        boolean flag = false;
        try {
            if (Double.valueOf(data) instanceof Double)
                flag = true;
        } catch (Exception e) {
            flag = false;
            logger.info(ExceptionUtils.getMessage(e));
        }
        return flag;
    }

    @And("i should see the following in the header level")
    public void iShouldSeeTheFollowingInTheHeaderLevel(DataTable table) throws FrameworkException {
        Map<String, String> map = table.asMap(String.class, String.class);

        for (String key : map.keySet()) {
            if (!map.containsKey("PreviousTxn")) {
                JsonPath jsonPathEvaluator = context.previousResponse.jsonPath().using(new JsonPathConfig(JsonPathConfig.NumberReturnType.BIG_DECIMAL));
//            JsonPath jsonPathEvaluator = context.previousResponse.jsonPath();
                String expectedValue = map.get(key);
                if (key.equalsIgnoreCase("CurrentBatchNumber") && map.get(key).equalsIgnoreCase("context")) {
                    AuthorizeResponse authorizeResponse = (AuthorizeResponse) context.getResponseFromTransactionMap(Transaction.valueOf("AUTHORIZE").toString());
                    expectedValue = authorizeResponse.getAccessToken().toString();
                } else if (key.equalsIgnoreCase("CurrentBatchNumber") && map.get(key).equalsIgnoreCase("PreviousBatch")) {
//                    XNPPreAuthAndPreAuthCompleteResponse xnpResponse = (XNPPreAuthAndPreAuthCompleteResponse) context.getResponseFromTransactionMap(map.get("PreviousTxn"));
//                    expectedValue = xnpResponse.getCurrentBatchNumber().toString();
                } else if (key.equalsIgnoreCase("idempotencyKey") && map.get(key).equalsIgnoreCase("Ikey")) {
                    expectedValue = context.getDataStore().get("sameIkey");
                } else if (key.equalsIgnoreCase("BusinessReferenceNumber")) {
                    if (map.get(key).equalsIgnoreCase("I18N")) {
                        expectedValue = context.getDataStore().get("Brn");
                    } else {
                        expectedValue = map.get(key);
                    }
                }
                String responseKeyValue = getResponseKeyValue(key, jsonPathEvaluator);
                if (map.get(key).equalsIgnoreCase("NotNull")) {
                    Assert.assertNotNull(responseKeyValue);
                } else {
                    assertThat(responseKeyValue)
                            .as(
                                    "Failed to verify transaction response parameter : %s has returned as: %s value instead of : %s", key,
                                    responseKeyValue, expectedValue)
                            .isEqualTo(expectedValue);
                }
            }
        }
    }

    @And("i should see the following in the {string}")
    public void i_should_see_the_following_in_the_card_list(String listName, DataTable table) throws FrameworkException, ConfigPropertyException {
//        List<Map<String, String>> map = table.asMaps();
//        for (int i = 0; i < map.size(); i++) {
//            for (String key: map.get(i).keySet()) {
//
//            }
//        }
        Object actualValue = null;
        String responseKeyValue = "", key1 = "", expectedValue = "", cpgName = "", strActualValue = "";
        int intLength = 0, flag = 0;
        List<Map<String, String>> map = table.asMaps(String.class, String.class);
//        JsonPath jsonPathEvaluator = context.previousResponse.jsonPath();
//        ArrayList<Map<String, ?>> array = jsonPathEvaluator.getJsonObject("Cards");
        ArrayList<Map<String, ?>> array = JsonPath.with(context.previousResponse.asString()).using(new JsonPathConfig(JsonPathConfig.NumberReturnType.BIG_DECIMAL)).get(listName);
        for (int i = 0; i < map.size(); i++) {
            flag = 0;
            for (String key : map.get(i).keySet()) {
                key1 = key;
                try {
                    actualValue = array.get(i).get(key);
                    actualValue = String.valueOf(actualValue);

                    if (actualValue == null) {
                        throw new NullPointerException();
                    }
                } catch (NullPointerException np) {
                    actualValue = "null";
                }
                strActualValue = actualValue.toString();
                expectedValue = map.get(i).get(key);
                if (key.equalsIgnoreCase("CPG")) {
                    cpgName = getAPITestSetData(map.get(i).get("CPG"));
                    expectedValue = cpgName;
                    actualValue = array.get(i).get("CardType").toString();
                    if (actualValue.equals(expectedValue)) {
                        flag = 1;
                        System.out.println("Expected: " + expectedValue + " ::carddetails::  " + "Actual Value: " + actualValue);
                    } else {
                        flag = 2;
                        break;
                    }
                } else if (expectedValue.equalsIgnoreCase("notnull")) {
                    if (!actualValue.toString().equalsIgnoreCase("null")) {
                        flag = 1;
                        System.out.println("Expected: " + actualValue + " ::carddetailsNN::  " + "Actual Value: " + map.get(i).get(key));
                    } else {
                        flag = 2;
                        break;
                    }
                } else if (expectedValue.equalsIgnoreCase("Double")) {
                    if (isDouble(Double.valueOf(strActualValue))) {
                        flag = 1;
                        System.out.println("Expected: " + "Double" + " ::carddetailsDbl::  " + "Actual Value: " + map.get(i).get(key));
                    } else {
                        flag = 2;
                        break;
                    }
                } else if (expectedValue.equalsIgnoreCase("AlphaNumeric")) {
                    if (isDouble(Double.valueOf(strActualValue))) {
                        flag = 1;
                        System.out.println("Expected: " + "AlphaNumeric" + " ::carddetailsDbl::  " + "Actual Value: " + map.get(i).get(key));
                    } else {
                        flag = 2;
                        break;
                    }
                } else if (expectedValue.equalsIgnoreCase("Alphabet") || expectedValue.equalsIgnoreCase("String")) {
                    strActualValue = actualValue.toString();
                    if (isDouble(Double.valueOf(strActualValue))) {
                        flag = 1;
                        System.out.println("Expected: " + "Alphabet/String" + " ::carddetailsDbl::  " + "Actual Value: " + map.get(i).get(key));
                    } else {
                        flag = 2;
                        break;
                    }
                } else if (expectedValue.equalsIgnoreCase("Blank")) {
                    strActualValue = actualValue.toString();
                    if (strActualValue.equalsIgnoreCase("")) {
                        flag = 1;
                        System.out.println("Expected: " + "Blank" + " ::carddetailsBlnk::  " + "Actual Value: " + map.get(i).get(key));
                    } else {
                        flag = 2;
                        break;
                    }
                } else if (expectedValue.equalsIgnoreCase("Context") && key.equalsIgnoreCase("CardHolderName")) {
                    strActualValue = actualValue.toString();
                    expectedValue = "abcd";
                    if (strActualValue.equalsIgnoreCase(expectedValue)) {
                        flag = 1;
                        System.out.println("Expected: " + expectedValue + " ::cardHolder::  " + "Actual Value: " + strActualValue);
                    } else {
                        flag = 2;
                        break;
                    }
                } else if (expectedValue.equalsIgnoreCase("Context") && key.equalsIgnoreCase("EmployeeId")) {
                    strActualValue = actualValue.toString();
                    expectedValue = "Abcd";
                    if (strActualValue.equalsIgnoreCase(expectedValue)) {
                        flag = 1;
                        System.out.println("Expected: " + expectedValue + " ::cardHolder::  " + "Actual Value: " + strActualValue);
                    } else {
                        flag = 2;
                        break;
                    }
                } else if (expectedValue.equalsIgnoreCase("matches") && key.equalsIgnoreCase("Trackdata")) {
                    strActualValue = actualValue.toString();
                    String cardNo = array.get(i).get("CardNumber").toString();
                    if (strActualValue.matches("^;" + cardNo + "=[0-9]{15}\\?$")) {
                        flag = 1;
                        System.out.println("Expected: " + strActualValue + " ::trackdata::  " + "Actual Value: " + strActualValue);
                    } else {
                        flag = 2;
                        break;
                    }
                } else if (key.equalsIgnoreCase("ExpiryDate")) {

                    String expectedExpiryDate = DBUtils.getCurrentOrPastOrFutureDate(Integer.valueOf(expectedValue), "yyyy-MM-dd'T'hh:mm:ss");
                    flag = 1;
                    System.out.println("Expected: " + expectedExpiryDate + " ::carddetails::  " + "Actual Value: " + actualValue);
                } else if (actualValue.toString().equalsIgnoreCase(expectedValue)) {
                    flag = 1;
                    System.out.println("Expected: " + expectedValue + " ::carddetails::  " + "Actual Value: " + actualValue);
                } else {
                    flag = 2;
                    break;
                }
            }
            if (flag == 2) {
                assertThat(actualValue.toString())
                        .as(
                                "Failed to verify transaction response parameter : %s has returned as: %s value instead of : %s", key1,
                                actualValue.toString(), map.get(i).get(key1))
                        .isEqualTo(map.get(i).get(key1));
            }
        }
    }

    @Then("the status code should be {int}")
    public void theStatusCodeShouldBe(int arg0) {
        Response response = context.previousResponse;
        assertThat(response.statusCode()).isEqualTo(arg0);
    }

    @And("i should see the following in the card list in the database")
    public void iShouldSeeTheFollowingInTheCardListInTheDatabase(DataTable table) throws FrameworkException, ConfigPropertyException, SQLException {
        //   ArrayList<Map<String, ?>> array = JsonPath.with(context.previousResponse.asString()).get("cardDetailResponseList");
        Gson gson = new Gson();
        CardIssueResponse cardIssueResponseObject = gson.fromJson(context.previousResponse.asString(), CardIssueResponse.class);
        Long referenceNumber = cardIssueResponseObject.getCardDetailResponseList().get(0).getReferenceNumber();
        String referenceNumberString = Long.toString((referenceNumber));
        logger.info("referenceNumber is" + referenceNumberString);
        Map<String, String> cardDetailMap = DBUtils.getCardDetails(referenceNumberString);
        cardDetailMap.get("referenceNumber");

        Response response = context.previousResponse;
        CardIssueResponse a = response.as(CardIssueResponse.class, ObjectMapperType.GSON);
        CardDetailResponse resp = a.getCardDetailResponseList().get(0);
        ObjectMapper mapper = new ObjectMapper();
        Map map = mapper.convertValue(resp, Map.class);

        Map<String, String> tabletotest = table.asMap(String.class, String.class);

        assertThat(tabletotest.get("email")).isEqualTo(map.get("ActivationEmail"));
        assertThat(tabletotest.get("mobileNumber")).isEqualTo(map.get("ActivationMobileNumber"));
    }

    @And("the values in the card detail list response for the card {string} should match the DB values")
    public void theValuesInTheCardDetailListResponseForTheCardShouldMatchTheDBValues(String arg0) {
        
    }
}
