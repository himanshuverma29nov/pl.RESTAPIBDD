package pl.rest.stepDefs;

import com.qc.cuke.ScenarioContext;
import com.qc.qa.ConfigPropertyException;
import com.qc.qa.FrameworkException;
import com.qc.qa.utils.Helper;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.And;
import io.cucumber.java.en.When;
import io.restassured.mapper.ObjectMapperType;
import io.restassured.response.Response;
import org.json.JSONArray;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import pl.rest.domain.response.CardIssueResponse;
import pl.rest.service.CardIssue;
import pl.rest.utils.TestSetDataReader;
import pl.rest.utils.Transaction;

import java.util.Map;

public class CardIssueStepDefs {
    private ScenarioContext context;
    private static final Logger logger = LoggerFactory.getLogger(CardIssueStepDefs.class);
    TestSetDataReader testSetDataReader;
    CardIssue cardIssue;

    public CardIssueStepDefs(ScenarioContext context) {
        this.context = context;
        testSetDataReader = new TestSetDataReader(context);
        cardIssue = new CardIssue(context);
    }

    @When("i am issuing an Instant Non Reloadable Digital Card using {string} header with V1 of API")
    public void i_am_issuing_an_Instant_Non_Reloadable_Digital_Card_using_header(String arg0, DataTable table) throws ConfigPropertyException, FrameworkException {
        Map<String, String> map = table.asMap(String.class, String.class);
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("externalRequestId", Helper.generate_random_alphaNumeric(7));
        jsonObject.put("cardSchemeId", map.get("cardSchemeId"));
        jsonObject.put("checksum", "5x3GNrnStyS2PkMvV6EeAw==");
        jsonObject.put("isLinkToBeSentOnMobile", true);
        JSONArray cardDetailListArray = new JSONArray();
        JSONObject cardDetailListObject = new JSONObject();
        cardDetailListObject.put("customerName", map.get("customerName"));
        if (map.containsKey("mobileNumber")) {
            if (map.get("mobileNumber").equalsIgnoreCase("null")) {
                cardDetailListObject.put("mobileNumber", JSONObject.NULL);
            } else {
                cardDetailListObject.put("mobileNumber", map.get("mobileNumber"));
            }
        } else {
            cardDetailListObject.put("mobileNumber", "8010251243");
        }
        cardDetailListObject.put("email", map.get("email"));
        cardDetailListObject.put("amount", map.get("amount"));
        cardDetailListArray.put(cardDetailListObject);
        jsonObject.put("cardDetailList", cardDetailListArray);
        System.out.println("This is the JSON" + jsonObject.toString());
        Object issuingCard = jsonObject.toString();
        Response response = null;
        response = cardIssue.cardIssueNonReloadableDigital(issuingCard, arg0);
        CardIssueResponse cardIssueResponse = response.as(CardIssueResponse.class, ObjectMapperType.GSON);
        context.addResponseInTransactionMap(Transaction.CREATEANDISSUE.name(), cardIssueResponse);
    }

    @When("i am issuing an Instant Non Reloadable Digital Card using {string} header with V2 of API")
    public void i_am_issuing_an_Instant_Non_Reloadable_Digital_Card_with_V2_API(String arg0, DataTable table) throws ConfigPropertyException, FrameworkException {
        Map<String, String> map = table.asMap(String.class, String.class);
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("externalRequestId", Helper.generate_random_alphaNumeric(7));
        jsonObject.put("cardSchemeId", map.get("cardSchemeId"));
        jsonObject.put("checksum", "5x3GNrnStyS2PkMvV6EeAw==");
        JSONArray cardDetailListArray = new JSONArray();
        JSONObject cardDetailListObject = new JSONObject();
        cardDetailListObject.put("customerName", map.get("customerName"));
        if (map.containsKey("mobileNumber")) {
            if (map.get("mobileNumber").equalsIgnoreCase("null")) {
                cardDetailListObject.put("mobileNumber", JSONObject.NULL);
            } else {
                cardDetailListObject.put("mobileNumber", map.get("mobileNumber"));
            }
        } else {
            cardDetailListObject.put("mobileNumber", "1111111111");
        }
        cardDetailListObject.put("email", map.get("email"));
        cardDetailListObject.put("amount", map.get("amount"));
        cardDetailListArray.put(cardDetailListObject);
        jsonObject.put("cardDetailList", cardDetailListArray);
        System.out.println("This is the JSON" + jsonObject.toString());
        Object issuingCard = jsonObject.toString();
        Response response = null;
        cardIssue.cardIssueNonReloadableDigital(issuingCard, arg0);
    }

    @When("i am issuing an Instant Reloadable Digital Card using {string} header with V1 of API")
    @And("i am again issuing the the card with the same details with {string} for V1 API")
    public void iAmIssuingAnInstantReloadableDigitalCardUsingHeaderWithVOfAPI(String arg0, DataTable table) throws ConfigPropertyException, FrameworkException {
        Map<String, String> map = table.asMap(String.class, String.class);
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("externalRequestId", Helper.generate_random_alphaNumeric(7));
        jsonObject.put("cardSchemeId", map.get("cardSchemeId"));
        jsonObject.put("checksum", "5x3GNrnStyS2PkMvV6EeAw==");
        jsonObject.put("isLinkToBeSentOnMobile", true);
        JSONArray cardDetailListArray = new JSONArray();
        JSONObject cardDetailListObject = new JSONObject();
        cardDetailListObject.put("customerName", map.get("customerName"));
        if (map.containsKey("mobileNumber")) {
            if (map.get("mobileNumber").equalsIgnoreCase("null")) {
                cardDetailListObject.put("mobileNumber", JSONObject.NULL);
            } else if (map.get("mobileNumber").equalsIgnoreCase("context")) {
                String Mobile = context.getDataStore().get("MobileNumber");
                cardDetailListObject.put("mobileNumber", Mobile);
            } else {
                cardDetailListObject.put("mobileNumber", map.get("mobileNumber"));
            }
        } else {
            cardDetailListObject.put("mobileNumber", "8010251243");
        }
        cardDetailListObject.put("email", map.get("email"));
        cardDetailListObject.put("amount", map.get("amount"));
        cardDetailListArray.put(cardDetailListObject);
        jsonObject.put("cardDetailList", cardDetailListArray);
        System.out.println("This is the JSON" + jsonObject.toString());
        Object issuingCard = jsonObject.toString();
        Response response = null;
        response=cardIssue.cardIssueReloadableDigital(issuingCard, arg0);
        context.addResponseInTransactionMap(Transaction.CREATEANDISSUE.name(),response.as(CardIssueResponse.class,ObjectMapperType.GSON));
    }

