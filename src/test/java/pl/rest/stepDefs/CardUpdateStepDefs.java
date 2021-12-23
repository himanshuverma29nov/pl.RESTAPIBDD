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

import java.util.Map;

public class CardUpdateStepDefs {

    private ScenarioContext context;
    private static final Logger logger = LoggerFactory.getLogger(CardIssueStepDefs.class);
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
        Map<String, String> data = table.asMap(String.class, String.class);

        Gson gson = new Gson();
        CardIssueResponse cardIssueResponseObject = gson.fromJson(context.previousResponse.asString(), CardIssueResponse.class);
        Long referenceNumber1 = cardIssueResponseObject.getCardDetailResponseList().get(0).getReferenceNumber();
        String referenceNumberString = Long.toString((referenceNumber1));
        JSONObject cardUpdateRequestObject = new JSONObject();

        if (data.get("referenceNumber").equalsIgnoreCase("context")) {
            cardUpdateRequestObject.put("referenceNumber", referenceNumberString);
        } else {
            cardUpdateRequestObject.put("referenceNumber", data.get("referenceNumber"));
        }
        cardUpdateRequestObject.put("cardStatus", data.get("cardStatus"));
        cardUpdateRequestObject.put("reason", data.get("reason"));

        JSONArray array = new JSONArray();
        array.put(cardUpdateRequestObject);

        JSONObject adminCardUpdateRequestJSON = new JSONObject();
        adminCardUpdateRequestJSON.put("cardStatusUpdateRequestList", array);
        adminCardUpdateRequestJSON.put("remarks", data.get("remarks"));

        cardUpdate.adminCardUpdate(adminCardUpdateRequestJSON.toString());
    }
}
