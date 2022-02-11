package pl.rest.stepDefs;

import com.qc.cuke.ScenarioContext;
import com.qc.qa.ConfigPropertyException;
import com.qc.qa.FrameworkException;
import gui.pages.UIActionPages;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import org.openqa.selenium.WebDriver;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import pl.rest.utils.DBUtils;
import pl.rest.utils.TestSetDataReader;

import java.sql.SQLException;

public class UIActionStepDefs {

    private ScenarioContext context;
    private static final Logger logger = LoggerFactory.getLogger(TransactionsStepDefs.class);
    public TestSetDataReader testSetDataReader;
    private WebDriver driver;
    public UIActionPages uiActionPages;


    public UIActionStepDefs(ScenarioContext context) throws ConfigPropertyException, FrameworkException {
        this.context = context;
        this.driver = context.webDriver;
        testSetDataReader = new TestSetDataReader(context);
        uiActionPages = new UIActionPages(driver);
    }


    @Given("i set the expiry duration value as {int} and expiry duration type as {int} in database")
    public void iSetTheExpiryDurationValueAsAndExpiryDurationTypeAsInDatabase(int arg0, int arg1) throws SQLException {
        DBUtils.updateTokenExpiryDate(arg1, arg0);
    }

    @And("i am clearing the IssuerSystemVariable cache from UI")
    public void iAmClearingTheIssuerSystemVariableCacheFromUI() throws FrameworkException {
        uiActionPages.clearCache();
    }

    @Given("i test UI")
    public void iTestUI() throws InterruptedException {
//        uiActionPages.navigateTo("https://shop.canadadrives.ca/cars/on");
//        driver.findElement(By.xpath("//span[text()='Make & Model']/ancestor::button")).click();
//        Thread.sleep(3000);
//        EventFiringWebDriver even = new EventFiringWebDriver(driver);
//        even.executeScript("document.querySelector(\".container.vehicle-filters.lighten-3.pt-12.px-0\").scrollTop=1500");
////        JavascriptExecutor jsExec = (JavascriptExecutor) driver;
////        jsExec.executeScript("document.getElementsByClassName('container vehicle-filters lighten-3 pt-12 px-0').scrollTop = 1500");
//        Thread.sleep(90000);
    }
}
