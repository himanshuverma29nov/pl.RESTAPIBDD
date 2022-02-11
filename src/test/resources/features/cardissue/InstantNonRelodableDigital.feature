@Regression @Ready
Feature: Instant Non Reloadable Digital Card Issuing API V1 & V2

  @DB
  Scenario: Issuing a instant non reloadable card using V1 API
    Given i am an authorized corporate user
    When i am issuing an Instant Non Reloadable Digital Card using "old" header with V1 of API
      | cardSchemeId           | 7                        |
      | isLinkToBeSentOnMobile | true                     |
      | customerName           | afzal                    |
      | mobileNumber           | 8284854535               |
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
  Scenario: Issuing a instant non reloadable card using V2 API
    Given i am an authorized corporate user
    When i am issuing an Instant Non Reloadable Digital Card using "new" header with V2 of API
      | cardSchemeId           | 7                        |
      | isLinkToBeSentOnMobile | true                     |
      | customerName           | afzal                    |
      | mobileNumber           | 8284854535               |
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


  Scenario Outline: Validating the response code and messages.
    Given i am an authorized corporate user
    When i am issuing an Instant Non Reloadable Digital Card using "old" header with V1 of API
      | cardSchemeId           | 7              |
      | isLinkToBeSentOnMobile | true           |
      | customerName           | <customerName> |
      | mobileNumber           | <mobileNumber> |
      | email                  | <email>        |
      | amount                 | <amount>       |
    Then the status code should be 200
    And i should see the following in the header level
      | successCount    | 0                              |
      | failedCount     | 1                              |
      | responseCode    | <responseCode>                 |
      | responseMessage | <responseMessageatheaderlevel> |
    And i should see the following in the "cardDetailResponseList"
      | responseCode   | responseMessage   |
      | <responseCode> | <responseMessage> |
    Examples:
      | customerName | mobileNumber | email                    | amount | responseMessage                                                                                                                                                       | responseCode | responseMessageatheaderlevel |
      | 123Afzal     | 8284854535   | afzal.ahmed@pinelabs.com | 1000   | - firstName : Customer Name is not valid. It should start with an alphabet and could contain maximum 50 characters in form of alphabets, numbers, white space, dot(.) | 13           | Invalid card data            |
      | afzal        | 1111111111   | afzal.ahmed@pinelabs.com | 1000   | - mobileNumber : Mobile Number is not valid                                                                                                                           | 13           | Invalid card data            |
      | afzal        | 8284854535   | afzal.ahmed@             | 1000   | - email : Email Format is not valid                                                                                                                                   | 13           | Invalid card data            |

  Scenario Outline: Validating the error response code and messages.
    Given i am an authorized corporate user
    When i am issuing an Instant Non Reloadable Digital Card using "new" header with V2 of API
      | cardSchemeId           | 7              |
      | isLinkToBeSentOnMobile | true           |
      | customerName           | <customerName> |
      | mobileNumber           | <mobileNumber> |
      | email                  | <email>        |
      | amount                 | <amount>       |
    Then the status code should be 200
    And i should see the following in the header level
      | successCount    | 0                              |
      | failedCount     | 1                              |
      | responseCode    | <responseCode>                 |
      | responseMessage | <responseMessageatheaderlevel> |
    And i should see the following in the "cardDetailResponseList"
      | responseCode   | responseMessage   |
      | <responseCode> | <responseMessage> |
    Examples:
      | customerName | mobileNumber | email                    | amount | responseMessage                                                                                                                                                       | responseCode | responseMessageatheaderlevel |
      | 123Afzal     | 8284854535   | afzal.ahmed@pinelabs.com | 1000   | - firstName : Customer Name is not valid. It should start with an alphabet and could contain maximum 50 characters in form of alphabets, numbers, white space, dot(.) | 13           | Invalid card data            |
      | afzal        | 1111111111   | afzal.ahmed@pinelabs.com | 1000   | - mobileNumber : Mobile Number is not valid                                                                                                                           | 13           | Invalid card data            |
      | afzal        | 8284854535   | afzal.ahmed@             | 1000   | - email : Email Format is not valid                                                                                                                                   | 13           | Invalid card data            |

  Scenario: Issuing a card with Invalid Scheme id
    Given i am an authorized corporate user
    When i am issuing an Instant Non Reloadable Digital Card using "old" header with V1 of API
      | cardSchemeId           | 51                       |
      | isLinkToBeSentOnMobile | true                     |
      | customerName           | afzal                    |
      | mobileNumber           | 8284854535               |
      | email                  | afzal.ahmed@pinelabs.com |
      | amount                 | 1000                     |
    Then the status code should be 200
    And i should see the following in the header level
      | responseCode    | 305                    |
      | responseMessage | Invalid card scheme Id |

  Scenario: Issuing a card with Invalid Scheme id
    Given i am an authorized corporate user
    When i am issuing an Instant Non Reloadable Digital Card using "new" header with V2 of API
      | cardSchemeId           | 51                       |
      | isLinkToBeSentOnMobile | true                     |
      | customerName           | afzal                    |
      | mobileNumber           | 8284854535               |
      | email                  | afzal.ahmed@pinelabs.com |
      | amount                 | 1000                     |
    Then the status code should be 200
    And i should see the following in the header level
      | responseCode    | 305                    |
      | responseMessage | Invalid card scheme Id |

    #  Scenario: On issuing a new non reloadable card the corporate account balance should be deducted and debit amount should be increased.
#    Given i am an authorized corporate user
#    And i am getting the balance amount and the debit amount with account type 12 and cardcategoryId 4
#    When i am issuing an Instant Non Reloadable Digital Card using "old" header with V1 of API
#      | cardSchemeId           | 7                        |
#      | isLinkToBeSentOnMobile | true                     |
#      | customerName           | afzal                    |
#      | mobileNumber           | 8284854535               |
#      | email                  | afzal.ahmed@pinelabs.com |
#      | amount                 | 1000                     |
#    And i am getting the corporate account balance with account type 12 and cardcategoryId 4
#    Then the balance amount should 1000 less and debit amount should be 1000 more

  Scenario: Issuing card with amount more that available account balance.


  Scenario: Validating the net order amount after changing the issuance charges.





