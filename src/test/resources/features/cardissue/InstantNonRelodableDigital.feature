@Regression
Feature: Instant Non Reloadable Digital Card Issuing API V1 & V2

  @DB
  Scenario: Issuing a instant non reloadable card
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
    And i should see the following in the card list in the database
      | ActivationEmail        | afzal.ahmed@pinelabs.com |
      | ActivationMobileNumber | 8284854535               |

  @DB
  Scenario: Issuing a instant non reloadable card
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
    And i should see the following in the card list in the database
      | ActivationEmail        | afzal.ahmed@pinelabs.com |
      | ActivationMobileNumber | 8284854535               |

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


  Scenario: Issuing card with amount more that available account balance.


  Scenario: Validating the net order amount after changing the issuance charges





