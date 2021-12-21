package pl.rest.service;

import com.qc.BaseAPI;
import com.qc.cuke.ScenarioContext;
import com.qc.qa.ConfigPropertyException;
import com.qc.qa.FrameworkException;
import io.restassured.response.Response;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import pl.rest.utils.TestSetDataReader;

import java.util.HashMap;
import java.util.Map;

import static com.qc.qa.utils.TestDataReader.getAPIResourceURI;

public class CorporateAndCardDetails extends BaseAPI {

    private static final Logger logger = LoggerFactory.getLogger(CorporateAndCardDetails.class);

    private Map<String, String> headerMap = new HashMap<>();
    private ScenarioContext context;
    public TestSetDataReader testSetDataReader;
    public Header header;

    public CorporateAndCardDetails(ScenarioContext context) {
        super(context);
        this.context = context;
        testSetDataReader = new TestSetDataReader(context);
        header = new Header(context);
    }

    public Response cardCategory(String headerType) throws ConfigPropertyException, FrameworkException {
        Map<String, String> headerMap = null;
        String url = null;
        if (headerType.equalsIgnoreCase("old")) {
            headerMap = header.getOldHeaderAsMap();
            url = getAPIResourceURI("cardCategoryV1");
        } else if (headerType.equalsIgnoreCase("new")) {
            headerMap = header.getNewHeaderAsMap();
            url = getAPIResourceURI("cardCategoryV2");
        }
        logger.info("CardIssue Rest API URL :- " + url);
        Response response = getAPI(headerMap,url);
        logger.info("Time Taken to perform " + url + " transaction: " + response.getTime());
        return response;
    }
}