    @When("i am issuing an Instant Reloadable Digital Card using {string} header with V2 of API")
    @And("i am again issuing the the card with the same details with {string} for V2 API")
    public void i_am_issuing_an_Instant_Reloadable_Digital_Card_with_V2_API(String arg0, DataTable table) throws ConfigPropertyException, FrameworkException {
        Map<String, String> map = table.asMap(String.class, String.class);
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("externalRequestId", Helper.generate_random_alphaNumeric(7));
        jsonObject.put("cardSchemeId", map.get("cardSchemeId"));
        jsonObject.put("checksum", "5x3GNrnStyS2PkMvV6EeAw==");
        JSONArray cardDetailListArray = new JSONArray();
        JSONObject cardDetailListObject = new JSONObject();
        cardDetailListObject.put("customerName", map.get("customerName"));
        if (map.containsKey("mobileNumber")) {
            if (map.get("mobileNumber").equalsIgnoreCase("null")) {
                cardDetailListObject.put("mobileNumber", JSONObject.NULL);
            } else if (map.get("mobileNumber").equalsIgnoreCase("context")) {
                String Mobile = context.getDataStore().get("MobileNumber");
                cardDetailListObject.put("mobileNumber", Mobile);
            } else {
                cardDetailListObject.put("mobileNumber", map.get("mobileNumber"));
            }
        } else {
            cardDetailListObject.put("mobileNumber", "8010251243");
        }
        cardDetailListObject.put("email", map.get("email"));
        cardDetailListObject.put("amount", map.get("amount"));
        cardDetailListArray.put(cardDetailListObject);
        jsonObject.put("cardDetailList", cardDetailListArray);
        System.out.println("This is the JSON" + jsonObject.toString());
        Object issuingCard = jsonObject.toString();
        Response response = null;
        cardIssue.cardIssueReloadableDigital(issuingCard, arg0);
    }

    @When("i am issuing an instant physical non reloadable card with following detail")
    public void iAmIssuingAnInstantPhysicalReloadableCardWithFollowingDetail(DataTable table) throws ConfigPropertyException, FrameworkException {
        Map<String, String> map = table.asMap(String.class, String.class);
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("externalRequestId", Helper.generate_random_alphaNumeric(7));
        jsonObject.put("cardSchemeId", map.get("cardSchemeId"));
        jsonObject.put("pinMode", map.get("pinMode"));
        jsonObject.put("cardIdentifier", map.get("cardIdentifier"));
        jsonObject.put("checksum", "5x3GNrnStyS2PkMvV6EeAw==");
        JSONArray cardDetailListArray = new JSONArray();
        JSONObject cardDetailListObject = new JSONObject();
        cardDetailListObject.put("customerName", map.get("customerName"));

        if (map.get("referenceNumber").equalsIgnoreCase("null")) {
            cardDetailListObject.put("referenceNumber", JSONObject.NULL);
        } else {
            if (map.get("referenceNumber").equalsIgnoreCase("database"))
                cardDetailListObject.put("referenceNumber", context.getDataStore().get("referenceNumber"));
            else
                cardDetailListObject.put("referenceNumber", map.get("referenceNumber"));
        }

        if (map.get("serialNumber").equalsIgnoreCase("null")) {
            cardDetailListObject.put("serialNumber", JSONObject.NULL);
        } else {
            if (map.get("serialNumber").equalsIgnoreCase("database"))
                cardDetailListObject.put("serialNumber", context.getDataStore().get("serialNumber"));
            else
                cardDetailListObject.put("serialNumber", map.get("serialNumber"));
        }

        if (map.containsKey("mobileNumber")) {
            if (map.get("mobileNumber").equalsIgnoreCase("null")) {
                cardDetailListObject.put("mobileNumber", JSONObject.NULL);
            } else {
                cardDetailListObject.put("mobileNumber", map.get("mobileNumber"));
            }
        } else {
            cardDetailListObject.put("mobileNumber", "8010251243");
        }

        if (map.get("email").equalsIgnoreCase("null"))
            cardDetailListObject.put("email", JSONObject.NULL);
        else
            cardDetailListObject.put("email", map.get("email"));

        cardDetailListObject.put("amount", map.get("amount"));
        cardDetailListArray.put(cardDetailListObject);
        jsonObject.put("cardDetailList", cardDetailListArray);
        System.out.println("This is the JSON" + jsonObject.toString());
        Object issuingCard = jsonObject.toString();
        Response response = null;
        response = cardIssue.cardIssueNonReloadablePhysical(issuingCard);
        CardIssueResponse cardIssueResponse = response.as(CardIssueResponse.class, ObjectMapperType.GSON);
        context.addResponseInTransactionMap(Transaction.CREATEANDISSUE.name(),cardIssueResponse);
    }
}
