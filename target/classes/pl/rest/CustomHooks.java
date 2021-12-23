package pl.rest;
import com.qc.cuke.ScenarioContext;
import cucumber.api.Scenario;
import gherkin.ast.ScenarioOutline;
import io.cucumber.java.Before;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import pl.rest.utils.TestSetDataReader;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import static pl.rest.utils.DBUtils.*;

public class CustomHooks {
    private static final Logger logger = LoggerFactory.getLogger(CustomHooks.class);
    private ScenarioContext context;
    private Scenario scenario;
    private ScenarioOutline scenarioOutline;
    public static String SCENARIO_NAME = null;
    public TestSetDataReader testSetDataReader;

    public CustomHooks(ScenarioContext context) {
        this.context = context;
        testSetDataReader = new TestSetDataReader(context);
    }

    @Before
    public void printScenarioName(Scenario scenario) {
        logger.info("SCENARIO NAME: " + scenario.getName());
        logger.info("TAG NAMEs: " + scenario.getSourceTagNames());
        try {
            String testCaseId = scenario.getSourceTagNames().stream().filter(str -> str.contains("@TestID")).collect(Collectors.toList()).get(0);
            testCaseId = testCaseId.replace("@","");
            TESTCASEID = testCaseId;
            TESTCASESCENARIONAME = scenario.getName();

        } catch (Exception e) {
            logger.info(e.getMessage());
        }
    }

    @Before(order = 0)
    public void getTagNamesForTestDataSet(io.cucumber.core.api.Scenario scenario) {
        logger.info("SCENARIO NAME: " + scenario.getName());
        logger.info("TAG NAMEs: " + scenario.getSourceTagNames());
        String tagName = "TestSet0";
        List<String> scenarioTagNames = (ArrayList) scenario.getSourceTagNames();

        for (int i = 0; i < scenarioTagNames.size(); i++) {
            if (scenarioTagNames.get(i).equals("@TestSet0") || scenarioTagNames.get(i).equals("@TestSet1") || scenarioTagNames.get(i).equals("@TestSet2")
                    || scenarioTagNames.get(i).equals("@TestSet3") || scenarioTagNames.get(i).equals("@TestSet4")) {
                tagName = scenarioTagNames.get(i).replace("@", "");
               // TESTDATASET = tagName;
                context.setDataStore("testSet", tagName);
                break;
            } else {
                context.setDataStore("testSet", tagName);
                //TESTDATASET = tagName;
            }
        }
        //System.out.println("context.getDataStore(): "+context.getDataStore().get("testSet"));
        //System.out.println("TESTDATASET: "+TESTDATASET);

    }
}