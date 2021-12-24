@Regression
Feature: Card Details API

  @DB
#  Scenario: Validating the response of the card card detail API with the database
#    Given i am an authorized corporate user
#    When i get the card detail using "old" holder with V1 API for the following card
#      | Reference Number | 1383737387 |
#    Then the status code should be 200
#    And i should see the following in the header level
#      | responseCode    | 0       |
#      | responseMessage | Success |
#    And the values in the card detail list response for the card "1383737387" should match the DB values
#      | API Key Name | Database column name |
#      | referenceNumber             |                      |
#      | cardStatus                  |                      |
#      | cardSchemeId                |                      |
#      | pinMode                     |                      |
#      | cardVariant                 |                      |
#      | issuedOn                    |                      |
#      | expiryDate                  |                      |
#      | isEcommTransactionEnabled   |                      |
#      | ecommRedeemTransactionLimit |                      |
#      | posRedeemTransactionLimit   |                      |
#      | mobileNumber                |                      |
#      | email                       |                      |
#      | responseCode                |                      |
#      | responseMessage             |                      |

  Scenario: Issuing a non reloadable card and validation data with the card detail API response

    Given i am an authorized corporate user
    When i am issuing an Instant Non Reloadable Digital Card using "old" header with V1 of API
      | cardSchemeId           | 7                        |
      | isLinkToBeSentOnMobile | true                     |
      | customerName           | afzal                    |
      | mobileNumber           | 8284854535               |
      | email                  | afzal.ahmed@pinelabs.com |
      | amount                 | 1000                     |
    When i get the card detail using "old" header with V1 API for the following card
      | Reference Number | context |
    Then the status code should be 200
    And i should see the following in the header level
      | responseCode    | 0       |
      | responseMessage | Success |
    And i should see the following in the "cardDetailResponseList"
      | customerMobile | activationEmail          | cardSchemeId | activationName |
      | 8284854535     | afzal.ahmed@pinelabs.com | 7            | afzal          |


  Scenario:Changing of scheme of issued card and validating the data in the API response

    Given i am an authorized corporate user
    When i am issuing an Instant Non Reloadable Digital Card using "old" header with V1 of API
      | cardSchemeId           | 7                        |
      | isLinkToBeSentOnMobile | true                     |
      | customerName           | afzal                    |
      | mobileNumber           | 8284854535               |
      | email                  | afzal.ahmed@pinelabs.com |
      | amount                 | 1000                     |
    When i am changing the status with the following details:
      | referenceNumber | context |
      | cardStatus      | 2       |
      | reason          | 1       |
      | remarks         | Test    |
    And i get the card detail using "old" header with V1 API for the previously issued card
      | Reference Number | context |
    Then the status code should be 200
    And i should see the following in the header level
      | responseCode    | 0       |
      | responseMessage | Success |
    And i should see the following in the "cardDetailResponseList"
      | cardStatus |
      | 2          |





