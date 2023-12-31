package pl.rest.testRunners;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;
import org.testng.annotations.DataProvider;

@CucumberOptions(
        features = "classpath:features", glue ={"classpath:pl.rest","classpath:com.qc"}, tags = "(@Web and @Regression) and ( not @Manual)",
        plugin = {"pretty", "html:target/cucumber", "json:target/cucumber.json"}
)
public class TestRunner extends AbstractTestNGCucumberTests {
//    @Override
//    @DataProvider(parallel = true)
//    public Object[][] scenarios() {
//        return super.scenarios();
}

