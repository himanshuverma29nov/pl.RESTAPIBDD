package pl.rest.stepDefs;

import com.google.gson.Gson;
import com.qc.cuke.ScenarioContext;
import com.qc.qa.ConfigPropertyException;
import com.qc.qa.FrameworkException;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.And;
import io.cucumber.java.en.When;
import io.restassured.mapper.ObjectMapperType;
import io.restassured.response.Response;
import org.json.JSONArray;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import pl.rest.domain.response.AdminCardUpdateResponse;
import pl.rest.domain.response.CardDetailResponse;
import pl.rest.domain.response.CardIssueResponse;
import pl.rest.service.CorporateAndCardDetails;
import pl.rest.utils.TestSetDataReader;
import pl.rest.utils.Transaction;

import java.util.List;
import java.util.Map;

public class CorporateDetailsStepDefs {

    private ScenarioContext context;
    private static final Logger logger = LoggerFactory.getLogger(CardIssueStepDefs.class);
    TestSetDataReader testSetDataReader;
    CorporateAndCardDetails corporateAndCardDetails;

    public CorporateDetailsStepDefs(ScenarioContext context) {
        this.context = context;
        testSetDataReader = new TestSetDataReader(context);
        corporateAndCardDetails = new CorporateAndCardDetails(context);
    }

    @When("i get the card category details with {string} header using (V1/V2) API")
    public void iGetTheCardCategoryDetailsWithHeaderUsingV1API(String arg0) throws ConfigPropertyException, FrameworkException {
        corporateAndCardDetails.cardCategory(arg0);
    }

    @When("i get the card scheme from API using the {string} header using V API")
    public void iGetTheCardSchemeFromAPIUsingTheHeaderUsingVAPI(String arg0) throws ConfigPropertyException, FrameworkException {
    }

    @When("i get the card detail using {string} header with V1 API for the following card")
    public void iGetTheCardDetailUsingHolderWithVAPIForTheFollowingCard(String arg0, DataTable table) throws ConfigPropertyException, FrameworkException {

        Map<String, String> referenceNumber = table.asMap(String.class, String.class);
        JSONArray jsonArray = new JSONArray();

        JSONObject object = new JSONObject();
        if (referenceNumber.get("Reference Number").equalsIgnoreCase("context")) {
            CardIssueResponse cardIssueResponse = (CardIssueResponse) context.getResponseFromTransactionMap(Transaction.CREATEANDISSUE.name());
            Long ref = cardIssueResponse.getCardDetailResponseList().get(0).getReferenceNumber();
            String referenceNumberString = Long.toString((ref));
            jsonArray.put(referenceNumberString);
        } else {
            jsonArray.put(referenceNumber.get("Reference Number"));
        }
        object.put("cardDetailRequestList", jsonArray);

        corporateAndCardDetails.CardDetail(arg0, object.toString());
    }

    @When("i get the card detail using {string} header with V1 API for the previously issued card")
    public void iGetTheCardDetailUsingHeaderWithVAPIForTheFollowingCard(String arg0, DataTable table) throws ConfigPropertyException, FrameworkException {

        Map<String, String> referenceNumber = table.asMap(String.class, String.class);
        JSONArray jsonArray = new JSONArray();

        JSONObject object = new JSONObject();
        if (referenceNumber.get("Reference Number").equalsIgnoreCase("context")) {
            Gson gson = new Gson();
            CardIssueResponse cardIssueResponse = (CardIssueResponse) context.getResponseFromTransactionMap(Transaction.CREATEANDISSUE.name());
            Long referenceNumber1 = cardIssueResponse.getCardDetailResponseList().get(0).getReferenceNumber();
            String referenceNumberString = Long.toString((referenceNumber1));
            jsonArray.put(referenceNumberString);
        } else {
            jsonArray.put(referenceNumber.get("Reference Number"));
        }
        object.put("cardDetailRequestList", jsonArray);

        Response response = corporateAndCardDetails.CardDetail(arg0, object.toString());

        CardDetailResponse cardDetailResponse = response.as(CardDetailResponse.class, ObjectMapperType.GSON);

        context.addResponseInTransactionMap(Transaction.CARD_DETAIL.name(), cardDetailResponse);
    }

    @When("i get the card detail using {string} holder with V2 API for the following card")
    public void iGetTheCardDetailUsingHolderWithV2APIForTheFollowingCard(String arg0, DataTable table) throws ConfigPropertyException, FrameworkException {
        List<String> referenceNumberList = table.asList(String.class);

        JSONArray array = new JSONArray();
        array.put(referenceNumberList);

        JSONObject object = new JSONObject();

        object.put("referenceNumberList", array);

        corporateAndCardDetails.cardScheme(object.toString(), arg0);
    }
}
