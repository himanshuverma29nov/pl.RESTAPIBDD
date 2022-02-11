package gui.pages;

import com.qc.qa.ConfigPropertyException;
import com.qc.qa.FrameworkException;
import com.qc.qa.ui.BasePage;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class UIActionPages extends BasePage {
    public WebDriver driver;
    public static final Logger logger = LoggerFactory.getLogger(UIActionPages.class);

    public UIActionPages(WebDriver driver) throws ConfigPropertyException, FrameworkException {
        super(driver);
        this.driver = driver;
    }

    public void navigateToAppUrl(String url) throws FrameworkException {
        navigateTo(url);
        waitForPageLoad();
        logger.info(driver.getTitle());
    }

    public void enterUserName(String username, WebElement element) throws FrameworkException {
        enterText(element,username);
    }

    public void enterPassword(String password, WebElement element) throws FrameworkException {
        enterText(element,password);
    }

    @FindBy(name="userName")
    private WebElement userNameField;

    @FindBy(name="password")
    private WebElement passwordFiled;

    @FindBy(xpath = "//div[@value='Login']")
    private WebElement LoginButton;

    @FindBy(xpath = "//a[@href='/admin/clearCacheData']")
    private WebElement cacheButton;

    @FindBy(xpath = "//select[@id='cacheMasterId']")
    private WebElement dropdown;

    @FindBy(id="pageSubmission")
    private WebElement pageSubmit;

    @FindBy(xpath = "//img[@src='https://imgtest.pineperks.in/resources/images/admin/ajax_loader.gif']")
    private WebElement loader;
    
    public void clearCache() throws FrameworkException {
        driver.navigate().to("https://admintest.pineperks.in/");
        //navigateTo("https://admintest.pineperks.in/");
       // WebElement usernameField = driver.findElement(By.name("userName"));
      //  WebElement passwordFiled = driver.findElement(By.name("password"));
        enterUserName("afzal.ahmed@pinelabs.com", userNameField);
        enterPassword("Dashboard@DG1809", passwordFiled);
        click(LoginButton);
        waitForPageLoad();
        click(cacheButton);
        waitForPageLoad();
        selectValueFromDropdown(dropdown, "Issuer System Variable");
        click(pageSubmit);
        waitForElementToDisappear(loader);
    }
}

