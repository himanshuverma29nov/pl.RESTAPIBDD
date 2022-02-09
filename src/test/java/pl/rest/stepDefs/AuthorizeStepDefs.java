package pl.rest.stepDefs;

import com.qc.cuke.ScenarioContext;
import com.qc.qa.ConfigPropertyException;
import com.qc.qa.FrameworkException;
import com.qc.qa.utils.DataGenerator;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;
import io.restassured.mapper.ObjectMapperType;
import io.restassured.response.Response;
import pl.rest.domain.response.AuthorizeResponse;
import pl.rest.domain.response.AuthorizeResponseV2;
import pl.rest.service.Authorize;
import pl.rest.service.CardIssue;
import pl.rest.utils.TestSetDataReader;
import pl.rest.utils.Transaction;

import java.util.HashMap;
import java.util.Map;

public class AuthorizeStepDefs {

    private ScenarioContext context;
    public Authorize authorize;
    public DataGenerator dataFeeder = new DataGenerator();
    private Map<String, String> requestParams = new HashMap<>();
    public TestSetDataReader testSetDataReader;
    public CardIssue cardIssue;

    public AuthorizeStepDefs(ScenarioContext context) {
        this.context = context;
        authorize = new Authorize(context);
        // cardIssueAuthorize = new CardIssueAuthorize(context);
        testSetDataReader = new TestSetDataReader(context);
    }


    public AuthorizeResponse setAuthorizeResponse(Response response) {
        context.previousResponse = response;
        AuthorizeResponse authorizeResponse = response.as(AuthorizeResponse.class, ObjectMapperType.GSON);
        context.addResponseInTransactionMap(Transaction.AUTHORIZE.name(), authorizeResponse);
        return authorizeResponse;
    }

    public AuthorizeResponseV2 setAuthorizeResponseV2(Response response) {
        context.previousResponse = response;
        AuthorizeResponseV2 authorizeResponse = response.as(AuthorizeResponseV2.class, ObjectMapperType.GSON);
        context.addResponseInTransactionMap(Transaction.AUTHORIZE.name(), authorizeResponse);
        return authorizeResponse;
    }

    @Given("i am an authorized corporate user")
    @When("i am generating the token with the old header")
    public void IamAnAuthorizedUser() throws ConfigPropertyException, FrameworkException {
        String userName = null;
        Response response = authorize.authorize(requestParams);
        setAuthorizeResponse(response);
        AuthorizeResponse authorizeResponse = (AuthorizeResponse) context.getResponseFromTransactionMap(Transaction.AUTHORIZE.name());
    }

    @When("i am generating the token with the new header")
    public void IamAnAuthorizedUserV2() throws ConfigPropertyException, FrameworkException {
        String userName = null;
        Response response = authorize.authorizeV2(requestParams);
        setAuthorizeResponseV2(response);
        AuthorizeResponseV2 authorizeResponse = (AuthorizeResponseV2) context.getResponseFromTransactionMap(Transaction.AUTHORIZE.name());
    }

//    @Given("i set the expiry duration value as {int} and expiry duration type as {int} in database")
//    public void iSetTheExpiryDurationValueAsAndExpiryDurationTypeAsInDatabase(int arg0, int arg1) {
//    }
}
