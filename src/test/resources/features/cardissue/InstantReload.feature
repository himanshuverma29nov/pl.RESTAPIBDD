Feature: Instant Reload API

  Background:
    Given i fetch the mobile number from properties
    And de link from all the previously issued card

  Scenario: Issuing a Reloadable Card and Reloading it using the Reload API and validating the total card balance
    Given i am an authorized corporate user
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
    Then the status code should be 200
    When i get the card detail using "old" header with V1 API for the following card
      | Reference Number | context |
    Then i should see the following in the header level
      | orderAmount     | 1000    |
      | successCount    | 1       |
      | responseMessage | Success |
    Then i should see the following in the "cardDetailResponseList"
      | balance | cardReferenceNumber |
      | 2000    | context             |

  Scenario: Validating the case on reloading and non reloadable card.
    Given i am an authorized corporate user
    When i am issuing an Instant Non Reloadable Digital Card using "old" header with V1 of API
      | cardSchemeId           | 7                        |
      | isLinkToBeSentOnMobile | true                     |
      | customerName           | afzal                    |
      | mobileNumber           | 8284854535               |
      | email                  | afzal.ahmed@pinelabs.com |
      | amount                 | 1000                     |
    When i am reloading the issued card with following details
      | cardNetwork     | 1       |
      | cardCategoryId  | 1       |
      | cardIdentifier  | 1       |
      | referenceNumber | context |
      | serialNumber    | null    |
      | amount          | 1000    |
    Then the status code should be 200
    When i get the card detail using "old" header with V1 API for the following card
      | Reference Number | context |
    Then i should see the following in the header level
      | orderAmount     | 1000    |
      | failedCount     | 1       |
      | responseMessage | Success |
    Then i should see the following in the "cardDetailResponseList"
      | balance | cardReferenceNumber | responseMessage                  | responseCode |
      | 2000    | context             | Card account type does not match | 201          |

  Scenario: Validating case on reloading a blocked card.
    Given i am an authorized corporate user
    And i am fetching a physical "reloadable" dummy card from database


  Scenario: Validating a case of reloading an terminated card.

  Scenario: Validating case of Reloading a card more than its limit.

  Scenario: Validating corporate balance deduction on reloading the card.

  Scenario Validating the entries in the ExternalRequestDetail,ExternalRequestTimeLog,ordersummary, giftcardtransaction, corporateaccounthistory


