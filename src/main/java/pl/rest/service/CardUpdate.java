package pl.rest.service;

import com.qc.BaseAPI;
import com.qc.cuke.ScenarioContext;
import com.qc.qa.ConfigPropertyException;
import com.qc.qa.FrameworkException;
import io.restassured.response.Response;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import pl.rest.utils.TestSetDataReader;

import java.util.Map;

import static com.qc.qa.utils.TestDataReader.getAPIResourceURI;

public class CardUpdate extends BaseAPI {

    private ScenarioContext context;
    private static final Logger logger = LoggerFactory.getLogger(CardUpdate.class);
    TestSetDataReader testSetDataReader;
    private Header header;

    public CardUpdate(ScenarioContext context) {
        super(context);
        this.context = context;
        testSetDataReader = new TestSetDataReader(context);
        header = new Header(context);
    }

    public Response adminCardUpdate(Object create) throws ConfigPropertyException, FrameworkException {
        Map<String, String> headerMap = null;
        String url = null;
        url = getAPIResourceURI("cardUpdate");
        headerMap = header.getOldHeaderAsMap();
        logger.info("CardIssue Rest API URL :- " + url);
        Response response = postAPI(headerMap, create, url);
        logger.info("Time Taken to perform " + url + " transaction: " + response.getTime());
        return response;
    }
}
