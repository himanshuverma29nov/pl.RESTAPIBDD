@Regression @Ready
Feature: Card Categories API

  Scenario: Validate the Card Categories API Response for V1
    Given i am an authorized corporate user
    When i get the card category details with "old" header using V1 API
    Then the status code should be 200
    And i should see the following in the header level
      | responseCode    | 0       |
      | responseMessage | Success |
    And i should see the following in the "cardCategoryList"
      | id | name           |
      | 1  | Prime Card     |
      | 2  | Fuel Card      |
      | 3  | F&B Card       |
      | 4  | Universal Card |

  Scenario: Validate the Card Categories API Response for V2
    Given i am an authorized corporate user
    When i get the card category details with "new" header using V2 API
    Then the status code should be 200
    And i should see the following in the header level
      | responseCode    | 0       |
      | responseMessage | Success |
    And i should see the following in the "cardCategoryList"
      | cardCategoryId | cardCategoryName |
      | 1              | Prime Card       |
      | 2              | Fuel Card        |
      | 3              | F&B Card         |
      | 4              | Universal Card   |

  Scenario: Validate the response JSON schema for V1
    Given i am an authorized corporate user
    When i get the card category details with "old" header using V1 API
    Then validate the JSON Schema using "CardCategory.json"

  Scenario: Validate the response JSON schema for V2
    Given i am an authorized corporate user
    When i get the card category details with "old" header using V1 API
    Then validate the JSON Schema using "CardCategoryV2.json"

#Scenario: Validating the card categories for the one of the issuer 3 corporate


