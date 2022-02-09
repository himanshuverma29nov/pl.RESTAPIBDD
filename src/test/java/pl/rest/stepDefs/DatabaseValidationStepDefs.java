package pl.rest.stepDefs;

import com.google.gson.Gson;
import com.qc.cuke.ScenarioContext;
import com.qc.qa.ConfigPropertyException;
import com.qc.qa.FrameworkException;
import com.qc.qa.utils.DataGenerator;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.And;
import io.restassured.path.json.JsonPath;
import io.restassured.path.json.config.JsonPathConfig;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.testng.Assert;
import pl.rest.domain.response.AdminCardUpdateResponse;
import pl.rest.domain.response.CardIssueResponse;
import pl.rest.service.Authorize;
import pl.rest.utils.DBUtils;
import pl.rest.utils.TestSetDataReader;

import java.sql.SQLException;
import java.text.ParseException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import static com.qc.BaseAPI.getResponseKeyValue;
import static org.assertj.core.api.Assertions.assertThat;

public class DatabaseValidationStepDefs {

    private static final Logger logger = LoggerFactory.getLogger(DatabaseValidationStepDefs.class);

    private ScenarioContext context;
    public Authorize authorize;
    public DataGenerator dataFeeder = new DataGenerator();
    private Map<String, String> requestParams = new HashMap<>();
    public TestSetDataReader testSetDataReader;

    public DatabaseValidationStepDefs(ScenarioContext context) {
        this.context = context;
        authorize = new Authorize(context);
        testSetDataReader = new TestSetDataReader(context);
    }

    public String getCurrentDate() {
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        LocalDateTime now = LocalDateTime.now();
        return dtf.format(now);
    }

    public String DBDate(String Date) throws ParseException {
        String[] a = Date.split(" ");
        return a[0];
    }

    @And("i should see the following details in the card table")
    public void iShouldSeeTheFollowingInTheCardListInTheDatabase(DataTable table) throws FrameworkException, ConfigPropertyException, SQLException {
        //ArrayList<Map<String, ?>> array = JsonPath.with(context.previousResponse.asString()).get("cardDetailResponseList");
        Gson gson = new Gson();
        CardIssueResponse cardIssueResponseObject = gson.fromJson(context.previousResponse.asString(), CardIssueResponse.class);
        Long OrderId = cardIssueResponseObject.getOrderId();
        Map<String, String> cardDetailMap = DBUtils.getTableAsMap("Select * from card where ordersummaryid=" + OrderId + ";");

        Map<String, String> tabletotest = table.asMap(String.class, String.class);

        for (String columname : tabletotest.keySet()) {
            int flag = 0;
            String expectedValue = tabletotest.get(columname);
            String actualValue = cardDetailMap.get(columname);
            {
                if (tabletotest.get(columname).equalsIgnoreCase(cardDetailMap.get(columname))) {
                    flag = 1;
                    System.out.println("Expected: " + expectedValue + " ::cardetailsinDB::  " + "Actual Value: " + actualValue);
                } else {
                    flag = 2;
                    break;
                }
            }
            if (flag == 2) {
                assertThat(actualValue)
                        .as(
                                "Failed to verify transaction response parameter : %s has returned as: %s value instead of : %s", columname,
                                actualValue)
                        .isEqualTo(expectedValue);
            }
        }
    }

    @And("i should see the following details in the ExternalRequestDetail table")
    public void iShouldSeeTheFollowingDetailsInTheExternalRequestDetailTable(DataTable table) throws FrameworkException, ConfigPropertyException, SQLException, ParseException {
        Gson gson = new Gson();
        CardIssueResponse cardIssueResponseObject = gson.fromJson(context.previousResponse.asString(), CardIssueResponse.class);
        Long OrderId = cardIssueResponseObject.getOrderId();
        Map<String, String> cardDetailMap = DBUtils.getTableAsMap("Select * from ExternalRequestDetail where ordersummaryid=" + OrderId + ";");

        Map<String, String> map = table.asMap(String.class, String.class);

        for (String key : map.keySet()) {
            JsonPath jsonPathEvaluator = context.previousResponse.jsonPath().using(new JsonPathConfig(JsonPathConfig.NumberReturnType.BIG_DECIMAL));
//            JsonPath jsonPathEvaluator = context.previousResponse.jsonPath();
            String expectedValue = map.get(key);
            String ActualValueFromDB = cardDetailMap.get(key);
            if (key.equalsIgnoreCase("ExternalRequestId") && map.get(key).equalsIgnoreCase("context")) {
                String responsKeyValue = getResponseKeyValue("externalRequestId", jsonPathEvaluator);
                expectedValue = responsKeyValue;
            } else if (map.get(key).equalsIgnoreCase("CurrentDate")) {
                expectedValue = getCurrentDate();
                ActualValueFromDB = DBDate(cardDetailMap.get(key));
            }

            if (map.get(key).equalsIgnoreCase("NotNull")) {
                Assert.assertNotNull(ActualValueFromDB);
            } else {
                assertThat(ActualValueFromDB)
                        .as(
                                "Failed to verify transaction response parameter : %s has returned as: %s value instead of : %s", key,
                                ActualValueFromDB, expectedValue)
                        .isEqualTo(expectedValue);
            }
        }
    }

