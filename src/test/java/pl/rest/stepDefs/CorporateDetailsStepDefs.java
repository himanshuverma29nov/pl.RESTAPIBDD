package pl.rest.stepDefs;

import com.qc.cuke.ScenarioContext;
import com.qc.qa.ConfigPropertyException;
import com.qc.qa.FrameworkException;
import io.cucumber.java.en.When;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import pl.rest.service.CardUpdate;
import pl.rest.service.CorporateAndCardDetails;
import pl.rest.utils.TestSetDataReader;

public class CorporateDetailsStepDefs {

    private ScenarioContext context;
    private static final Logger logger = LoggerFactory.getLogger(CardIssueStepDefs.class);
    TestSetDataReader testSetDataReader;
    CorporateAndCardDetails corporateAndCardDetails;

    public CorporateDetailsStepDefs(ScenarioContext context) {
        this.context = context;
        testSetDataReader = new TestSetDataReader(context);
        corporateAndCardDetails=new CorporateAndCardDetails(context);
    }

    @When("i get the card category details with {string} header using (V1/V2) API")
    public void iGetTheCardCategoryDetailsWithHeaderUsingV1API(String arg0) throws ConfigPropertyException, FrameworkException {
        corporateAndCardDetails.cardCategory(arg0);
    }
}
