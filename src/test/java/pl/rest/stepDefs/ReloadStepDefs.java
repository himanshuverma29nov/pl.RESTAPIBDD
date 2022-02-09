package pl.rest.stepDefs;

import com.qc.cuke.ScenarioContext;
import com.qc.qa.ConfigPropertyException;
import com.qc.qa.FrameworkException;
import com.qc.qa.utils.Helper;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.And;
import io.restassured.response.Response;
import org.json.JSONArray;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import pl.rest.domain.response.CardIssueResponse;
import pl.rest.service.CardReload;
import pl.rest.utils.TestSetDataReader;
import pl.rest.utils.Transaction;

import java.util.Map;

public class ReloadStepDefs {
    private ScenarioContext context;
    private static final Logger logger = LoggerFactory.getLogger(ReloadStepDefs.class);
    TestSetDataReader testSetDataReader;
    CardReload cardReload;

    public ReloadStepDefs(ScenarioContext context) {
        {
            this.context = context;
            testSetDataReader = new TestSetDataReader(context);
            cardReload=new CardReload(context);
        }
    }

    @And("i am reloading the issued card with following details")
    public void iAmReloadingTheIssuedCardWithFollowingDetails(DataTable table) throws ConfigPropertyException, FrameworkException {
        Map<String, String> map = table.asMap(String.class, String.class);

        JSONObject object = new JSONObject();
        object.put("externalRequestId", Helper.generate_random_alphaNumeric(7));
        object.put("cardNetwork", map.get("cardNetwork"));
        object.put("cardCategoryId", map.get("cardCategoryId"));
        object.put("cardIdentifier", map.get("cardIdentifier"));
        object.put("checksum", "NbUNCWgKV/nC+On7DsoqCQ==");

        JSONObject cardetailobject = new JSONObject();

        if (map.get("referenceNumber").equalsIgnoreCase("context")) {
            CardIssueResponse cardIssueResponse = (CardIssueResponse) context.getResponseFromTransactionMap(Transaction.CREATEANDISSUE.name());
            Long ReferenceNumber = cardIssueResponse.getCardDetailResponseList().get(0).getReferenceNumber();
            cardetailobject.put("referenceNumber", ReferenceNumber);
        } else {
            cardetailobject.put("referenceNumber", map.get("referenceNumber"));
        }

        cardetailobject.put("serialNumber", map.get("serialNumber"));
        cardetailobject.put("amount", map.get("amount"));

        JSONArray array = new JSONArray();
        array.put(cardetailobject);
        object.put("cardDetailList", array);


        Response response=cardReload.reload(object.toString());

    }
}
