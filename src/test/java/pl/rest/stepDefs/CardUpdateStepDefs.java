package pl.rest.stepDefs;

import com.google.gson.Gson;
import com.qc.cuke.ScenarioContext;
import com.qc.qa.ConfigPropertyException;
import com.qc.qa.FrameworkException;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.And;
import io.cucumber.java.en.When;
import org.json.JSONArray;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import pl.rest.domain.response.CardIssueResponse;
import pl.rest.service.CardUpdate;
import pl.rest.utils.TestSetDataReader;
import pl.rest.utils.Transaction;

import java.util.List;
import java.util.Map;

public class CardUpdateStepDefs {

    private ScenarioContext context;
    private static final Logger logger = LoggerFactory.getLogger(CardUpdateStepDefs.class);
    TestSetDataReader testSetDataReader;
    CardUpdate cardUpdate;

    public CardUpdateStepDefs(ScenarioContext context) {
        this.context = context;
        testSetDataReader = new TestSetDataReader(context);
        cardUpdate = new CardUpdate(context);
    }

    @When("i am changing the status with the following details:")
    @And("i am again changing the status with the following details:")
    public void iAmChangingTheStatusWithTheFollowingDetails(DataTable table) throws ConfigPropertyException, FrameworkException {
        List<Map<String, String>> data = table.asMaps(String.class, String.class);

        JSONObject adminCardUpdateRequestJSON = new JSONObject();

        for (int i = 0; i < data.size(); i++) {
            JSONObject cardUpdateRequestObject = new JSONObject();
            if (data.get(i).get("referenceNumber").equalsIgnoreCase("context")) {
                CardIssueResponse cardIssueResponseObject = (CardIssueResponse) context.getResponseFromTransactionMap(Transaction.CREATEANDISSUE.name());
                Long referenceNumber1 = cardIssueResponseObject.getCardDetailResponseList().get(i).getReferenceNumber();
                String referenceNumberString = Long.toString((referenceNumber1));
                cardUpdateRequestObject.put("referenceNumber", referenceNumberString);
            } else {
                cardUpdateRequestObject.put("referenceNumber", data.get(i).get("referenceNumber"));
            }
            cardUpdateRequestObject.put("cardStatus", data.get(i).get("cardStatus"));
            cardUpdateRequestObject.put("reason", data.get(i).get("reason"));

            JSONArray array = new JSONArray();
            array.put(cardUpdateRequestObject);

            adminCardUpdateRequestJSON.put("cardStatusUpdateRequestList", array);
            adminCardUpdateRequestJSON.put("remarks", data.get(i).get("remarks"));
        }
        cardUpdate.adminCardUpdate(adminCardUpdateRequestJSON.toString());
    }

    @When("i am changing the status with the following details with customer API:")
    public void iAmChangingTheStatusWithTheFollowingDetailsWithCustomerAPI(DataTable table) throws ConfigPropertyException, FrameworkException {
        Map<String, String> data = table.asMap(String.class, String.class);
        JSONObject cardUpdateRequestObject = new JSONObject();
        if (data.get("referenceNumber").equalsIgnoreCase("context")) {
            Gson gson = new Gson();
            CardIssueResponse cardIssueResponseObject = (CardIssueResponse) context.getResponseFromTransactionMap(Transaction.CREATEANDISSUE.name());
            Long referenceNumber1 = cardIssueResponseObject.getCardDetailResponseList().get(0).getReferenceNumber();
            String referenceNumberString = Long.toString((referenceNumber1));
            cardUpdateRequestObject.put("referenceNumber", referenceNumberString);
        } else {
            cardUpdateRequestObject.put("referenceNumber", data.get("referenceNumber"));
        }
        cardUpdateRequestObject.put("cardStatus", data.get("cardStatus"));
        cardUpdateRequestObject.put("remarks", data.get("remarks"));
        cardUpdate.customerCardUpdate(cardUpdateRequestObject.toString());
    }
}
