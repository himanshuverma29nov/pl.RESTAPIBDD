@Regression
Feature: Issuing non reloadable digital physical card

  Scenario: Issuing a non reloadable physical card
    Given i am an authorized corporate user
    And i am fetching a physical "non reloadable" dummy card with "customer generated" pin from database
    When i am issuing an instant physical non reloadable card with following detail
      | cardSchemeId     | 7          |
      | pinMode          | 1          |
      | cardIdentifier   | 1          |
      | orderDescription | Test       |
      | referenceNumber  | dataBase   |
      | serialNumber     | null       |
      | customerName     | afzal      |
      | mobileNumber     | 8284854535 |
      | email            | null       |
      | amount           | 1000       |
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
      | ExternalAPIType             | 7           |
      | CorporateId                 | 6           |
      | ExternalRequestDetailStatus | 6           |
      | ResponseCode                | 0           |
      | ResponseMessage             | Success     |
      | CreatedOn                   | CurrentDate |
      | ModifiedOn                  | CurrentDate |
    And i should see the following details in the ExternalRequestTimeLog table
      | ServiceName     | /card/order                           |
      | InstanceName    | /instant/issue/nonreloadable/physical |
      | Version         | V1                                    |
      | ExternalAPIType | 7                                     |
      | ResponseMessage | Success                               |
      | CreatedOn       | CurrentDate                           |
    And i should see the following details in the ordersummary table
      | AdminUserInfoId        | 6           |
      | OrderAmount            | 1000        |
      | Handling Charges       | 100         |
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

  Scenario: Issuing multiple non reloadable Cards
    Given i am an authorized corporate user
    And i am fetching a list of physical "non reloadable" dummy card with "customer generated" pin from database
    When i am issuing multiple instant physical non reloadable card with following details:
      | cardSchemeId | pinMode | cardIdentifier | orderDescription | referenceNumber | serialNumber | customerName | mobileNumber | email | amount |
      | 7            | 1       | 1              | Test             | dataBase        | null         | APITestOne   | 8284854535   | null  | 1000   |
      | 7            | 1       | 1              | Test             | dataBase        | null         | APITestTwo   | 8141437466   | null  | 1000   |
      | 7            | 1       | 1              | Test             | dataBase        | null         | APITesThree  | 8284854535   | null  | 1000   |
    Then the status code should be 200
    And i should see the following in the header level
      | orderStatus     | 6       |
      | successCount    | 3       |
      | failedCount     | 0       |
      | orderAmount     | 3000    |
      | responseCode    | 0       |
      | responseMessage | Success |
    And i should see the following in the "cardDetailResponseList"
      | customerName | mobileNumber | email                    | amount | responseCode | responseMessage |
      | APITestOne   | 8284854535   | afzal.ahmed@pinelabs.com | 1000   | 0            | Success         |
      | APITestTwo   | 8141437466   | afzal.ahmed@pinelabs.com | 1000   | 0            | Success         |
      | APITestThree | 8284854535   | afzal.ahmed@pinelabs.com | 1000   | 0            | Success         |


  Scenario Outline: Validating the response code and messages.
    Given i am an authorized corporate user
    And i am fetching a physical "non reloadable" dummy card with "customer generated" pin from database
    When i am issuing an instant physical non reloadable card with following detail
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
    And i am fetching a physical "non reloadable" dummy card with "customer generated" pin from database
    When i am issuing an instant physical non reloadable card with following detail
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

  Scenario: Issuing a non reloadable physical card
    Given i am an authorized corporate user
    And i am fetching a physical "non reloadable" dummy card with "customer generated" pin from database
    When i am issuing an instant physical non reloadable card with following detail
      | cardSchemeId     | 7          |
      | pinMode          | 1          |
      | cardIdentifier   | 1          |
      | orderDescription | Test       |
      | referenceNumber  | dataBase   |
      | serialNumber     | null       |
      | customerName     | APITestOne |
      | mobileNumber     | 8284854535 |
      | email            | null       |
      | amount           | 1000       |
    Then the status code should be 200
    And validate the JSON Schema using "instantNonReloadableDgital"

#  Scenario: Issuing a non reloadable card and validating that the amount is deducted from the corporate account balance.
#    Given i am an authorized corporate user
#    And i am getting the corporate account balance for account type 12 and card category id 4 and storing it in the following
#      | balanceAmount | CAB |
#      | debitAmount   | CAD |
#    When i am issuing an Instant Non Reloadable Digital Card using "old" header with V1 of API
#      | cardSchemeId     | 7          |
#      | pinMode          | 1          |
#      | cardIdentifier   | 1          |
#      | orderDescription | Test       |
#      | referenceNumber  | dataBase   |
#      | serialNumber     | null       |
#      | customerName     | APITestOne |
#      | mobileNumber     | 8284854535 |
#      | email            | null       |
#      | amount           | 1000       |
#    Then the status code should be 200
#    When i am getting the Corporate Account Balance using following details
#      | accountType    | 12 |
#      | cardCategoryId | 4  |
#    Then the entity balance details should be as follows
#      | balanceAmount | CAB-1000 |
#      | debitAmount   | CAD-1000 |

#  Scenario: Issuing a non reloadable card and validating that the entry is created in the communication data table.
#    Given i am an authorized corporate user
#    When i am issuing an Instant Non Reloadable Digital Card using "old" header with V1 of API
#      | cardSchemeId     | 7          |
#      | pinMode          | 1          |
#      | cardIdentifier   | 1          |
#      | orderDescription | Test       |
#      | referenceNumber  | dataBase   |
#      | serialNumber     | null       |
#      | customerName     | APITestOne |
#      | mobileNumber     | 8284854535 |
#      | email            | null       |
#      | amount           | 1000       |
#    Then the status code should be 200
#    And i should see the following details in the communication data table
#      | Email                  | 6                        |
#      | CardSchemeId           | 7                        |
#      | AccountType            | 12                       |
#      | ActivationEmail        | afzal.ahmed@pinelabs.com |
#      | ActivationMobileNumber | 8284854535               |