    @And("i should see the following details in the corporateaccounthistory table")
    public void iShouldSeeTheFollowingDetailsInTheCorporateaccounthistoryTable(DataTable table) throws FrameworkException, ConfigPropertyException, SQLException {
        Gson gson = new Gson();
        CardIssueResponse cardIssueResponseObject = gson.fromJson(context.previousResponse.asString(), CardIssueResponse.class);
        Long OrderId = cardIssueResponseObject.getOrderId();
        Map<String, String> cardDetailMap = DBUtils.getTableAsMap("Select * from corporateaccounthistory where ordersummaryid=" + OrderId + ";");

        Map<String, String> tabletotest = table.asMap(String.class, String.class);

        for (String columname : tabletotest.keySet()) {
            int flag = 0;
            String expectedValue = tabletotest.get(columname);
            String actualValue = cardDetailMap.get(columname);
            {
                if (tabletotest.get(columname).equalsIgnoreCase(cardDetailMap.get(columname))) {
                    flag = 1;
                    System.out.println("Expected: " + expectedValue + " ::cardetailsinDB::  " + "Actual Value: " + actualValue);
                } else {
                    flag = 2;
                    break;
                }
            }
            if (flag == 2) {
                assertThat(actualValue)
                        .as(
                                "Failed to verify transaction response parameter : %s has returned as: %s value instead of : %s", columname,
                                actualValue)
                        .isEqualTo(expectedValue);
            }
        }
    }

    @And("i should see the following details in the giftcardtransaction table")
    public void iShouldSeeTheFollowingDetailsInTheGiftcardtransactionTable(DataTable table) throws FrameworkException, ConfigPropertyException, SQLException {
        Gson gson = new Gson();
        CardIssueResponse cardIssueResponseObject = gson.fromJson(context.previousResponse.asString(), CardIssueResponse.class);
        Long OrderId = cardIssueResponseObject.getOrderId();
        Map<String, String> cardDetailMap = DBUtils.getTableAsMap("Select * from giftcardtransaction where ordersummaryid=" + OrderId + ";");

        Map<String, String> tabletotest = table.asMap(String.class, String.class);

        for (String columname : tabletotest.keySet()) {
            int flag = 0;
            String expectedValue = tabletotest.get(columname);
            String actualValue = cardDetailMap.get(columname);
            {
                if (tabletotest.get(columname).equalsIgnoreCase(cardDetailMap.get(columname))) {
                    flag = 1;
                    System.out.println("Expected: " + expectedValue + " ::cardetailsinDB::  " + "Actual Value: " + actualValue);
                } else {
                    flag = 2;
                    break;
                }
            }
            if (flag == 2) {
                assertThat(actualValue)
                        .as(
                                "Failed to verify transaction response parameter : %s has returned as: %s value instead of : %s", columname,
                                actualValue)
                        .isEqualTo(expectedValue);
            }
        }

    }

    @And("i should see the following details in the ordersummary table")
    public void iShouldSeeTheFollowingDetailsInTheOrdersummaryTable(DataTable table) throws FrameworkException, ConfigPropertyException, SQLException, ParseException {
        Gson gson = new Gson();
        CardIssueResponse cardIssueResponseObject = gson.fromJson(context.previousResponse.asString(), CardIssueResponse.class);
        Long OrderId = cardIssueResponseObject.getOrderId();
        Map<String, String> cardDetailMap = DBUtils.getTableAsMap("Select * from ordersummary where ordersummaryid=" + OrderId + ";");

        Map<String, String> map = table.asMap(String.class, String.class);

        for (String key : map.keySet()) {
            JsonPath jsonPathEvaluator = context.previousResponse.jsonPath().using(new JsonPathConfig(JsonPathConfig.NumberReturnType.BIG_DECIMAL));
//            JsonPath jsonPathEvaluator = context.previousResponse.jsonPath();
            String expectedValue = map.get(key);
            String ActualValueFromDB = cardDetailMap.get(key);
            if (key.equalsIgnoreCase("TimeTaken") && map.get(key).equalsIgnoreCase("context")) {
                String responsKeyValue = Long.toString(context.previousResponse.getTimeIn(TimeUnit.MILLISECONDS));
                expectedValue = responsKeyValue;
            } else if (map.get(key).equalsIgnoreCase("CurrentDate")) {
                expectedValue = getCurrentDate();
                ActualValueFromDB = DBDate(cardDetailMap.get(key));
            }
            if (map.get(key).equalsIgnoreCase("NotNull")) {
                Assert.assertNotNull(ActualValueFromDB);
            } else {
                assertThat(ActualValueFromDB)
                        .as(
                                "Failed to verify transaction response parameter : %s has returned as: %s value instead of : %s", key,
                                ActualValueFromDB, expectedValue)
                        .isEqualTo(expectedValue);
            }
        }
    }


