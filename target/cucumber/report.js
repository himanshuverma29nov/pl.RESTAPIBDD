$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:features/cardissue/InstantNonRelodableDigital.feature");
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
formatter.scenario({
  "name": "Issuing a instant non reloadable card",
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
        "orderStatus",
        "6"
      ]
    },
    {
      "cells": [
        "successCount",
        "1"
      ]
    },
    {
      "cells": [
        "failedCount",
        "0"
      ]
    },
    {
      "cells": [
        "orderAmount",
        "1000"
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
  "name": "i should see the following in the card list",
  "rows": [
    {
      "cells": [
        "customerName",
        "mobileNumber",
        "email",
        "amount",
        "responseCode",
        "responseMessage"
      ]
    },
    {
      "cells": [
        "afzal",
        "8284854535",
        "afzal.ahmed@pinelabs.com",
        "1000",
        "0",
        "Success"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.i_should_see_the_following_in_the_card_list(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the card list in the database",
  "rows": [
    {
      "cells": [
        "ActivationEmail",
        "afzal.ahmed@pinelabs.com"
      ]
    },
    {
      "cells": [
        "ActivationMobileNumber",
        "8284854535"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.iShouldSeeTheFollowingInTheCardListInTheDatabase(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Issuing a instant non reloadable card",
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
        "orderStatus",
        "6"
      ]
    },
    {
      "cells": [
        "successCount",
        "1"
      ]
    },
    {
      "cells": [
        "failedCount",
        "0"
      ]
    },
    {
      "cells": [
        "orderAmount",
        "1000"
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
  "name": "i should see the following in the card list",
  "rows": [
    {
      "cells": [
        "customerName",
        "mobileNumber",
        "email",
        "amount",
        "responseCode",
        "responseMessage"
      ]
    },
    {
      "cells": [
        "afzal",
        "8284854535",
        "afzal.ahmed@pinelabs.com",
        "1000",
        "0",
        "Success"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.i_should_see_the_following_in_the_card_list(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the card list in the database",
  "rows": [
    {
      "cells": [
        "ActivationEmail",
        "afzal.ahmed@pinelabs.com"
      ]
    },
    {
      "cells": [
        "ActivationMobileNumber",
        "8284854535"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.iShouldSeeTheFollowingInTheCardListInTheDatabase(DataTable)"
});
formatter.result({
  "status": "passed"
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
  "name": "i should see the following in the card list",
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
  "name": "i should see the following in the card list",
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
  "location": "TransactionsStepDefs.i_should_see_the_following_in_the_card_list(DataTable)"
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
  "name": "i should see the following in the card list",
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
  "location": "TransactionsStepDefs.i_should_see_the_following_in_the_card_list(DataTable)"
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
  "name": "i should see the following in the card list",
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
  "location": "TransactionsStepDefs.i_should_see_the_following_in_the_card_list(DataTable)"
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
  "name": "i should see the following in the card list",
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
  "name": "i should see the following in the card list",
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
  "location": "TransactionsStepDefs.i_should_see_the_following_in_the_card_list(DataTable)"
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
  "name": "i should see the following in the card list",
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
  "location": "TransactionsStepDefs.i_should_see_the_following_in_the_card_list(DataTable)"
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
  "name": "i should see the following in the card list",
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
  "location": "TransactionsStepDefs.i_should_see_the_following_in_the_card_list(DataTable)"
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
formatter.uri("classpath:features/cardissue/InstantReloadableDigital.feature");
formatter.feature({
  "name": "Issuing Reloadable Digital cards with V1 and V2 API",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@TestSet0"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "i fetch the mobile number from properties",
  "keyword": "Given "
});
formatter.match({
  "location": "PreCondition.iFetchTheMobileNumberFromProperties()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "de link from all the previously issued card",
  "keyword": "And "
});
formatter.match({
  "location": "PreCondition.deLinkFromAllThePreviouslyIssuedCard()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Issuing a Reloadable Digital Card with V1 API",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TestSet0"
    },
    {
      "name": "@Regression"
    }
  ]
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
  "name": "i am issuing an Instant Reloadable Digital Card using \"old\" header with V1 of API",
  "rows": [
    {
      "cells": [
        "cardSchemeId",
        "12"
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
        "context"
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
  "location": "CardIssueStepDefs.iAmIssuingAnInstantReloadableDigitalCardUsingHeaderWithVOfAPI(String,DataTable)"
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
        "orderStatus",
        "6"
      ]
    },
    {
      "cells": [
        "successCount",
        "1"
      ]
    },
    {
      "cells": [
        "failedCount",
        "0"
      ]
    },
    {
      "cells": [
        "orderAmount",
        "1000"
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
  "name": "i should see the following in the card list",
  "rows": [
    {
      "cells": [
        "customerName",
        "mobileNumber",
        "email",
        "amount",
        "responseCode",
        "responseMessage"
      ]
    },
    {
      "cells": [
        "afzal",
        "8284854535",
        "afzal.ahmed@pinelabs.com",
        "1000",
        "0",
        "Success"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.i_should_see_the_following_in_the_card_list(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the card list in the database",
  "rows": [
    {
      "cells": [
        "ActivationEmail",
        "afzal.ahmed@pinelabs.com"
      ]
    },
    {
      "cells": [
        "ActivationMobileNumber",
        "context"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.iShouldSeeTheFollowingInTheCardListInTheDatabase(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "i fetch the mobile number from properties",
  "keyword": "Given "
});
formatter.match({
  "location": "PreCondition.iFetchTheMobileNumberFromProperties()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "de link from all the previously issued card",
  "keyword": "And "
});
formatter.match({
  "location": "PreCondition.deLinkFromAllThePreviouslyIssuedCard()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Issuing a Reloadable Digital Card with V2 API",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TestSet0"
    },
    {
      "name": "@Regression"
    }
  ]
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
  "name": "i am issuing an Instant Reloadable Digital Card using \"new\" header with V2 of API",
  "rows": [
    {
      "cells": [
        "cardSchemeId",
        "12"
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
        "context"
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
  "location": "CardIssueStepDefs.i_am_issuing_an_Instant_Reloadable_Digital_Card_with_V2_API(String,DataTable)"
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
        "orderStatus",
        "6"
      ]
    },
    {
      "cells": [
        "successCount",
        "1"
      ]
    },
    {
      "cells": [
        "failedCount",
        "0"
      ]
    },
    {
      "cells": [
        "orderAmount",
        "1000"
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
  "name": "i should see the following in the card list",
  "rows": [
    {
      "cells": [
        "customerName",
        "mobileNumber",
        "email",
        "amount",
        "responseCode",
        "responseMessage"
      ]
    },
    {
      "cells": [
        "afzal",
        "8284854535",
        "afzal.ahmed@pinelabs.com",
        "1000",
        "0",
        "Success"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.i_should_see_the_following_in_the_card_list(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the card list in the database",
  "rows": [
    {
      "cells": [
        "ActivationEmail",
        "afzal.ahmed@pinelabs.com"
      ]
    },
    {
      "cells": [
        "ActivationMobileNumber",
        "context"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.iShouldSeeTheFollowingInTheCardListInTheDatabase(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validating the response code and messages for V1 API.",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "i am an authorized corporate user",
  "keyword": "Given "
});
formatter.step({
  "name": "i am issuing an Instant Reloadable Digital Card using \"old\" header with V1 of API",
  "keyword": "When ",
  "rows": [
    {
      "cells": [
        "cardSchemeId",
        "12"
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
        "responseMessage",
        "\u003cresponseMessageatheaderlevel\u003e"
      ]
    }
  ]
});
formatter.step({
  "name": "i should see the following in the card list",
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
        "context",
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
        "context",
        "afzal.ahmed@",
        "1000",
        "- email : Email Format is not valid",
        "13",
        "Invalid card data"
      ]
    },
    {
      "cells": [
        "afzal",
        "context",
        "afzal.ahmed@pinelabs.com",
        "99999999",
        "Invalid Maximum Load Amount",
        "364",
        "Success"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "i fetch the mobile number from properties",
  "keyword": "Given "
});
formatter.match({
  "location": "PreCondition.iFetchTheMobileNumberFromProperties()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "de link from all the previously issued card",
  "keyword": "And "
});
formatter.match({
  "location": "PreCondition.deLinkFromAllThePreviouslyIssuedCard()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating the response code and messages for V1 API.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSet0"
    },
    {
      "name": "@Regression"
    }
  ]
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
  "name": "i am issuing an Instant Reloadable Digital Card using \"old\" header with V1 of API",
  "rows": [
    {
      "cells": [
        "cardSchemeId",
        "12"
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
        "context"
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
  "location": "CardIssueStepDefs.iAmIssuingAnInstantReloadableDigitalCardUsingHeaderWithVOfAPI(String,DataTable)"
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
  "name": "i should see the following in the card list",
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
  "location": "TransactionsStepDefs.i_should_see_the_following_in_the_card_list(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "i fetch the mobile number from properties",
  "keyword": "Given "
});
formatter.match({
  "location": "PreCondition.iFetchTheMobileNumberFromProperties()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "de link from all the previously issued card",
  "keyword": "And "
});
formatter.match({
  "location": "PreCondition.deLinkFromAllThePreviouslyIssuedCard()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating the response code and messages for V1 API.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSet0"
    },
    {
      "name": "@Regression"
    }
  ]
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
  "name": "i am issuing an Instant Reloadable Digital Card using \"old\" header with V1 of API",
  "rows": [
    {
      "cells": [
        "cardSchemeId",
        "12"
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
  "location": "CardIssueStepDefs.iAmIssuingAnInstantReloadableDigitalCardUsingHeaderWithVOfAPI(String,DataTable)"
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
  "name": "i should see the following in the card list",
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
  "location": "TransactionsStepDefs.i_should_see_the_following_in_the_card_list(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "i fetch the mobile number from properties",
  "keyword": "Given "
});
formatter.match({
  "location": "PreCondition.iFetchTheMobileNumberFromProperties()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "de link from all the previously issued card",
  "keyword": "And "
});
formatter.match({
  "location": "PreCondition.deLinkFromAllThePreviouslyIssuedCard()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating the response code and messages for V1 API.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSet0"
    },
    {
      "name": "@Regression"
    }
  ]
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
  "name": "i am issuing an Instant Reloadable Digital Card using \"old\" header with V1 of API",
  "rows": [
    {
      "cells": [
        "cardSchemeId",
        "12"
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
        "context"
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
  "location": "CardIssueStepDefs.iAmIssuingAnInstantReloadableDigitalCardUsingHeaderWithVOfAPI(String,DataTable)"
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
  "name": "i should see the following in the card list",
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
  "location": "TransactionsStepDefs.i_should_see_the_following_in_the_card_list(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "i fetch the mobile number from properties",
  "keyword": "Given "
});
formatter.match({
  "location": "PreCondition.iFetchTheMobileNumberFromProperties()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "de link from all the previously issued card",
  "keyword": "And "
});
formatter.match({
  "location": "PreCondition.deLinkFromAllThePreviouslyIssuedCard()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating the response code and messages for V1 API.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSet0"
    },
    {
      "name": "@Regression"
    }
  ]
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
  "name": "i am issuing an Instant Reloadable Digital Card using \"old\" header with V1 of API",
  "rows": [
    {
      "cells": [
        "cardSchemeId",
        "12"
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
        "context"
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
        "99999999"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CardIssueStepDefs.iAmIssuingAnInstantReloadableDigitalCardUsingHeaderWithVOfAPI(String,DataTable)"
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
  "name": "i should see the following in the card list",
  "rows": [
    {
      "cells": [
        "responseCode",
        "responseMessage"
      ]
    },
    {
      "cells": [
        "364",
        "Invalid Maximum Load Amount"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.i_should_see_the_following_in_the_card_list(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validating the error response code and messages for V2 API.",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "i am an authorized corporate user",
  "keyword": "Given "
});
formatter.step({
  "name": "i am issuing an Instant Reloadable Digital Card using \"new\" header with V2 of API",
  "keyword": "When ",
  "rows": [
    {
      "cells": [
        "cardSchemeId",
        "12"
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
        "responseMessage",
        "\u003cresponseMessageatheaderlevel\u003e"
      ]
    }
  ]
});
formatter.step({
  "name": "i should see the following in the card list",
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
        "context",
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
        "context",
        "afzal.ahmed@",
        "1000",
        "- email : Email Format is not valid",
        "13",
        "Invalid card data"
      ]
    },
    {
      "cells": [
        "afzal",
        "context",
        "afzal.ahmed@pinelabs.com",
        "99999999",
        "Invalid Maximum Load Amount",
        "364",
        "Success"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "i fetch the mobile number from properties",
  "keyword": "Given "
});
formatter.match({
  "location": "PreCondition.iFetchTheMobileNumberFromProperties()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "de link from all the previously issued card",
  "keyword": "And "
});
formatter.match({
  "location": "PreCondition.deLinkFromAllThePreviouslyIssuedCard()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating the error response code and messages for V2 API.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSet0"
    },
    {
      "name": "@Regression"
    }
  ]
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
  "name": "i am issuing an Instant Reloadable Digital Card using \"new\" header with V2 of API",
  "rows": [
    {
      "cells": [
        "cardSchemeId",
        "12"
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
        "context"
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
  "location": "CardIssueStepDefs.i_am_issuing_an_Instant_Reloadable_Digital_Card_with_V2_API(String,DataTable)"
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
  "name": "i should see the following in the card list",
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
  "location": "TransactionsStepDefs.i_should_see_the_following_in_the_card_list(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "i fetch the mobile number from properties",
  "keyword": "Given "
});
formatter.match({
  "location": "PreCondition.iFetchTheMobileNumberFromProperties()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "de link from all the previously issued card",
  "keyword": "And "
});
formatter.match({
  "location": "PreCondition.deLinkFromAllThePreviouslyIssuedCard()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating the error response code and messages for V2 API.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSet0"
    },
    {
      "name": "@Regression"
    }
  ]
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
  "name": "i am issuing an Instant Reloadable Digital Card using \"new\" header with V2 of API",
  "rows": [
    {
      "cells": [
        "cardSchemeId",
        "12"
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
  "location": "CardIssueStepDefs.i_am_issuing_an_Instant_Reloadable_Digital_Card_with_V2_API(String,DataTable)"
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
  "name": "i should see the following in the card list",
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
  "location": "TransactionsStepDefs.i_should_see_the_following_in_the_card_list(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "i fetch the mobile number from properties",
  "keyword": "Given "
});
formatter.match({
  "location": "PreCondition.iFetchTheMobileNumberFromProperties()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "de link from all the previously issued card",
  "keyword": "And "
});
formatter.match({
  "location": "PreCondition.deLinkFromAllThePreviouslyIssuedCard()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating the error response code and messages for V2 API.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSet0"
    },
    {
      "name": "@Regression"
    }
  ]
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
  "name": "i am issuing an Instant Reloadable Digital Card using \"new\" header with V2 of API",
  "rows": [
    {
      "cells": [
        "cardSchemeId",
        "12"
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
        "context"
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
  "location": "CardIssueStepDefs.i_am_issuing_an_Instant_Reloadable_Digital_Card_with_V2_API(String,DataTable)"
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
  "name": "i should see the following in the card list",
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
  "location": "TransactionsStepDefs.i_should_see_the_following_in_the_card_list(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "i fetch the mobile number from properties",
  "keyword": "Given "
});
formatter.match({
  "location": "PreCondition.iFetchTheMobileNumberFromProperties()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "de link from all the previously issued card",
  "keyword": "And "
});
formatter.match({
  "location": "PreCondition.deLinkFromAllThePreviouslyIssuedCard()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating the error response code and messages for V2 API.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSet0"
    },
    {
      "name": "@Regression"
    }
  ]
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
  "name": "i am issuing an Instant Reloadable Digital Card using \"new\" header with V2 of API",
  "rows": [
    {
      "cells": [
        "cardSchemeId",
        "12"
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
        "context"
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
        "99999999"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CardIssueStepDefs.i_am_issuing_an_Instant_Reloadable_Digital_Card_with_V2_API(String,DataTable)"
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
  "name": "i should see the following in the card list",
  "rows": [
    {
      "cells": [
        "responseCode",
        "responseMessage"
      ]
    },
    {
      "cells": [
        "364",
        "Invalid Maximum Load Amount"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.i_should_see_the_following_in_the_card_list(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "i fetch the mobile number from properties",
  "keyword": "Given "
});
formatter.match({
  "location": "PreCondition.iFetchTheMobileNumberFromProperties()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "de link from all the previously issued card",
  "keyword": "And "
});
formatter.match({
  "location": "PreCondition.deLinkFromAllThePreviouslyIssuedCard()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Issuing a card with Invalid Scheme id for V1 API",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TestSet0"
    },
    {
      "name": "@Regression"
    }
  ]
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
  "name": "i am issuing an Instant Reloadable Digital Card using \"old\" header with V1 of API",
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
        "context"
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
  "location": "CardIssueStepDefs.iAmIssuingAnInstantReloadableDigitalCardUsingHeaderWithVOfAPI(String,DataTable)"
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
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "i fetch the mobile number from properties",
  "keyword": "Given "
});
formatter.match({
  "location": "PreCondition.iFetchTheMobileNumberFromProperties()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "de link from all the previously issued card",
  "keyword": "And "
});
formatter.match({
  "location": "PreCondition.deLinkFromAllThePreviouslyIssuedCard()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Issuing a card with Invalid Scheme id for V2 API",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TestSet0"
    },
    {
      "name": "@Regression"
    }
  ]
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
  "name": "i am issuing an Instant Reloadable Digital Card using \"new\" header with V2 of API",
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
        "context"
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
  "location": "CardIssueStepDefs.i_am_issuing_an_Instant_Reloadable_Digital_Card_with_V2_API(String,DataTable)"
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
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "i fetch the mobile number from properties",
  "keyword": "Given "
});
formatter.match({
  "location": "PreCondition.iFetchTheMobileNumberFromProperties()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "de link from all the previously issued card",
  "keyword": "And "
});
formatter.match({
  "location": "PreCondition.deLinkFromAllThePreviouslyIssuedCard()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Issuing a reloadable card on already linked mobile for V1 API",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TestSet0"
    },
    {
      "name": "@Regression"
    }
  ]
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
  "name": "i am issuing an Instant Reloadable Digital Card using \"old\" header with V1 of API",
  "rows": [
    {
      "cells": [
        "cardSchemeId",
        "12"
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
        "context"
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
  "location": "CardIssueStepDefs.iAmIssuingAnInstantReloadableDigitalCardUsingHeaderWithVOfAPI(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i am again issuing the the card with the same details with \"old\" for V1 API",
  "rows": [
    {
      "cells": [
        "cardSchemeId",
        "12"
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
        "context"
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
  "keyword": "Given "
});
formatter.match({
  "location": "CardIssueStepDefs.iAmIssuingAnInstantReloadableDigitalCardUsingHeaderWithVOfAPI(String,DataTable)"
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
        "orderStatus",
        "6"
      ]
    },
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
        "orderAmount",
        "1000"
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
  "name": "i should see the following in the card list",
  "rows": [
    {
      "cells": [
        "customerName",
        "mobileNumber",
        "email",
        "amount",
        "responseCode",
        "responseMessage"
      ]
    },
    {
      "cells": [
        "afzal",
        "8284854535",
        "afzal.ahmed@pinelabs.com",
        "1000",
        "269",
        "Request declined. Only one such card can be linked to a mobile number"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.i_should_see_the_following_in_the_card_list(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "i fetch the mobile number from properties",
  "keyword": "Given "
});
formatter.match({
  "location": "PreCondition.iFetchTheMobileNumberFromProperties()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "de link from all the previously issued card",
  "keyword": "And "
});
formatter.match({
  "location": "PreCondition.deLinkFromAllThePreviouslyIssuedCard()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Issuing a reloadable card on already linked mobile for V2 API",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TestSet0"
    },
    {
      "name": "@Regression"
    }
  ]
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
  "name": "i am issuing an Instant Reloadable Digital Card using \"new\" header with V2 of API",
  "rows": [
    {
      "cells": [
        "cardSchemeId",
        "12"
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
        "context"
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
  "location": "CardIssueStepDefs.i_am_issuing_an_Instant_Reloadable_Digital_Card_with_V2_API(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i am again issuing the the card with the same details with \"old\" for V1 API",
  "rows": [
    {
      "cells": [
        "cardSchemeId",
        "12"
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
        "context"
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
  "keyword": "Given "
});
formatter.match({
  "location": "CardIssueStepDefs.iAmIssuingAnInstantReloadableDigitalCardUsingHeaderWithVOfAPI(String,DataTable)"
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
        "orderStatus",
        "6"
      ]
    },
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
        "orderAmount",
        "1000"
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
  "name": "i should see the following in the card list",
  "rows": [
    {
      "cells": [
        "customerName",
        "mobileNumber",
        "email",
        "amount",
        "responseCode",
        "responseMessage"
      ]
    },
    {
      "cells": [
        "afzal",
        "8284854535",
        "afzal.ahmed@pinelabs.com",
        "1000",
        "269",
        "Request declined. Only one such card can be linked to a mobile number"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.i_should_see_the_following_in_the_card_list(DataTable)"
});
formatter.result({
  "status": "passed"
});
});