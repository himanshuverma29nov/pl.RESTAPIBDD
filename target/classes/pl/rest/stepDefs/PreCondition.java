package pl.rest.stepDefs;

import com.qc.cuke.ScenarioContext;
import com.qc.qa.ConfigPropertyException;
import com.qc.qa.FrameworkException;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import pl.rest.utils.DBUtils;
import pl.rest.utils.TestSetDataReader;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

import static com.qc.qa.utils.TestDataReader.getAPITestData;
import static pl.rest.utils.TestSetDataReader.getAPITestSetData;

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
        String CustomerMobile = getAPITestSetData("CustomerMobileNumber");
        logger.info("Fetched mobile number Dataset " + CustomerMobile);
        context.setDataStore("MobileNumber", CustomerMobile);
    }

    @And("de link from all the previously issued card")
    public void deLinkFromAllThePreviouslyIssuedCard() throws FrameworkException, ConfigPropertyException, SQLException {
        DBUtils.DelinkMobileNumber(context.getDataStore().get("MobileNumber"));
    }

    @And("i am fetching a physical {string} dummy card from database")
    public void iFetchingAnPhysicalDummyCardFromDatabase(String arg0) throws FrameworkException, ConfigPropertyException, SQLException {
        Map<String, String> map = new HashMap();

        if (arg0.equalsIgnoreCase("non reloadable")) {
            map = DBUtils.getTableAsMap("Select * from card where isDummyCard=1 and " +
                    "corporateid=" +
                    getAPITestData("corporateid") + " and AccountType=12 ;");
            context.setDataStore("referenceNumber", map.get("ReferenceNumber"));
            logger.info("Dummy Card Reference Number Fetched " + map.get("ReferenceNumber"));
        } else if (arg0.equalsIgnoreCase("reloadable")) {
            map = DBUtils.getTableAsMap("Select * from card where isDummyCard=1 and " +
                    "corporateid=" +
                    getAPITestData("corporateid") + " and AccountType=18;");
            context.setDataStore("referenceNumber", map.get("ReferenceNumber"));
            logger.info("Dummy Card Reference Number Fetched " + map.get("ReferenceNumber"));
        } else {
            logger.error("Card Type Incorrectly Specified");
        }
    }
}