    @And("i should see the following details in the ExternalRequestTimeLog table")
    public void iShouldSeeTheFollowingDetailsInTheExternalRequestTimeLogTable(DataTable table) throws FrameworkException, ConfigPropertyException, SQLException, ParseException {
        Map<String, String> cardDetailMap = DBUtils.getTableAsMap("SELECT TOP 1 * FROM ExternalRequestTimeLog ORDER BY ExternalRequestTimeLogId DESC");

        Map<String, String> map = table.asMap(String.class, String.class);

        for (String key : map.keySet()) {
            JsonPath jsonPathEvaluator = context.previousResponse.jsonPath().using(new JsonPathConfig(JsonPathConfig.NumberReturnType.BIG_DECIMAL));
//            JsonPath jsonPathEvaluator = context.previousResponse.jsonPath();
            String expectedValue = map.get(key);
            String ActualValueFromDB = cardDetailMap.get(key);
            if (key.equalsIgnoreCase("TimeTaken") && map.get(key).equalsIgnoreCase("context")) {
                String responsKeyValue = Long.toString(context.previousResponse.getTimeIn(TimeUnit.MILLISECONDS));
                expectedValue = responsKeyValue;
            } else if (map.get(key).equalsIgnoreCase("CurrentDate")) {
                expectedValue = getCurrentDate();
                ActualValueFromDB = DBDate(cardDetailMap.get(key));
            }

            if (map.get(key).equalsIgnoreCase("NotNull")) {
                Assert.assertNotNull(ActualValueFromDB);
            } else {
                assertThat(ActualValueFromDB)
                        .as(
                                "Failed to verify transaction response parameter : %s has returned as: %s value instead of : %s", key,
                                ActualValueFromDB, expectedValue)
                        .isEqualTo(expectedValue);
            }
        }
    }


    @And("i should see the following card status in the card table")
    public void iShouldSeeTheFollowingCardStatusInTheCardTable(DataTable table) throws FrameworkException, ConfigPropertyException, SQLException, ParseException {
        Gson gson = new Gson();
        AdminCardUpdateResponse adminCardUpdateResponse = gson.fromJson(context.previousResponse.asString(), AdminCardUpdateResponse.class);
        Long ReferenceNumber = adminCardUpdateResponse.getCardStatusUpdateResponseList().get(0).getReferenceNumber();
        Map<String, String> cardDetailMap = DBUtils.getTableAsMap("Select * from card where ReferenceNumber=" + ReferenceNumber + ";");

        Map<String, String> map = table.asMap(String.class, String.class);

        for (String key : map.keySet()) {
            JsonPath jsonPathEvaluator = context.previousResponse.jsonPath().using(new JsonPathConfig(JsonPathConfig.NumberReturnType.BIG_DECIMAL));
//            JsonPath jsonPathEvaluator = context.previousResponse.jsonPath();
            String expectedValue = map.get(key);
            String ActualValueFromDB = cardDetailMap.get(key);
            if (key.equalsIgnoreCase("TimeTaken") && map.get(key).equalsIgnoreCase("context")) {
                String responsKeyValue = Long.toString(context.previousResponse.getTimeIn(TimeUnit.MILLISECONDS));
                expectedValue = responsKeyValue;
            } else if (map.get(key).equalsIgnoreCase("CurrentDate")) {
                expectedValue = getCurrentDate();
                ActualValueFromDB = DBDate(cardDetailMap.get(key));
                System.out.println("Expected: " + expectedValue + " ::DateFromDB::  " + "Actual Value: " + ActualValueFromDB);
            }
            if (map.get(key).equalsIgnoreCase("NotNull")) {
                Assert.assertNotNull(ActualValueFromDB);
            } else {
                assertThat(ActualValueFromDB)
                        .as(
                                "Failed to verify transaction response parameter : %s has returned as: %s value instead of : %s", key,
                                ActualValueFromDB, expectedValue)
                        .isEqualTo(expectedValue);
            }
        }
    }
}
