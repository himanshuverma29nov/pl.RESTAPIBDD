package pl.rest.testRunners;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;

@CucumberOptions(
        features = "classpath:features", glue = "classpath:pl.rest", tags = "@Regression",
        plugin = {"pretty", "html:target/cucumber", "json:target/cucumber.json"})

public class TestRunner extends AbstractTestNGCucumberTests {
}
