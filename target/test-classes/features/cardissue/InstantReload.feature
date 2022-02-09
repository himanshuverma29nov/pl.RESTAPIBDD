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
    Then i should see the following in the "cardDetailResponseList"
      | balance | cardReferenceNumber |
      | 2000    | context             |

  Scenario: Validating the case on reloading and non reloadable card.

  Scenario: Validating on case reloading a blocked card.

  Scenario: Validating a case of reloading an terminated card.

  Scenario: Validating case of Reloading a card more than its limit.

  Scenario: Validating corporate balance deduction on reloading the card.

  Scenario Validating the entries in the ExternalRequestDetail,ExternalRequestTimeLog,ordersummary, giftcardtransaction, corporateaccounthistory


