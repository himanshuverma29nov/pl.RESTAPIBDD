package pl.rest.stepDefs;

import com.qc.cuke.ScenarioContext;
import com.qc.qa.ConfigPropertyException;
import com.qc.qa.FrameworkException;
import com.qc.qa.utils.TestDataReader;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import pl.rest.utils.DBUtils;
import pl.rest.utils.TestSetDataReader;

import java.sql.SQLException;

public class PreCondition {

    private ScenarioContext context;
    private static final Logger logger = LoggerFactory.getLogger(CardIssueStepDefs.class);
    TestSetDataReader testSetDataReader;

    public PreCondition(ScenarioContext context) {
        this.context = context;
        testSetDataReader = new TestSetDataReader(context);
    }

    @Given("i fetch the mobile number from properties")
    public void iFetchTheMobileNumberFromProperties() throws ConfigPropertyException, FrameworkException {
        String CustomerMobile = TestDataReader.getAPITestData("CustomerMobileNumber");
        logger.info("Fetched mobile number Dataset " + CustomerMobile);
        context.setDataStore("MobileNumber", CustomerMobile);
    }

    @And("de link from all the previously issued card")
    public void deLinkFromAllThePreviouslyIssuedCard() throws FrameworkException, ConfigPropertyException, SQLException {
        DBUtils.DelinkMobileNumber(context.getDataStore().get("MobileNumber"));
    }
}
