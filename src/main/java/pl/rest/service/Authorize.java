package pl.rest.service;

import com.qc.BaseAPI;
import com.qc.cuke.ScenarioContext;
import com.qc.qa.ConfigPropertyException;
import com.qc.qa.FrameworkException;
import com.qc.qa.utils.TestDataReader;
import io.restassured.response.Response;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.HashMap;
import java.util.Map;

import static com.qc.qa.utils.TestDataReader.getAPIResourceURI;
import static com.qc.qa.utils.TestDataReader.readJsonTestDataAsMap;


public class Authorize extends BaseAPI {
    private static final Logger logger = LoggerFactory.getLogger(Authorize.class);
    private Map<String, String> headerMap = new HashMap<>();
    public Authorize authorize;
    public ScenarioContext context;

    public Authorize(ScenarioContext context) {
        super(context);
        this.context = context;
    }

    public Map<String, String> getHeaderMap() {
        return headerMap;
    }

    public void setHeaderMap(Map<String, String> headerMap) {
        this.headerMap.putAll(headerMap);
    }


    //Get Authorize Headers as map

    public Map<String, String> getAuthorizeHeaderAsMap() throws ConfigPropertyException, FrameworkException {
        Map<String, String> headerMap = readJsonTestDataAsMap("authorizeHeaders");
        return headerMap;
    }

    //Make authorize API call

    public Response authorize(Map<String, String> requestParametersMap) throws ConfigPropertyException, FrameworkException {
        Map<String, String> headerMap = new HashMap<>();
        headerMap.put("userName", TestDataReader.getAPITestData("username"));
        String url = getAPIResourceURI("authorize");
        logger.info("Authorize Rest API URL :- " + url);
        Response response = getAPI(headerMap, url);
        logger.info("Time Taken to perform " + url + " transaction: " + response.getTime());
        return response;
    }

    public Response authorizeV2(Map<String, String> requestParametersMap) throws ConfigPropertyException, FrameworkException {
        Map<String, String> headerMap = new HashMap<>();
        headerMap.put("X-PinePerks-UserName", TestDataReader.getAPITestData("username"));
        String url = getAPIResourceURI("authorizeV2");
        logger.info("Authorize Rest API URL :- " + url);
        Response response = getAPI(headerMap, url);
        logger.info("Time Taken to perform " + url + " transaction: " + response.getTime());
        return response;
    }

}
