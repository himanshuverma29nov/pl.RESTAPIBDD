package pl.rest.testRunners;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;
import org.testng.annotations.DataProvider;

@CucumberOptions(
        features = "classpath:features", glue = "classpath:pl.rest", tags = "(@Regression or @TestSet0) and (not @DB)",
        plugin = {"pretty", "html:target/cucumber", "json:target/cucumber.json",
                "summary"},
        monochrome = true
)
public class NonDBTestRunner extends AbstractTestNGCucumberTests {
//    @Override
//    @DataProvider(parallel = true)
//    public Object[][] scenarios() {
//        return super.scenarios();
}
