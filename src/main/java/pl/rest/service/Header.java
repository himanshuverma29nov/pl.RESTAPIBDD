package pl.rest.service;

import com.qc.cuke.ScenarioContext;
import com.qc.qa.ConfigPropertyException;
import com.qc.qa.FrameworkException;
import com.qc.qa.utils.TestDataReader;
import io.restassured.path.json.JsonPath;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import pl.rest.domain.response.AuthorizeResponse;
import pl.rest.utils.TestSetDataReader;
import pl.rest.utils.Transaction;

import java.util.Map;

import static com.qc.qa.utils.TestDataReader.readJsonTestDataAsMap;

public class Header {

    private static final Logger logger = LoggerFactory.getLogger(CardIssue.class);

    private ScenarioContext context;
    public TestSetDataReader testSetDataReader;

    public Header(ScenarioContext context) {
        this.context = context;
        testSetDataReader = new TestSetDataReader(context);
    }

    public Map<String, String> getOldHeaderAsMap() throws ConfigPropertyException, FrameworkException {
        Map<String, String> headerMap = readJsonTestDataAsMap("authorizeHeaders");
        AuthorizeResponse authorizeResponse = (AuthorizeResponse) context.getResponseFromTransactionMap(Transaction.AUTHORIZE.name());
        String authToken = authorizeResponse.getAccessToken();
        headerMap.put("token", authToken);
        JsonPath jsonPathEvaluator = context.previousResponse.jsonPath();
        String userName = TestDataReader.getAPITestData("username");
        headerMap.put("userName", userName);
        return headerMap;
    }

    public Map<String, String> getNewHeaderAsMap() throws ConfigPropertyException, FrameworkException {
        Map<String, String> headerMap = readJsonTestDataAsMap("authorizeHeaders");
        AuthorizeResponse authorizeResponse = (AuthorizeResponse) context.getResponseFromTransactionMap(Transaction.AUTHORIZE.name());
        String authToken = authorizeResponse.getAccessToken();
        headerMap.put("X-PinePerks-Token", authToken);
        JsonPath jsonPathEvaluator = context.previousResponse.jsonPath();
        String userName = TestDataReader.getAPITestData("username");
        headerMap.put("X-PinePerks-UserName", userName);
        return headerMap;
    }

}
