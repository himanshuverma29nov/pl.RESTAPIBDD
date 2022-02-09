package pl.rest.stepDefs;

import com.qc.cuke.ScenarioContext;
import com.qc.qa.FrameworkException;
import com.qc.qa.drivers.ChromeDriverManger;
import com.qc.qa.ui.BasePage;
import gui.pages.UIActionPages;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.events.EventFiringWebDriver;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import pl.rest.utils.DBUtils;
import pl.rest.utils.TestSetDataReader;

import java.sql.SQLException;

public class UIActionStepDefs {

    private ScenarioContext context;
    private static final Logger logger = LoggerFactory.getLogger(TransactionsStepDefs.class);
    public TestSetDataReader testSetDataReader;
    public BasePage basePage;
    public ChromeDriverManger chromeDriverManger;
    private WebDriver driver;
    private UIActionPages uiActionPages;

    public UIActionStepDefs(ScenarioContext context) {
        this.context = context;
        this.driver = context.webDriver;
        testSetDataReader = new TestSetDataReader(context);
        uiActionPages = new UIActionPages(driver);
    }


    @Given("i set the expiry duration value as {int} and expiry duration type as {int} in database")
    public void iSetTheExpiryDurationValueAsAndExpiryDurationTypeAsInDatabase(int arg0, int arg1) throws SQLException {
        DBUtils.updateTokenExpiryDate(arg1,arg0);
    }

    @And("i am clearing the IssuerSystemVariable cache from UI")
    public void iAmClearingTheIssuerSystemVariableCacheFromUI() throws FrameworkException, InterruptedException {
        uiActionPages.navigateToAppUrl("https://admintest.pineperks.in/");
        WebElement usernameField = driver.findElement(By.name("userName"));
        WebElement passwordFiled = driver.findElement(By.name("password"));
        uiActionPages.enterUserName("afzal.ahmed@pinelabs.com", usernameField);
        uiActionPages.enterPassword("Dashboard@DG1809", passwordFiled);
        uiActionPages.click(driver.findElement(By.xpath("//div[@value='Login']")));
        uiActionPages.waitForPageLoad();
        uiActionPages.click(By.xpath("//a[@href='/admin/clearCacheData']"));
        uiActionPages.waitForPageLoad();
        uiActionPages.selectValueFromDropdown(driver.findElement(By.xpath("//select[@id='cacheMasterId']")),"Issuer System Variable");
        uiActionPages.click(By.id("pageSubmission"));
        uiActionPages.waitForElementToDisappear(driver.findElement(By.xpath("//img[@src='https://imgtest.pineperks.in/resources/images/admin/ajax_loader.gif']")));
    }

    @Given("i test UI")
    public void iTestUI() throws InterruptedException {
        uiActionPages.navigateTo("https://shop.canadadrives.ca/cars/on");
        driver.findElement(By.xpath("//span[text()='Make & Model']/ancestor::button")).click();
        Thread.sleep(3000);
        EventFiringWebDriver even=new EventFiringWebDriver(driver);
        even.executeScript("document.querySelector(\".container.vehicle-filters.lighten-3.pt-12.px-0\").scrollTop=1500");
//        JavascriptExecutor jsExec = (JavascriptExecutor) driver;
//        jsExec.executeScript("document.getElementsByClassName('container vehicle-filters lighten-3 pt-12 px-0').scrollTop = 1500");
        Thread.sleep(90000);
    }

}
