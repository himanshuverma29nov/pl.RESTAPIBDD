@Regression
Feature: Customer Card Update API

  Scenario: Updating the card status to blocked
    Given i am an authorized corporate user
    And i am fetching a physical "non reloadable" dummy card from database
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
    When i am changing the status with the following details with customer API:
      | referenceNumber | context |
      | cardStatus      | 3       |
      | reason          | 1       |
      | remarks         | Test    |
    Then the status code should be 200
    And i should see the following in the header level
      | remarks         | Test    |
      | responseCode    | 0       |
      | responseMessage | Success |
    And i should see the following in the "cardStatusUpdateResponseList"
      | referenceNumber | responseCode | responseMessage |
      | context         | 0            | Success         |
    And i should see the following details in the card table
      | CardStatus | 3           |
      | BlockedOn  | currentDate |


  Scenario: Updating the card status to blocked
    Given i am an authorized corporate user
    When i am changing the status with the following details:
      | referenceNumber | 8978696263 |
      | cardStatus      | 3          |
      | reason          | 1          |
      | remarks         | Test       |
    Then the status code should be 200
    And i should see the following in the header level
      | remarks         | Test              |
      | responseCode    | 13                |
      | responseMessage | Invalid card data |
    And i should see the following in the "cardStatusUpdateResponseList"
      | referenceNumber | responseCode | responseMessage                                       |
      | 8978696263      | 13           | - cardStatus : Selected value Blocked is not allowed. |

  Scenario: Updating the card status from active to active
    Given i am an authorized corporate user
    When i am changing the status with the following details:
      | referenceNumber | 8978696263 |
      | cardStatus      | 1          |
      | reason          | 1          |
      | remarks         | Test       |
    And i am again changing the status with the following details:
      | referenceNumber | 8978696263 |
      | cardStatus      | 1          |
      | reason          | 1          |
      | remarks         | Test       |
    Then the status code should be 200
    And i should see the following in the header level
      | remarks         | Test    |
      | responseCode    | 0       |
      | responseMessage | Success |
    And i should see the following in the "cardStatusUpdateResponseList"
      | referenceNumber | responseCode | responseMessage                                                         |
      | 8978696263      | 267          | Card is already in this state. Please choose different status to update |

  Scenario: Validating the response JSON schema
    Given i am an authorized corporate user
    When i am changing the status with the following details:
      | referenceNumber | 8978696263 |
      | cardStatus      | 2          |
      | reason          | 1          |
      | remarks         | Test       |
    Then validate the JSON Schema using "CustomerCardUpdate"

  Scenario: Validating the case on marking an card terminated.

  Scenario: Validating the case on marking an terminated card again active.

  Scenario: Validating the case of marking an inactive card blocked.

  Scenario: Validating the case of marking the multiple cards blocked.

  
