@Regression
Feature: Updating the Card status by admin

  Scenario: Updating the card status to inactive
    Given i am an authorized corporate user
    When i am changing the status with the following details:
      | referenceNumber | 8978696263 |
      | cardStatus      | 2          |
      | reason          | 1          |
      | remarks         | Test       |
    Then the status code should be 200
    And i should see the following in the header level
      | remarks         | Test    |
      | responseCode    | 0       |
      | responseMessage | Success |
    And i should see the following in the "cardStatusUpdateResponseList"
      | referenceNumber | responseCode | responseMessage |
      | 8978696263      | 0            | Success         |

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


