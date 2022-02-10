@Regression
Feature: Card Transaction Details for the V1 & V2 API

  Scenario: Issuing a card and then reloading should create a entry in the in the details for V1 API
    Given i am an authorized corporate user
    Given i fetch the mobile number from properties
    And de link from all the previously issued card
    When i am issuing an Instant Reloadable Digital Card using "old" header with V1 of API
      | cardSchemeId           | 12                       |
      | isLinkToBeSentOnMobile | true                     |
      | customerName           | afzal                    |
      | mobileNumber           | context                  |
      | email                  | afzal.ahmed@pinelabs.com |
      | amount                 | 1000                     |
    When i am reloading the issued card with following details
      | cardNetwork     | 1       |
      | cardCategoryId  | 1       |
      | cardIdentifier  | 1       |
      | referenceNumber | context |
      | serialNumber    | null    |
      | amount          | 1000    |
    When i am getting the transaction details with "old" header with V1 transaction detail API
      | referenceNumber | context |
    Then the status code should be 200
    And i should see the following in the header level
      | responseCode    | 0       |
      | responseMessage | Success |
    And i should see the following in the "transactionDetailList"
      | transactionDate | transactionAmount | transactionType | entityName       |
      | currentDate     | 200               | Credit          | Aztech Corporate |
      | currentDate     | 1000              | Credit          | Aztech Corporate |

  Scenario: Issuing a card and then reloading should create a entry in the in the details for V2 API
    Given i am an authorized corporate user
    Given i fetch the mobile number from properties
    And de link from all the previously issued card
    When i am issuing an Instant Reloadable Digital Card using "old" header with V1 of API
      | cardSchemeId           | 12                       |
      | isLinkToBeSentOnMobile | true                     |
      | customerName           | afzal                    |
      | mobileNumber           | context                  |
      | email                  | afzal.ahmed@pinelabs.com |
      | amount                 | 1000                     |
    When i am reloading the issued card with following details
      | cardNetwork     | 1       |
      | cardCategoryId  | 1       |
      | cardIdentifier  | 1       |
      | referenceNumber | context |
      | serialNumber    | null    |
      | amount          | 1000    |
    When i am getting the transaction details with "new" header with V1 transaction detail API
      | referenceNumber | context |
    Then the status code should be 200
    And i should see the following in the header level
      | responseCode    | 0       |
      | responseMessage | Success |
    And i should see the following in the "transactionDetailList"
      | transactionDate | transactionAmount | transactionType | entityName       |
      | currentDate     | 200               | Credit          | Aztech Corporate |
      | currentDate     | 1000              | Credit          | Aztech Corporate |


