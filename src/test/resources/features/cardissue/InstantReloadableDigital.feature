@TestSet0 @Regression @DB @Ready
Feature: Instant Reloadable Digital card Issuing API V1&V2

  Background:
    Given i fetch the mobile number from properties
    And de link from all the previously issued card

  Scenario: Issuing a Reloadable Digital Card with V1 API
    Given i am an authorized corporate user
    When i am issuing an Instant Reloadable Digital Card using "old" header with V1 of API
      | cardSchemeId           | 12                       |
      | isLinkToBeSentOnMobile | true                     |
      | customerName           | afzal                    |
      | mobileNumber           | context                  |
      | email                  | afzal.ahmed@pinelabs.com |
      | amount                 | 1000                     |
    Then the status code should be 200
    And i should see the following in the header level
      | orderStatus     | 6       |
      | successCount    | 1       |
      | failedCount     | 0       |
      | orderAmount     | 1000    |
      | responseCode    | 0       |
      | responseMessage | Success |
    And i should see the following in the "cardDetailResponseList"
      | customerName | mobileNumber | email                    | amount | responseCode | responseMessage |
      | afzal        | 8284854535   | afzal.ahmed@pinelabs.com | 1000   | 0            | Success         |
    And i should see the following details in the ExternalRequestDetail table
      | ExternalRequestId           | context     |
      | ExternalAPIType             | 9           |
      | CorporateId                 | 6           |
      | ExternalRequestDetailStatus | 6           |
      | ResponseCode                | 0           |
      | ResponseMessage             | Success     |
      | CreatedOn                   | CurrentDate |
      | ModifiedOn                  | CurrentDate |
    And i should see the following details in the ExternalRequestTimeLog table
      | ServiceName     | /card/order                          |
      | InstanceName    | /instant/issue/nonreloadable/digital |
      | Version         | V1                                   |
      | ExternalAPIType | 9                                    |
      | ResponseMessage | Success                              |
      | CreatedOn       | CurrentDate                          |
    And i should see the following details in the ordersummary table
      | AdminUserInfoId        | 6           |
      | OrderAmount            | 1000        |
      | NetOrderAmount         | 1100        |
      | CorporateOrderQuantity | 1           |
      | IsInstant              | 1           |
      | AccountType            | 12          |
      | CardNetwork            | 1           |
      | IssuerId               | 1           |
      | ModifiedOn             | CurrentDate |
      | CreatedOn              | CurrentDate |
    And i should see the following details in the giftcardtransaction table
      | CorporateId     | 6    |
      | AccountType     | 12   |
      | Amount          | 1000 |
      | TransactionType | 1    |
      | IssuerId        | 1    |
    And i should see the following details in the corporateaccounthistory table
      | CorporateId | 6    |
      | Amount      | 1100 |
      | NetAmount   | 1100 |
      | FundStatus  | 2    |
      | AccountType | 12   |
      | IssuerId    | 1    |
    And i should see the following details in the card table
      | CorporateId            | 6                        |
      | CardSchemeId           | 7                        |
      | AccountType            | 12                       |
      | ActivationEmail        | afzal.ahmed@pinelabs.com |
      | ActivationMobileNumber | 8284854535               |


  @DB
  Scenario: Issuing a Reloadable Digital Card with V2 API
    Given i am an authorized corporate user
    When i am issuing an Instant Reloadable Digital Card using "new" header with V2 of API
      | cardSchemeId           | 12                       |
      | isLinkToBeSentOnMobile | true                     |
      | customerName           | afzal                    |
      | mobileNumber           | context                  |
      | email                  | afzal.ahmed@pinelabs.com |
      | amount                 | 1000                     |
    Then the status code should be 200
    And i should see the following in the header level
      | orderStatus     | 6       |
      | successCount    | 1       |
      | failedCount     | 0       |
      | orderAmount     | 1000    |
      | responseCode    | 0       |
      | responseMessage | Success |
    And i should see the following in the "cardDetailResponseList"
      | customerName | mobileNumber | email                    | amount | responseCode | responseMessage |
      | afzal        | 8284854535   | afzal.ahmed@pinelabs.com | 1000   | 0            | Success         |
