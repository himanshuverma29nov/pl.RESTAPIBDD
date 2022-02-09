$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:features/cardissue/AccessToken.feature");
formatter.feature({
  "name": "Access token generation API",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Web"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.scenario({
  "name": "Validating the expiry date field when updating the expiry duration as 7 days.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Web"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@Web_UI_01"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "i set the expiry duration value as 7 and expiry duration type as 1 in database",
  "keyword": "Given "
});
formatter.match({
  "location": "UIActionStepDefs.iSetTheExpiryDurationValueAsAndExpiryDurationTypeAsInDatabase(int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i am clearing the IssuerSystemVariable cache from UI",
  "keyword": "And "
});
formatter.match({
  "location": "UIActionStepDefs.iAmClearingTheIssuerSystemVariableCacheFromUI()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat com.qc.qa.utils.LoadProperties.getElementWaitDuration(LoadProperties.java:327)\r\n\tat com.qc.qa.ui.BasePage.waitForPageLoad(BasePage.java:107)\r\n\tat gui.pages.UIActionPages.navigateToAppUrl(UIActionPages.java:20)\r\n\tat pl.rest.stepDefs.UIActionStepDefs.iAmClearingTheIssuerSystemVariableCacheFromUI(UIActionStepDefs.java:42)\r\n\tat ✽.i am clearing the IssuerSystemVariable cache from UI(classpath:features/cardissue/AccessToken.feature:7)\r\n",
  "status": "failed"
});
});