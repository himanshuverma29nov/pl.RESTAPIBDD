package pl.rest.utils;

import com.qc.cuke.ScenarioContext;
import com.qc.qa.ConfigPropertyException;
import com.qc.qa.FrameworkException;
import com.qc.qa.utils.LoadProperties;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

public class TestSetDataReader {

    private static ScenarioContext context;
    private static Map<String, String> appTestData = null;
    private static Map<String, String> apiTestData = null;
    private static Map<String, String> jsonKeyFile = null;
    private static final Logger logger = LoggerFactory.getLogger(TestSetDataReader.class);

    public TestSetDataReader(ScenarioContext context) {
        this.context = context;
    }


    public static String getAPITestSetData(String key) throws ConfigPropertyException, FrameworkException {
        new HashMap();
        new Properties();
        if (apiTestData == null) {
//            String testData = context.getDataStore().get("testSet");
            String testData = DBUtils.TESTDATASET;
            System.out.println("testDataSet: " + testData);
            String filePropertyValue = LoadProperties.getPropertyValue("TestEnv");
            String fileName = "testData/api/" + testData + "_" + filePropertyValue + "APITestData.properties";
            logger.info("Reading API Test Data config values from  " + fileName);
            apiTestData = LoadProperties.loadValuesToMap(fileName);
            return getAPIKey(key);
        } else {
            return getAPIKey(key);
        }
    }

    public static String getAPIKey(String key) {
        String value = null;
        if (apiTestData.containsKey(key)) {
            value = (String) apiTestData.get(key);
        } else {
            logger.error("Unable to find ::" + key + " in API test data properties file , Please add correct property values and check");
        }
        return value;
    }

    public static String getJSONKey(String key) {
        String value = null;
        if (jsonKeyFile.containsKey(key)) {
            value = (String) jsonKeyFile.get(key);
        } else {
            logger.error("Unable to find ::" + key + " in newJSONKey.properties file , Please add correct property values and check");
        }
        return value;
    }

}