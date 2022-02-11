@TestSet0 @Regression @Web
Feature: Access token generation API

  Scenario: Validating the expiry date field when updating the expiry duration as 7 days for V1.
    Given i set the expiry duration value as 7 and expiry duration type as 1 in database
    And i am clearing the IssuerSystemVariable cache from UI
    When i am generating the token with the old header
    Then the expiry date should be after 7 "days" from today in the V1 Response

  Scenario: Validating the expiry date field when updating the expiry duration as 2 Month for V1.
    Given i set the expiry duration value as 2 and expiry duration type as 2 in database
    And i am clearing the IssuerSystemVariable cache from UI
    When i am generating the token with the old header
    Then the expiry date should be after 2 "months" from today in the V1 Response

  Scenario: Validating the expiry date field when updating the expiry duration as 2 Year for V1.
    Given i set the expiry duration value as 2 and expiry duration type as 3 in database
    And i am clearing the IssuerSystemVariable cache from UI
    When i am generating the token with the old header
    Then the expiry date should be after 2 "years" from today in the V1 Response

  Scenario: Validating the response JSON schema for V1.
    When i am generating the token with the old header
    Then validate the JSON Schema using "accesstoken.json"

#  Scenario: Validating the old token usage on cardCategory API after token regeneration V1.
#
#
#  Scenario: Validating token generated for a corporate and being used with another corporate for V1.
#

  Scenario: Validating the expiry date field when updating the expiry duration as 7 days for V2.
    Given i set the expiry duration value as 7 and expiry duration type as 1 in database
    And i am clearing the IssuerSystemVariable cache from UI
    When i am generating the token with the new header
    Then the expiry date should be after 7 "days" from today in the V2 Response

  Scenario: Validating the expiry date field when updating the expiry duration as 2 Month for V2.
    Given i set the expiry duration value as 2 and expiry duration type as 2 in database
    And i am clearing the IssuerSystemVariable cache from UI
    When i am generating the token with the new header
    Then the expiry date should be after 2 "months" from today in the V2 Response

  Scenario: Validating the expiry date field when updating the expiry duration as 2 Year for V2.
    Given i set the expiry duration value as 2 and expiry duration type as 3 in database
    And i am clearing the IssuerSystemVariable cache from UI
    When i am generating the token with the new header
    Then the expiry date should be after 2 "years" from today in the V2 Response

  Scenario: Validating the response JSON schema for V2.
    When i am generating the token with the new header
    Then validate the JSON Schema using "accesstokenV2.json"

#  Scenario: Validating token generated for a corporate and being used with another corporate for V2.
#
#  Scenario: Validating the old token usage on cardCategory API after token regeneration V2.

#  Scenario: Test
#    Given i test UI