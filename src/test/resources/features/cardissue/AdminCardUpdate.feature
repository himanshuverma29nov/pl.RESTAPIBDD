@Regression @Ready
Feature: Admin Card Update API

  Scenario: Updating the card status to inactive
    Given i am an authorized corporate user
    And i am fetching a physical "non reloadable" dummy card with "customer generated" pin from database
    When i am issuing an instant physical non reloadable card with following detail
      | cardSchemeId     | 7          |
      | pinMode          | 3          |
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
    Then the status code should be 200
    And i should see the following in the header level
      | remarks         | Test    |
      | responseCode    | 0       |
      | responseMessage | Success |
    And i should see the following in the "cardStatusUpdateResponseList"
      | referenceNumber | responseCode | responseMessage |
      | context         | 0            | Success         |
    And i should see the following card status in the card table
      | CardStatus                | 2           |
      | InactiveOn                | currentDate |
      | InactiveByAdminUserInfoId | currentuser |

  Scenario: Updating the card status to blocked
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
    When i am changing the status with the following details:
      | referenceNumber | cardStatus | reason | remarks |
      | context         | 3          | 1      | Test    |
    Then the status code should be 200
    And i should see the following in the header level
      | remarks         | Test              |
      | responseCode    | 13                |
      | responseMessage | Invalid card data |
    And i should see the following in the "cardStatusUpdateResponseList"
      | referenceNumber | responseCode | responseMessage                                       |
      | context         | 13           | - cardStatus : Selected value Blocked is not allowed. |

  Scenario: Updating the card status from active to active
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
    When i am changing the status with the following details:
      | referenceNumber | cardStatus | reason | remarks |
      | context         | 1          | 1      | Test    |
    Then the status code should be 200
    And i should see the following in the header level
      | remarks         | Test    |
      | responseCode    | 0       |
      | responseMessage | Success |
    And i should see the following in the "cardStatusUpdateResponseList"
      | referenceNumber | responseCode | responseMessage                                                         |
      | context         | 267          | Card is already in this state. Please choose different status to update |


  Scenario: Validating the case on marking a card terminated.
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
    When i am changing the status with the following details:
      | referenceNumber | cardStatus | reason | remarks |
      | context         | 4          | 1      | Test    |
    Then the status code should be 200
    And i should see the following in the header level
      | remarks         | Test    |
      | responseCode    | 0       |
      | responseMessage | Success |
    And i should see the following in the "cardStatusUpdateResponseList"
      | referenceNumber | responseCode | responseMessage |
      | context         | 0            | Success         |
    And i should see the following card status in the card table
      | CardStatus                  | 4           |
      | TerminatedOn                | currentDate |
      | TerminatedByAdminUserInfoId | currentUser |

  Scenario: Validating the case of marking an terminated card again active.
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
    When i am changing the status with the following details:
      | referenceNumber | cardStatus | reason | remarks |
      | context         | 4          | 1      | Test    |
    And i am again changing the status with the following details:
      | referenceNumber | cardStatus | reason | remarks |
      | context         | 1          | 1      | Test    |
    Then the status code should be 200
    And i should see the following in the header level
      | remarks         | Test    |
      | responseCode    | 0       |
      | responseMessage | Success |
    And i should see the following in the "cardStatusUpdateResponseList"
      | referenceNumber | responseCode | responseMessage                                 |
      | context         | 258          | Card is terminated, request cannot be processed |
    And i should see the following card status in the card table
      | CardStatus   | 4           |
      | TerminatedOn | currentDate |

  Scenario: Validating the case of marking an inactive card terminated.
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
    When i am changing the status with the following details:
      | referenceNumber | cardStatus | reason | remarks |
      | context         | 2          | 1      | Test    |
    And i am again changing the status with the following details:
      | referenceNumber | cardStatus | reason | remarks |
      | context         | 4          | 1      | Test    |
    Then the status code should be 200
    And i should see the following in the header level
      | remarks         | Test    |
      | responseCode    | 0       |
      | responseMessage | Success |
    And i should see the following in the "cardStatusUpdateResponseList"
      | referenceNumber | responseCode | responseMessage |
      | context         | 0            | Success         |
    And i should see the following card status in the card table
      | InactiveOn                  | currentDate |
      | InactiveByAdminUserInfoId   | currentuser |
      | CardStatus                  | 4           |
      | TerminatedOn                | currentDate |
      | TerminatedByAdminUserInfoId | currentuser |

  Scenario: Validating the case of a marking a card terminated which is marked blocked by customer API.
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
    When i am changing the status with the following details with customer API:
      | referenceNumber | context |
      | cardStatus      | 3       |
      | reason          | 1       |
      | remarks         | Test    |
    And i am again changing the status with the following details:
      | referenceNumber | cardStatus | reason | remarks |
      | context         | 4          | 1      | Test    |
    Then the status code should be 200
    And i should see the following in the header level
      | remarks         | Test    |
      | responseCode    | 0       |
      | responseMessage | Success |
    And i should see the following in the "cardStatusUpdateResponseList"
      | referenceNumber | responseCode | responseMessage |
      | context         | 0            | Success         |
    And i should see the following card status in the card table
      | CardStatus                  | 4           |
      | TerminatedOn                | currentDate |
      | TerminatedByAdminUserInfoId | currentUser |


  Scenario: Validating the case of marking a card inactive which is blocked by the customer API
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
    When i am changing the status with the following details with customer API:
      | referenceNumber | context |
      | cardStatus      | 3       |
      | reason          | 1       |
      | remarks         | Test    |
    And i am again changing the status with the following details:
      | referenceNumber | cardStatus | reason | remarks |
      | context         | 2          | 1      | Test    |
    Then the status code should be 200
    And i should see the following in the header level
      | remarks         | Test    |
      | responseCode    | 0       |
      | responseMessage | Success |
    And i should see the following in the "cardStatusUpdateResponseList"
      | referenceNumber | responseCode | responseMessage |
      | context         | 0            | Success         |
    And i should see the following card status in the card table
      | CardStatus                | 2           |
      | InactiveOn                | currentDate |
      | InactiveByAdminUserInfoId | currentUser |

  Scenario:Validating a case of marking a blocked card active.
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
    When i am changing the status with the following details with customer API:
      | referenceNumber | context |
      | cardStatus      | 3       |
      | reason          | 1       |
      | remarks         | Test    |
    And i am again changing the status with the following details:
      | referenceNumber | cardStatus | reason | remarks |
      | context         | 1          | 1      | Test    |
    Then the status code should be 200
    And i should see the following in the header level
      | remarks         | Test    |
      | responseCode    | 0       |
      | responseMessage | Success |
    And i should see the following in the "cardStatusUpdateResponseList"
      | referenceNumber | responseCode | responseMessage |
      | context         | 0            | Success         |
    And i should see the following card status in the card table
      | CardStatus | 1 |
