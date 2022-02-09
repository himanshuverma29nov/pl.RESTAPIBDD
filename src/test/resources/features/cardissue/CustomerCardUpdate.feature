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
      | referenceNumber | context |
      | cardStatus      | 3       |
      | remarks         | Test    |
      | responseCode    | 0       |
      | responseMessage | Success |
    And i should see the following details in the card table
      | CardStatus | 3           |
      | BlockedOn  | currentDate |


  Scenario: Updating the card status from active to active
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
      | cardStatus      | 1       |
      | reason          | 1       |
      | remarks         | Test    |
    Then the status code should be 200
    And i should see the following in the header level
      | referenceNumber | Context                                                                 |
      | cardStatus      | 1                                                                       |
      | remarks         | Test                                                                    |
      | responseCode    | 267                                                                     |
      | responseMessage | Card is already in this state. Please choose different status to update |

  Scenario: Validating the response JSON schema
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
    When i am changing the status with the following details:
      | referenceNumber | context |
      | cardStatus      | 2       |
      | reason          | 1       |
      | remarks         | Test    |
    Then validate the JSON Schema using "CustomerCardUpdate"

  Scenario: Validating the case on marking a card terminated.
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
      | cardStatus      | 4       |
      | reason          | 1       |
      | remarks         | Test    |
    Then the status code should be 200
    And i should see the following in the header level
      | referenceNumber | Context                                                  |
      | cardStatus      | 4                                                        |
      | remarks         | Test                                                     |
      | responseCode    | 13                                                       |
      | responseMessage | - cardStatus : Selected value Terminated is not allowed. |

  Scenario: Validating the case on marking a terminated card again active.
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
    When i am changing the status with the following details:
      | referenceNumber | cardStatus | reason | remarks |
      | context         | 4          | 1      | Test    |
    When i am changing the status with the following details with customer API:
      | referenceNumber | context |
      | cardStatus      | 1       |
      | reason          | 1       |
      | remarks         | Test    |
    Then the status code should be 200
    And i should see the following in the header level
      | referenceNumber | Context                                         |
      | cardStatus      | 1                                               |
      | remarks         | Test                                            |
      | responseCode    | 258                                             |
      | responseMessage | Card is terminated, request cannot be processed |


  Scenario: Validating the case of marking an inactive card blocked.
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
    When i am changing the status with the following details:
      | referenceNumber | cardStatus | reason | remarks |
      | context         | 2          | 1      | Test    |
    When i am changing the status with the following details with customer API:
      | referenceNumber | context |
      | cardStatus      | 3       |
      | reason          | 1       |
      | remarks         | Test    |
    Then the status code should be 200
    And i should see the following in the header level
      | referenceNumber | Context |
      | cardStatus      | 3       |
      | remarks         | Test    |
      | responseCode    | 0       |
      | responseMessage | Success |


  