#    And i should see the following in the card list in the database
#      | ActivationEmail        | afzal.ahmed@pinelabs.com |
#      | ActivationMobileNumber | context                  |

  Scenario Outline: Validating the response code and messages for V1 API.
    Given i am an authorized corporate user
    When i am issuing an Instant Reloadable Digital Card using "old" header with V1 of API
      | cardSchemeId           | 12             |
      | isLinkToBeSentOnMobile | true           |
      | customerName           | <customerName> |
      | mobileNumber           | <mobileNumber> |
      | email                  | <email>        |
      | amount                 | <amount>       |
    Then the status code should be 200
    And i should see the following in the header level
      | successCount    | 0                              |
      | failedCount     | 1                              |
      | responseMessage | <responseMessageatheaderlevel> |
    And i should see the following in the "cardDetailResponseList"
      | responseCode   | responseMessage   |
      | <responseCode> | <responseMessage> |
    Examples:
      | customerName | mobileNumber | email                    | amount   | responseMessage                                                                                                                                                       | responseCode | responseMessageatheaderlevel |
      | 123Afzal     | context      | afzal.ahmed@pinelabs.com | 1000     | - firstName : Customer Name is not valid. It should start with an alphabet and could contain maximum 50 characters in form of alphabets, numbers, white space, dot(.) | 13           | Invalid card data            |
      | afzal        | 1111111111   | afzal.ahmed@pinelabs.com | 1000     | - mobileNumber : Mobile Number is not valid                                                                                                                           | 13           | Invalid card data            |
      | afzal        | context      | afzal.ahmed@             | 1000     | - email : Email Format is not valid                                                                                                                                   | 13           | Invalid card data            |
      | afzal        | context      | afzal.ahmed@pinelabs.com | 99999999 | Invalid Maximum Load Amount                                                                                                                                           | 364          | Success                      |

  Scenario Outline: Validating the error response code and messages for V2 API.
    Given i am an authorized corporate user
    When i am issuing an Instant Reloadable Digital Card using "new" header with V2 of API
      | cardSchemeId           | 12             |
      | isLinkToBeSentOnMobile | true           |
      | customerName           | <customerName> |
      | mobileNumber           | <mobileNumber> |
      | email                  | <email>        |
      | amount                 | <amount>       |
    Then the status code should be 200
    And i should see the following in the header level
      | successCount    | 0                              |
      | failedCount     | 1                              |
      | responseMessage | <responseMessageatheaderlevel> |
    And i should see the following in the "cardDetailResponseList"
      | responseCode   | responseMessage   |
      | <responseCode> | <responseMessage> |
    Examples:
      | customerName | mobileNumber | email                    | amount   | responseMessage                                                                                                                                                       | responseCode | responseMessageatheaderlevel |
      | 123Afzal     | context      | afzal.ahmed@pinelabs.com | 1000     | - firstName : Customer Name is not valid. It should start with an alphabet and could contain maximum 50 characters in form of alphabets, numbers, white space, dot(.) | 13           | Invalid card data            |
      | afzal        | 1111111111   | afzal.ahmed@pinelabs.com | 1000     | - mobileNumber : Mobile Number is not valid                                                                                                                           | 13           | Invalid card data            |
      | afzal        | context      | afzal.ahmed@             | 1000     | - email : Email Format is not valid                                                                                                                                   | 13           | Invalid card data            |
      | afzal        | context      | afzal.ahmed@pinelabs.com | 99999999 | Invalid Maximum Load Amount                                                                                                                                           | 364          | Success                      |

  Scenario: Issuing a card with Invalid Scheme id for V1 API
    Given i am an authorized corporate user
    When i am issuing an Instant Reloadable Digital Card using "old" header with V1 of API
      | cardSchemeId           | 51                       |
      | isLinkToBeSentOnMobile | true                     |
      | customerName           | afzal                    |
      | mobileNumber           | context                  |
      | email                  | afzal.ahmed@pinelabs.com |
      | amount                 | 1000                     |
    Then the status code should be 200
    And i should see the following in the header level
      | responseCode    | 305                    |
      | responseMessage | Invalid card scheme Id |

  Scenario: Issuing a card with Invalid Scheme id for V2 API
    Given i am an authorized corporate user
    When i am issuing an Instant Reloadable Digital Card using "new" header with V2 of API
      | cardSchemeId           | 51                       |
      | isLinkToBeSentOnMobile | true                     |
      | customerName           | afzal                    |
      | mobileNumber           | context                  |
      | email                  | afzal.ahmed@pinelabs.com |
      | amount                 | 1000                     |
    Then the status code should be 200
    And i should see the following in the header level
      | responseCode    | 305                    |
      | responseMessage | Invalid card scheme Id |

  Scenario: Issuing a reloadable card on already linked mobile for V1 API
    Given i am an authorized corporate user
    When i am issuing an Instant Reloadable Digital Card using "old" header with V1 of API
      | cardSchemeId           | 12                       |
      | isLinkToBeSentOnMobile | true                     |
      | customerName           | afzal                    |
      | mobileNumber           | context                  |
      | email                  | afzal.ahmed@pinelabs.com |
      | amount                 | 1000                     |
    Given i am again issuing the the card with the same details with "old" for V1 API
      | cardSchemeId           | 12                       |
      | isLinkToBeSentOnMobile | true                     |
      | customerName           | afzal                    |
      | mobileNumber           | context                  |
      | email                  | afzal.ahmed@pinelabs.com |
      | amount                 | 1000                     |
    Then the status code should be 200
    And i should see the following in the header level
      | orderStatus     | 6       |
      | successCount    | 0       |
      | failedCount     | 1       |
      | orderAmount     | 1000    |
      | responseCode    | 0       |
      | responseMessage | Success |
    And i should see the following in the "cardDetailResponseList"
      | customerName | mobileNumber | email                    | amount | responseCode | responseMessage                                                       |
      | afzal        | 8284854535   | afzal.ahmed@pinelabs.com | 1000   | 269          | Request declined. Only one such card can be linked to a mobile number |

  Scenario: Issuing a reloadable card on already linked mobile for V2 API
    Given i am an authorized corporate user
    When i am issuing an Instant Reloadable Digital Card using "new" header with V2 of API
      | cardSchemeId           | 12                       |
      | isLinkToBeSentOnMobile | true                     |
      | customerName           | afzal                    |
      | mobileNumber           | context                  |
      | email                  | afzal.ahmed@pinelabs.com |
      | amount                 | 1000                     |
    Given i am again issuing the the card with the same details with "new" for V2 API
      | cardSchemeId           | 12                       |
      | isLinkToBeSentOnMobile | true                     |
      | customerName           | afzal                    |
      | mobileNumber           | context                  |
      | email                  | afzal.ahmed@pinelabs.com |
      | amount                 | 1000                     |
    Then the status code should be 200
    And i should see the following in the header level
      | orderStatus     | 6       |
      | successCount    | 0       |
      | failedCount     | 1       |
      | orderAmount     | 1000    |
      | responseCode    | 0       |
      | responseMessage | Success |
    And i should see the following in the "cardDetailResponseList"
      | customerName | mobileNumber | email                    | amount | responseCode | responseMessage                                                       |
      | afzal        | 8284854535   | afzal.ahmed@pinelabs.com | 1000   | 269          | Request declined. Only one such card can be linked to a mobile number |

#  Scenario: Issuing card with amount more that available account balance.