#      | BlockedOn                 | currentDate |

  Scenario: Validating the response JSON schema
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
    When i am changing the status with the following details:
      | referenceNumber | cardStatus | reason | remarks |
      | context         | 2          | 1      | Test    |
    Then validate the JSON Schema using "AdminCardUpdate.json"

  Scenario: Validating the case of marking the multiple cards terminated.
    Given i am an authorized corporate user
    And i am fetching a list of physical "non reloadable" dummy card with "customer generated" pin from database
    When i am issuing multiple instant physical non reloadable card with following details:
      | cardSchemeId | pinMode | cardIdentifier | orderDescription | referenceNumber | serialNumber | customerName | mobileNumber | email | amount |
      | 7            | 1       | 1              | Test             | dataBase        | null         | APITestOne   | 8284854535   | null  | 1000   |
      | 7            | 1       | 1              | Test             | dataBase        | null         | APITestTwo   | 8141437466   | null  | 1000   |
      | 7            | 1       | 1              | Test             | dataBase        | null         | APITesThree  | 8284854535   | null  | 1000   |
    Then the status code should be 200
    When i am changing the status with the following details:
      | referenceNumber | cardStatus | reason | remarks |
      | context         | 4          | 1      | Test    |
      | context         | 2          | 1      | Test    |
      | context         | 4          | 1      | Test    |
    Then the status code should be 200
    And i should see the following in the header level
      | remarks         | Test    |
      | responseCode    | 0       |
      | responseMessage | Success |
    And i should see the following in the "cardStatusUpdateResponseList"
      | referenceNumber | responseCode | responseMessage |
      | context         | 0            | Success         |
      | context         | 0            | Success         |
      | context         | 0            | Success         |





