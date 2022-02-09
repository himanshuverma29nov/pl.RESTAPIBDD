package gui.pages;

import com.qc.qa.FrameworkException;
import com.qc.qa.ui.BasePage;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class UIActionPages extends BasePage {
    public WebDriver driver;
    public static final Logger logger = LoggerFactory.getLogger(UIActionPages.class);

    public UIActionPages(WebDriver driver) {
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
}

