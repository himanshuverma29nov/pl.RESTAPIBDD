$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:features/cardissue/AdminCardUpdate.feature");
formatter.feature({
  "name": "Updating the Card status by admin",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.scenario({
  "name": "Updating the card status to inactive",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
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
  "name": "i am an authorized corporate user",
  "keyword": "Given "
});
formatter.match({
  "location": "AuthorizeStepDefs.IamAnAuthorizedUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i am changing the status with the following details:",
  "rows": [
    {
      "cells": [
        "referenceNumber",
        "8978696263"
      ]
    },
    {
      "cells": [
        "cardStatus",
        "2"
      ]
    },
    {
      "cells": [
        "reason",
        "1"
      ]
    },
    {
      "cells": [
        "remarks",
        "Test"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CardUpdateStepDefs.iAmChangingTheStatusWithTheFollowingDetails(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "TransactionsStepDefs.theStatusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the header level",
  "rows": [
    {
      "cells": [
        "remarks",
        "Test"
      ]
    },
    {
      "cells": [
        "responseCode",
        "0"
      ]
    },
    {
      "cells": [
        "responseMessage",
        "Success"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.iShouldSeeTheFollowingInTheHeaderLevel(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the \"cardStatusUpdateResponseList\"",
  "rows": [
    {
      "cells": [
        "referenceNumber",
        "responseCode",
        "responseMessage"
      ]
    },
    {
      "cells": [
        "8978696263",
        "0",
        "Success"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.i_should_see_the_following_in_the_card_list(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Updating the card status to blocked",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
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
  "name": "i am an authorized corporate user",
  "keyword": "Given "
});
formatter.match({
  "location": "AuthorizeStepDefs.IamAnAuthorizedUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i am changing the status with the following details:",
  "rows": [
    {
      "cells": [
        "referenceNumber",
        "8978696263"
      ]
    },
    {
      "cells": [
        "cardStatus",
        "3"
      ]
    },
    {
      "cells": [
        "reason",
        "1"
      ]
    },
    {
      "cells": [
        "remarks",
        "Test"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CardUpdateStepDefs.iAmChangingTheStatusWithTheFollowingDetails(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "TransactionsStepDefs.theStatusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the header level",
  "rows": [
    {
      "cells": [
        "remarks",
        "Test"
      ]
    },
    {
      "cells": [
        "responseCode",
        "13"
      ]
    },
    {
      "cells": [
        "responseMessage",
        "Invalid card data"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.iShouldSeeTheFollowingInTheHeaderLevel(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the \"cardStatusUpdateResponseList\"",
  "rows": [
    {
      "cells": [
        "referenceNumber",
        "responseCode",
        "responseMessage"
      ]
    },
    {
      "cells": [
        "8978696263",
        "13",
        "- cardStatus : Selected value Blocked is not allowed."
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.i_should_see_the_following_in_the_card_list(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Updating the card status from active to active",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
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
  "name": "i am an authorized corporate user",
  "keyword": "Given "
});
formatter.match({
  "location": "AuthorizeStepDefs.IamAnAuthorizedUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i am changing the status with the following details:",
  "rows": [
    {
      "cells": [
        "referenceNumber",
        "8978696263"
      ]
    },
    {
      "cells": [
        "cardStatus",
        "1"
      ]
    },
    {
      "cells": [
        "reason",
        "1"
      ]
    },
    {
      "cells": [
        "remarks",
        "Test"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CardUpdateStepDefs.iAmChangingTheStatusWithTheFollowingDetails(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i am again changing the status with the following details:",
  "rows": [
    {
      "cells": [
        "referenceNumber",
        "8978696263"
      ]
    },
    {
      "cells": [
        "cardStatus",
        "1"
      ]
    },
    {
      "cells": [
        "reason",
        "1"
      ]
    },
    {
      "cells": [
        "remarks",
        "Test"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CardUpdateStepDefs.iAmChangingTheStatusWithTheFollowingDetails(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "TransactionsStepDefs.theStatusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the header level",
  "rows": [
    {
      "cells": [
        "remarks",
        "Test"
      ]
    },
    {
      "cells": [
        "responseCode",
        "0"
      ]
    },
    {
      "cells": [
        "responseMessage",
        "Success"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.iShouldSeeTheFollowingInTheHeaderLevel(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the \"cardStatusUpdateResponseList\"",
  "rows": [
    {
      "cells": [
        "referenceNumber",
        "responseCode",
        "responseMessage"
      ]
    },
    {
      "cells": [
        "8978696263",
        "267",
        "Card is already in this state. Please choose different status to update"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.i_should_see_the_following_in_the_card_list(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("classpath:features/cardissue/CardCategory.feature");
formatter.feature({
  "name": "Details of Card Categories against an issuer",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.scenario({
  "name": "Validate the Card Categories API Response for V1",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
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
  "name": "i am an authorized corporate user",
  "keyword": "Given "
});
formatter.match({
  "location": "AuthorizeStepDefs.IamAnAuthorizedUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i get the card category details with \"old\" header using V1 API",
  "keyword": "When "
});
formatter.match({
  "location": "CorporateDetailsStepDefs.iGetTheCardCategoryDetailsWithHeaderUsingV1API(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "TransactionsStepDefs.theStatusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the header level",
  "rows": [
    {
      "cells": [
        "responseCode",
        "0"
      ]
    },
    {
      "cells": [
        "responseMessage",
        "Success"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.iShouldSeeTheFollowingInTheHeaderLevel(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the \"cardCategoryList\"",
  "rows": [
    {
      "cells": [
        "id",
        "name"
      ]
    },
    {
      "cells": [
        "1",
        "Prime Card"
      ]
    },
    {
      "cells": [
        "2",
        "Fuel Card"
      ]
    },
    {
      "cells": [
        "3",
        "F\u0026B Card"
      ]
    },
    {
      "cells": [
        "4",
        "Universal Card"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.i_should_see_the_following_in_the_card_list(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the Card Categories API Response for V2",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
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
  "name": "i am an authorized corporate user",
  "keyword": "Given "
});
formatter.match({
  "location": "AuthorizeStepDefs.IamAnAuthorizedUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i get the card category details with \"new\" header using V2 API",
  "keyword": "When "
});
formatter.match({
  "location": "CorporateDetailsStepDefs.iGetTheCardCategoryDetailsWithHeaderUsingV1API(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "TransactionsStepDefs.theStatusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the header level",
  "rows": [
    {
      "cells": [
        "responseCode",
        "0"
      ]
    },
    {
      "cells": [
        "responseMessage",
        "Success"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.iShouldSeeTheFollowingInTheHeaderLevel(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the \"cardCategoryList\"",
  "rows": [
    {
      "cells": [
        "cardCategoryId",
        "cardCategoryName"
      ]
    },
    {
      "cells": [
        "1",
        "Prime Card"
      ]
    },
    {
      "cells": [
        "2",
        "Fuel Card"
      ]
    },
    {
      "cells": [
        "3",
        "F\u0026B Card"
      ]
    },
    {
      "cells": [
        "4",
        "Universal Card"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.i_should_see_the_following_in_the_card_list(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("classpath:features/cardissue/CardDetail.feature");
formatter.feature({
  "name": "Card Details fetching API",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.scenario({
  "name": "Changing of scheme of issued card and validating the data in the API response",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
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
  "name": "i am an authorized corporate user",
  "keyword": "Given "
});
formatter.match({
  "location": "AuthorizeStepDefs.IamAnAuthorizedUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i am issuing an Instant Non Reloadable Digital Card using \"old\" header with V1 of API",
  "rows": [
    {
      "cells": [
        "cardSchemeId",
        "7"
      ]
    },
    {
      "cells": [
        "isLinkToBeSentOnMobile",
        "true"
      ]
    },
    {
      "cells": [
        "customerName",
        "afzal"
      ]
    },
    {
      "cells": [
        "mobileNumber",
        "8284854535"
      ]
    },
    {
      "cells": [
        "email",
        "afzal.ahmed@pinelabs.com"
      ]
    },
    {
      "cells": [
        "amount",
        "1000"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CardIssueStepDefs.i_am_issuing_an_Instant_Non_Reloadable_Digital_Card_using_header(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i am changing the status with the following details:",
  "rows": [
    {
      "cells": [
        "referenceNumber",
        "context"
      ]
    },
    {
      "cells": [
        "cardStatus",
        "2"
      ]
    },
    {
      "cells": [
        "reason",
        "1"
      ]
    },
    {
      "cells": [
        "remarks",
        "Test"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CardUpdateStepDefs.iAmChangingTheStatusWithTheFollowingDetails(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i get the card detail using \"old\" header with V1 API for the previously issued card",
  "rows": [
    {
      "cells": [
        "Reference Number",
        "context"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CorporateDetailsStepDefs.iGetTheCardDetailUsingHeaderWithVAPIForTheFollowingCard(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "TransactionsStepDefs.theStatusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the header level",
  "rows": [
    {
      "cells": [
        "responseCode",
        "0"
      ]
    },
    {
      "cells": [
        "responseMessage",
        "Success"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.iShouldSeeTheFollowingInTheHeaderLevel(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the \"cardDetailResponseList\"",
  "rows": [
    {
      "cells": [
        "cardStatus"
      ]
    },
    {
      "cells": [
        "2"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.i_should_see_the_following_in_the_card_list(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("classpath:features/cardissue/CustomerCardUpdate.feature");
formatter.feature({
  "name": "Updating the Card status by Customer",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.scenario({
  "name": "Updating the card status to inactive",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
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
  "name": "i am an authorized corporate user",
  "keyword": "Given "
});
formatter.match({
  "location": "AuthorizeStepDefs.IamAnAuthorizedUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i am changing the status with the following details:",
  "rows": [
    {
      "cells": [
        "referenceNumber",
        "8978696263"
      ]
    },
    {
      "cells": [
        "cardStatus",
        "2"
      ]
    },
    {
      "cells": [
        "reason",
        "1"
      ]
    },
    {
      "cells": [
        "remarks",
        "Test"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CardUpdateStepDefs.iAmChangingTheStatusWithTheFollowingDetails(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "TransactionsStepDefs.theStatusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the header level",
  "rows": [
    {
      "cells": [
        "remarks",
        "Test"
      ]
    },
    {
      "cells": [
        "responseCode",
        "0"
      ]
    },
    {
      "cells": [
        "responseMessage",
        "Success"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.iShouldSeeTheFollowingInTheHeaderLevel(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the \"cardStatusUpdateResponseList\"",
  "rows": [
    {
      "cells": [
        "referenceNumber",
        "responseCode",
        "responseMessage"
      ]
    },
    {
      "cells": [
        "8978696263",
        "0",
        "Success"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.i_should_see_the_following_in_the_card_list(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Updating the card status to blocked",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
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
  "name": "i am an authorized corporate user",
  "keyword": "Given "
});
formatter.match({
  "location": "AuthorizeStepDefs.IamAnAuthorizedUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i am changing the status with the following details:",
  "rows": [
    {
      "cells": [
        "referenceNumber",
        "8978696263"
      ]
    },
    {
      "cells": [
        "cardStatus",
        "3"
      ]
    },
    {
      "cells": [
        "reason",
        "1"
      ]
    },
    {
      "cells": [
        "remarks",
        "Test"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CardUpdateStepDefs.iAmChangingTheStatusWithTheFollowingDetails(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "TransactionsStepDefs.theStatusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the header level",
  "rows": [
    {
      "cells": [
        "remarks",
        "Test"
      ]
    },
    {
      "cells": [
        "responseCode",
        "13"
      ]
    },
    {
      "cells": [
        "responseMessage",
        "Invalid card data"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.iShouldSeeTheFollowingInTheHeaderLevel(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the \"cardStatusUpdateResponseList\"",
  "rows": [
    {
      "cells": [
        "referenceNumber",
        "responseCode",
        "responseMessage"
      ]
    },
    {
      "cells": [
        "8978696263",
        "13",
        "- cardStatus : Selected value Blocked is not allowed."
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.i_should_see_the_following_in_the_card_list(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Updating the card status from active to active",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
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
  "name": "i am an authorized corporate user",
  "keyword": "Given "
});
formatter.match({
  "location": "AuthorizeStepDefs.IamAnAuthorizedUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i am changing the status with the following details:",
  "rows": [
    {
      "cells": [
        "referenceNumber",
        "8978696263"
      ]
    },
    {
      "cells": [
        "cardStatus",
        "1"
      ]
    },
    {
      "cells": [
        "reason",
        "1"
      ]
    },
    {
      "cells": [
        "remarks",
        "Test"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CardUpdateStepDefs.iAmChangingTheStatusWithTheFollowingDetails(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i am again changing the status with the following details:",
  "rows": [
    {
      "cells": [
        "referenceNumber",
        "8978696263"
      ]
    },
    {
      "cells": [
        "cardStatus",
        "1"
      ]
    },
    {
      "cells": [
        "reason",
        "1"
      ]
    },
    {
      "cells": [
        "remarks",
        "Test"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CardUpdateStepDefs.iAmChangingTheStatusWithTheFollowingDetails(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "TransactionsStepDefs.theStatusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the header level",
  "rows": [
    {
      "cells": [
        "remarks",
        "Test"
      ]
    },
    {
      "cells": [
        "responseCode",
        "0"
      ]
    },
    {
      "cells": [
        "responseMessage",
        "Success"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.iShouldSeeTheFollowingInTheHeaderLevel(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the \"cardStatusUpdateResponseList\"",
  "rows": [
    {
      "cells": [
        "referenceNumber",
        "responseCode",
        "responseMessage"
      ]
    },
    {
      "cells": [
        "8978696263",
        "267",
        "Card is already in this state. Please choose different status to update"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.i_should_see_the_following_in_the_card_list(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("classpath:features/cardissue/InstantNonRelodableDigital.feature");
formatter.feature({
  "name": "Issuing instant Non Reloadable cards",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Validating the response code and messages.",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "i am an authorized corporate user",
  "keyword": "Given "
});
formatter.step({
  "name": "i am issuing an Instant Non Reloadable Digital Card using \"old\" header with V1 of API",
  "keyword": "When ",
  "rows": [
    {
      "cells": [
        "cardSchemeId",
        "7"
      ]
    },
    {
      "cells": [
        "isLinkToBeSentOnMobile",
        "true"
      ]
    },
    {
      "cells": [
        "customerName",
        "\u003ccustomerName\u003e"
      ]
    },
    {
      "cells": [
        "mobileNumber",
        "\u003cmobileNumber\u003e"
      ]
    },
    {
      "cells": [
        "email",
        "\u003cemail\u003e"
      ]
    },
    {
      "cells": [
        "amount",
        "\u003camount\u003e"
      ]
    }
  ]
});
formatter.step({
  "name": "the status code should be 200",
  "keyword": "Then "
});
formatter.step({
  "name": "i should see the following in the header level",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "successCount",
        "0"
      ]
    },
    {
      "cells": [
        "failedCount",
        "1"
      ]
    },
    {
      "cells": [
        "responseCode",
        "\u003cresponseCode\u003e"
      ]
    },
    {
      "cells": [
        "responseMessage",
        "\u003cresponseMessageatheaderlevel\u003e"
      ]
    }
  ]
});
formatter.step({
  "name": "i should see the following in the \"cardDetailResponseList\"",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "responseCode",
        "responseMessage"
      ]
    },
    {
      "cells": [
        "\u003cresponseCode\u003e",
        "\u003cresponseMessage\u003e"
      ]
    }
  ]
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "customerName",
        "mobileNumber",
        "email",
        "amount",
        "responseMessage",
        "responseCode",
        "responseMessageatheaderlevel"
      ]
    },
    {
      "cells": [
        "123Afzal",
        "8284854535",
        "afzal.ahmed@pinelabs.com",
        "1000",
        "- firstName : Customer Name is not valid. It should start with an alphabet and could contain maximum 50 characters in form of alphabets, numbers, white space, dot(.)",
        "13",
        "Invalid card data"
      ]
    },
    {
      "cells": [
        "afzal",
        "1111111111",
        "afzal.ahmed@pinelabs.com",
        "1000",
        "- mobileNumber : Mobile Number is not valid",
        "13",
        "Invalid card data"
      ]
    },
    {
      "cells": [
        "afzal",
        "8284854535",
        "afzal.ahmed@",
        "1000",
        "- email : Email Format is not valid",
        "13",
        "Invalid card data"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validating the response code and messages.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
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
  "name": "i am an authorized corporate user",
  "keyword": "Given "
});
formatter.match({
  "location": "AuthorizeStepDefs.IamAnAuthorizedUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i am issuing an Instant Non Reloadable Digital Card using \"old\" header with V1 of API",
  "rows": [
    {
      "cells": [
        "cardSchemeId",
        "7"
      ]
    },
    {
      "cells": [
        "isLinkToBeSentOnMobile",
        "true"
      ]
    },
    {
      "cells": [
        "customerName",
        "123Afzal"
      ]
    },
    {
      "cells": [
        "mobileNumber",
        "8284854535"
      ]
    },
    {
      "cells": [
        "email",
        "afzal.ahmed@pinelabs.com"
      ]
    },
    {
      "cells": [
        "amount",
        "1000"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CardIssueStepDefs.i_am_issuing_an_Instant_Non_Reloadable_Digital_Card_using_header(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "TransactionsStepDefs.theStatusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the header level",
  "rows": [
    {
      "cells": [
        "successCount",
        "0"
      ]
    },
    {
      "cells": [
        "failedCount",
        "1"
      ]
    },
    {
      "cells": [
        "responseCode",
        "13"
      ]
    },
    {
      "cells": [
        "responseMessage",
        "Invalid card data"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.iShouldSeeTheFollowingInTheHeaderLevel(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the \"cardDetailResponseList\"",
  "rows": [
    {
      "cells": [
        "responseCode",
        "responseMessage"
      ]
    },
    {
      "cells": [
        "13",
        "- firstName : Customer Name is not valid. It should start with an alphabet and could contain maximum 50 characters in form of alphabets, numbers, white space, dot(.)"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.i_should_see_the_following_in_the_card_list(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating the response code and messages.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
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
  "name": "i am an authorized corporate user",
  "keyword": "Given "
});
formatter.match({
  "location": "AuthorizeStepDefs.IamAnAuthorizedUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i am issuing an Instant Non Reloadable Digital Card using \"old\" header with V1 of API",
  "rows": [
    {
      "cells": [
        "cardSchemeId",
        "7"
      ]
    },
    {
      "cells": [
        "isLinkToBeSentOnMobile",
        "true"
      ]
    },
    {
      "cells": [
        "customerName",
        "afzal"
      ]
    },
    {
      "cells": [
        "mobileNumber",
        "1111111111"
      ]
    },
    {
      "cells": [
        "email",
        "afzal.ahmed@pinelabs.com"
      ]
    },
    {
      "cells": [
        "amount",
        "1000"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CardIssueStepDefs.i_am_issuing_an_Instant_Non_Reloadable_Digital_Card_using_header(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "TransactionsStepDefs.theStatusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the header level",
  "rows": [
    {
      "cells": [
        "successCount",
        "0"
      ]
    },
    {
      "cells": [
        "failedCount",
        "1"
      ]
    },
    {
      "cells": [
        "responseCode",
        "13"
      ]
    },
    {
      "cells": [
        "responseMessage",
        "Invalid card data"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.iShouldSeeTheFollowingInTheHeaderLevel(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the \"cardDetailResponseList\"",
  "rows": [
    {
      "cells": [
        "responseCode",
        "responseMessage"
      ]
    },
    {
      "cells": [
        "13",
        "- mobileNumber : Mobile Number is not valid"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.i_should_see_the_following_in_the_card_list(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating the response code and messages.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
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
  "name": "i am an authorized corporate user",
  "keyword": "Given "
});
formatter.match({
  "location": "AuthorizeStepDefs.IamAnAuthorizedUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i am issuing an Instant Non Reloadable Digital Card using \"old\" header with V1 of API",
  "rows": [
    {
      "cells": [
        "cardSchemeId",
        "7"
      ]
    },
    {
      "cells": [
        "isLinkToBeSentOnMobile",
        "true"
      ]
    },
    {
      "cells": [
        "customerName",
        "afzal"
      ]
    },
    {
      "cells": [
        "mobileNumber",
        "8284854535"
      ]
    },
    {
      "cells": [
        "email",
        "afzal.ahmed@"
      ]
    },
    {
      "cells": [
        "amount",
        "1000"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CardIssueStepDefs.i_am_issuing_an_Instant_Non_Reloadable_Digital_Card_using_header(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "TransactionsStepDefs.theStatusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the header level",
  "rows": [
    {
      "cells": [
        "successCount",
        "0"
      ]
    },
    {
      "cells": [
        "failedCount",
        "1"
      ]
    },
    {
      "cells": [
        "responseCode",
        "13"
      ]
    },
    {
      "cells": [
        "responseMessage",
        "Invalid card data"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.iShouldSeeTheFollowingInTheHeaderLevel(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the \"cardDetailResponseList\"",
  "rows": [
    {
      "cells": [
        "responseCode",
        "responseMessage"
      ]
    },
    {
      "cells": [
        "13",
        "- email : Email Format is not valid"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.i_should_see_the_following_in_the_card_list(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validating the error response code and messages.",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "i am an authorized corporate user",
  "keyword": "Given "
});
formatter.step({
  "name": "i am issuing an Instant Non Reloadable Digital Card using \"new\" header with V2 of API",
  "keyword": "When ",
  "rows": [
    {
      "cells": [
        "cardSchemeId",
        "7"
      ]
    },
    {
      "cells": [
        "isLinkToBeSentOnMobile",
        "true"
      ]
    },
    {
      "cells": [
        "customerName",
        "\u003ccustomerName\u003e"
      ]
    },
    {
      "cells": [
        "mobileNumber",
        "\u003cmobileNumber\u003e"
      ]
    },
    {
      "cells": [
        "email",
        "\u003cemail\u003e"
      ]
    },
    {
      "cells": [
        "amount",
        "\u003camount\u003e"
      ]
    }
  ]
});
formatter.step({
  "name": "the status code should be 200",
  "keyword": "Then "
});
formatter.step({
  "name": "i should see the following in the header level",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "successCount",
        "0"
      ]
    },
    {
      "cells": [
        "failedCount",
        "1"
      ]
    },
    {
      "cells": [
        "responseCode",
        "\u003cresponseCode\u003e"
      ]
    },
    {
      "cells": [
        "responseMessage",
        "\u003cresponseMessageatheaderlevel\u003e"
      ]
    }
  ]
});
formatter.step({
  "name": "i should see the following in the \"cardDetailResponseList\"",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "responseCode",
        "responseMessage"
      ]
    },
    {
      "cells": [
        "\u003cresponseCode\u003e",
        "\u003cresponseMessage\u003e"
      ]
    }
  ]
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "customerName",
        "mobileNumber",
        "email",
        "amount",
        "responseMessage",
        "responseCode",
        "responseMessageatheaderlevel"
      ]
    },
    {
      "cells": [
        "123Afzal",
        "8284854535",
        "afzal.ahmed@pinelabs.com",
        "1000",
        "- firstName : Customer Name is not valid. It should start with an alphabet and could contain maximum 50 characters in form of alphabets, numbers, white space, dot(.)",
        "13",
        "Invalid card data"
      ]
    },
    {
      "cells": [
        "afzal",
        "1111111111",
        "afzal.ahmed@pinelabs.com",
        "1000",
        "- mobileNumber : Mobile Number is not valid",
        "13",
        "Invalid card data"
      ]
    },
    {
      "cells": [
        "afzal",
        "8284854535",
        "afzal.ahmed@",
        "1000",
        "- email : Email Format is not valid",
        "13",
        "Invalid card data"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validating the error response code and messages.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
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
  "name": "i am an authorized corporate user",
  "keyword": "Given "
});
formatter.match({
  "location": "AuthorizeStepDefs.IamAnAuthorizedUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i am issuing an Instant Non Reloadable Digital Card using \"new\" header with V2 of API",
  "rows": [
    {
      "cells": [
        "cardSchemeId",
        "7"
      ]
    },
    {
      "cells": [
        "isLinkToBeSentOnMobile",
        "true"
      ]
    },
    {
      "cells": [
        "customerName",
        "123Afzal"
      ]
    },
    {
      "cells": [
        "mobileNumber",
        "8284854535"
      ]
    },
    {
      "cells": [
        "email",
        "afzal.ahmed@pinelabs.com"
      ]
    },
    {
      "cells": [
        "amount",
        "1000"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CardIssueStepDefs.i_am_issuing_an_Instant_Non_Reloadable_Digital_Card_with_V2_API(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "TransactionsStepDefs.theStatusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the header level",
  "rows": [
    {
      "cells": [
        "successCount",
        "0"
      ]
    },
    {
      "cells": [
        "failedCount",
        "1"
      ]
    },
    {
      "cells": [
        "responseCode",
        "13"
      ]
    },
    {
      "cells": [
        "responseMessage",
        "Invalid card data"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.iShouldSeeTheFollowingInTheHeaderLevel(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the \"cardDetailResponseList\"",
  "rows": [
    {
      "cells": [
        "responseCode",
        "responseMessage"
      ]
    },
    {
      "cells": [
        "13",
        "- firstName : Customer Name is not valid. It should start with an alphabet and could contain maximum 50 characters in form of alphabets, numbers, white space, dot(.)"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.i_should_see_the_following_in_the_card_list(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating the error response code and messages.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
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
  "name": "i am an authorized corporate user",
  "keyword": "Given "
});
formatter.match({
  "location": "AuthorizeStepDefs.IamAnAuthorizedUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i am issuing an Instant Non Reloadable Digital Card using \"new\" header with V2 of API",
  "rows": [
    {
      "cells": [
        "cardSchemeId",
        "7"
      ]
    },
    {
      "cells": [
        "isLinkToBeSentOnMobile",
        "true"
      ]
    },
    {
      "cells": [
        "customerName",
        "afzal"
      ]
    },
    {
      "cells": [
        "mobileNumber",
        "1111111111"
      ]
    },
    {
      "cells": [
        "email",
        "afzal.ahmed@pinelabs.com"
      ]
    },
    {
      "cells": [
        "amount",
        "1000"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CardIssueStepDefs.i_am_issuing_an_Instant_Non_Reloadable_Digital_Card_with_V2_API(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "TransactionsStepDefs.theStatusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the header level",
  "rows": [
    {
      "cells": [
        "successCount",
        "0"
      ]
    },
    {
      "cells": [
        "failedCount",
        "1"
      ]
    },
    {
      "cells": [
        "responseCode",
        "13"
      ]
    },
    {
      "cells": [
        "responseMessage",
        "Invalid card data"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.iShouldSeeTheFollowingInTheHeaderLevel(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the \"cardDetailResponseList\"",
  "rows": [
    {
      "cells": [
        "responseCode",
        "responseMessage"
      ]
    },
    {
      "cells": [
        "13",
        "- mobileNumber : Mobile Number is not valid"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.i_should_see_the_following_in_the_card_list(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating the error response code and messages.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
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
  "name": "i am an authorized corporate user",
  "keyword": "Given "
});
formatter.match({
  "location": "AuthorizeStepDefs.IamAnAuthorizedUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i am issuing an Instant Non Reloadable Digital Card using \"new\" header with V2 of API",
  "rows": [
    {
      "cells": [
        "cardSchemeId",
        "7"
      ]
    },
    {
      "cells": [
        "isLinkToBeSentOnMobile",
        "true"
      ]
    },
    {
      "cells": [
        "customerName",
        "afzal"
      ]
    },
    {
      "cells": [
        "mobileNumber",
        "8284854535"
      ]
    },
    {
      "cells": [
        "email",
        "afzal.ahmed@"
      ]
    },
    {
      "cells": [
        "amount",
        "1000"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CardIssueStepDefs.i_am_issuing_an_Instant_Non_Reloadable_Digital_Card_with_V2_API(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "TransactionsStepDefs.theStatusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the header level",
  "rows": [
    {
      "cells": [
        "successCount",
        "0"
      ]
    },
    {
      "cells": [
        "failedCount",
        "1"
      ]
    },
    {
      "cells": [
        "responseCode",
        "13"
      ]
    },
    {
      "cells": [
        "responseMessage",
        "Invalid card data"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.iShouldSeeTheFollowingInTheHeaderLevel(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the \"cardDetailResponseList\"",
  "rows": [
    {
      "cells": [
        "responseCode",
        "responseMessage"
      ]
    },
    {
      "cells": [
        "13",
        "- email : Email Format is not valid"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.i_should_see_the_following_in_the_card_list(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Issuing a card with Invalid Scheme id",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
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
  "name": "i am an authorized corporate user",
  "keyword": "Given "
});
formatter.match({
  "location": "AuthorizeStepDefs.IamAnAuthorizedUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i am issuing an Instant Non Reloadable Digital Card using \"old\" header with V1 of API",
  "rows": [
    {
      "cells": [
        "cardSchemeId",
        "51"
      ]
    },
    {
      "cells": [
        "isLinkToBeSentOnMobile",
        "true"
      ]
    },
    {
      "cells": [
        "customerName",
        "afzal"
      ]
    },
    {
      "cells": [
        "mobileNumber",
        "8284854535"
      ]
    },
    {
      "cells": [
        "email",
        "afzal.ahmed@pinelabs.com"
      ]
    },
    {
      "cells": [
        "amount",
        "1000"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CardIssueStepDefs.i_am_issuing_an_Instant_Non_Reloadable_Digital_Card_using_header(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "TransactionsStepDefs.theStatusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the header level",
  "rows": [
    {
      "cells": [
        "responseCode",
        "305"
      ]
    },
    {
      "cells": [
        "responseMessage",
        "Invalid card scheme Id"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.iShouldSeeTheFollowingInTheHeaderLevel(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Issuing a card with Invalid Scheme id",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
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
  "name": "i am an authorized corporate user",
  "keyword": "Given "
});
formatter.match({
  "location": "AuthorizeStepDefs.IamAnAuthorizedUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i am issuing an Instant Non Reloadable Digital Card using \"new\" header with V2 of API",
  "rows": [
    {
      "cells": [
        "cardSchemeId",
        "51"
      ]
    },
    {
      "cells": [
        "isLinkToBeSentOnMobile",
        "true"
      ]
    },
    {
      "cells": [
        "customerName",
        "afzal"
      ]
    },
    {
      "cells": [
        "mobileNumber",
        "8284854535"
      ]
    },
    {
      "cells": [
        "email",
        "afzal.ahmed@pinelabs.com"
      ]
    },
    {
      "cells": [
        "amount",
        "1000"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CardIssueStepDefs.i_am_issuing_an_Instant_Non_Reloadable_Digital_Card_with_V2_API(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "TransactionsStepDefs.theStatusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the header level",
  "rows": [
    {
      "cells": [
        "responseCode",
        "305"
      ]
    },
    {
      "cells": [
        "responseMessage",
        "Invalid card scheme Id"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.iShouldSeeTheFollowingInTheHeaderLevel(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Issuing card with amount more that available account balance.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.scenario({
  "name": "Validating the net order amount after changing the issuance charges",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
});