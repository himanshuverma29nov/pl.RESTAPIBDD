package pl.rest.testRunners;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;
import org.testng.annotations.DataProvider;

@CucumberOptions(
        features = "classpath:features", glue = "classpath:pl.rest", tags = "@Regression and @Web and @Web_UI_01",
        plugin = {"pretty", "html:target/cucumber", "json:target/cucumber.json"}
)
public class TestRunner extends AbstractTestNGCucumberTests {
//    @Override
//    @DataProvider(parallel = true)
//    public Object[][] scenarios() {
//        return super.scenarios();
}

