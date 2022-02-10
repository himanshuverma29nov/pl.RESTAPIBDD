package pl.rest.stepDefs;

import com.qc.cuke.ScenarioContext;
import com.qc.qa.ConfigPropertyException;
import com.qc.qa.FrameworkException;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.When;
import io.restassured.mapper.ObjectMapperType;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import pl.rest.domain.response.CardIssueResponse;
import pl.rest.service.CorporateAndCardDetails;
import pl.rest.utils.TestSetDataReader;

import java.util.Map;

public class CardTransactionDetails {

    private ScenarioContext context;
    private static final Logger logger = LoggerFactory.getLogger(CardTransactionDetails.class);
    TestSetDataReader testSetDataReader;
    CorporateAndCardDetails corporateAndCardDetails;

    public CardTransactionDetails(ScenarioContext context) {
        this.context = context;
        testSetDataReader = new TestSetDataReader(context);
        corporateAndCardDetails = new CorporateAndCardDetails(context);
    }

    @When("i am getting the transaction details with {string} header with V1 transaction detail API")
    public void iAmGettingTheTransactionDetailsWithHeaderWithVTransactionDetailAPI(String arg0, DataTable table) throws ConfigPropertyException, FrameworkException {
        Map<String, String> map = table.asMap(String.class, String.class);
        JSONObject cardTransactionRequest = new JSONObject();

        if (map.get("referenceNumber").equalsIgnoreCase("context")) {
            CardIssueResponse cardIssueResponse = context.previousResponse.as(CardIssueResponse.class, ObjectMapperType.GSON);
            cardTransactionRequest.put("referenceNumber", cardIssueResponse.getCardDetailResponseList().get(0).getReferenceNumber());
        }
        corporateAndCardDetails.getCarTransactiondDetail(cardTransactionRequest, arg0);
    }
}


