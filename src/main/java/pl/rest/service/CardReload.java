package pl.rest.service;

import com.qc.BaseAPI;
import com.qc.cuke.ScenarioContext;
import com.qc.qa.ConfigPropertyException;
import com.qc.qa.FrameworkException;
import com.qc.qa.utils.TestDataReader;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import pl.rest.domain.response.AuthorizeResponse;
import pl.rest.utils.TestSetDataReader;
import pl.rest.utils.Transaction;

import java.util.HashMap;
import java.util.Map;

import static com.qc.qa.utils.TestDataReader.getAPIResourceURI;
import static com.qc.qa.utils.TestDataReader.readJsonTestDataAsMap;

public class CardReload extends BaseAPI {

    private static final Logger logger = LoggerFactory.getLogger(CardReload.class);

    private Map<String, String> headerMap = new HashMap<>();
    private ScenarioContext context;
    public TestSetDataReader testSetDataReader;
    public Header header;

    public CardReload(ScenarioContext context) {
        super(context);
        this.context = context;
        testSetDataReader = new TestSetDataReader(context);
        header = new Header(context);
    }

    public Map<String, String> getCardIssueHeaderAsMap() throws ConfigPropertyException, FrameworkException {
        Map<String, String> headerMap = readJsonTestDataAsMap("authorizeHeaders");
        AuthorizeResponse authorizeResponse = (AuthorizeResponse) context.getResponseFromTransactionMap(Transaction.AUTHORIZE.name());
        String authToken = authorizeResponse.getAccessToken();
        headerMap.put("token", authToken);
        JsonPath jsonPathEvaluator = context.previousResponse.jsonPath();
        String userName = TestDataReader.getAPITestData("username");
        headerMap.put("userName", userName);
        return headerMap;
    }

    public Response reload(Object create) throws ConfigPropertyException, FrameworkException {
        Map<String, String> headerMap = null;
        String url = null;
        headerMap = header.getOldHeaderAsMap();
        url = getAPIResourceURI("cardReload");
        logger.info("Card Reload Rest API URL :- " + url);
        Response response = postAPI(headerMap, create, url);
        logger.info("Time Taken to perform " + url + " transaction: " + response.getTime());
        return response;
    }


}
