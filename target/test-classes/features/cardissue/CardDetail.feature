@Regression
Feature: Card Details API V1&V2

  @DB
  Scenario: Validating the response of the card card detail API with the database
    Given i am an authorized corporate user
    When i am issuing an Instant Non Reloadable Digital Card using "old" header with V1 of API
      | cardSchemeId           | 7                        |
      | isLinkToBeSentOnMobile | true                     |
      | customerName           | afzal                    |
      | mobileNumber           | 8284854535               |
      | email                  | afzal.ahmed@pinelabs.com |
      | amount                 | 1000                     |
    When i get the card detail using "old" header with V1 API for the previously issued card
      | Reference Number | context |
    Then the status code should be 200
    And i should see the following in the header level
      | responseCode    | 0       |
      | responseMessage | Success |
    And i should see the following in the "cardDetailResponseList"
      | customerMobile | activationEmail          | cardSchemeId | activationName |
      | 8284854535     | afzal.ahmed@pinelabs.com | 7            | afzal          |
    And the values in the "cardDetailResponseList" response for the card issued card should match the data in the card table
      | cardReferenceNumber         | ReferenceNumber            |
      | maskedCardNumber            | MaskedCardNumber           |
      | cardStatus                  | CardStatus                 |
      | cardSchemeId                | CardSchemeId               |
      | pinMode                     | AutoPINMode                |
      | cardVariant                 | CardType                   |
      | issuedOn                    | OriginalIssuanceDate       |
      | expiryDate                  | ExpiryDate                 |
      | isEcommTransactionEnabled   | IsEcommTransactionEnabled  |
      | ecommRedeemTransactionLimit | EcomRedeemTransactionLimit |
      | posRedeemTransactionLimit   | POSRedeemTransactionLimit  |
      | activationMobileNumber      | ActivationMobileNumber     |
      | activationEmail             | ActivationEmail            |


  Scenario Outline: Validating the pin mode value on the response on issuing different PIN on SMS/ Physical PIN Mailer/ Customer generated PIN/ PIN Less pin mode card.
    Given i am an authorized corporate user
    And i fetching an physical dummy card from database
    When i am issuing an instant physical non reloadable card with following detail
      | cardSchemeId     | 7          |
      | pinMode          | <pinMode>  |
      | cardIdentifier   | 1          |
      | orderDescription | Test       |
      | referenceNumber  | dataBase   |
      | serialNumber     | null       |
      | customerName     | APITestOne |
      | mobileNumber     | 8284854535 |
      | email            | null       |
      | amount           | 1000       |
    When i get the card detail using "old" header with V1 API for the previously issued card
      | Reference Number | context |
    Then the status code should be 200
    And i should see the following in the header level
      | responseCode    | 0       |
      | responseMessage | Success |
    And i should see the following in the "cardDetailResponseList"
      | pinMode           |
      | <expectedPinMode> |
    Examples:
      | pinMode | expectedPinMode |
      | 1       | 1               |
      | 2       | 2               |
      | 3       | 3               |
      | 4       | 4               |


# Validating card variant field with different card variants.

  Scenario: Validating the card variant field on issuing an Non Reloadable Physical Card
    Given i am an authorized corporate user
    And i fetching an physical dummy card from database
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
    When i get the card detail using "old" header with V1 API for the previously issued card
      | Reference Number | context |
    Then the status code should be 200
    And i should see the following in the header level
      | responseCode    | 0       |
      | responseMessage | Success |
    And i should see the following in the "cardDetailResponseList"
      | cardVariant |
      | 1           |

  Scenario: Validating the card variant field on issuing an Non Reloadable Digital Card
    Given i am an authorized corporate user
    When i am issuing an Instant Non Reloadable Digital Card using "old" header with V1 of API
      | cardSchemeId           | 7                        |
      | isLinkToBeSentOnMobile | true                     |
      | customerName           | afzal                    |
      | mobileNumber           | 8284854535               |
      | email                  | afzal.ahmed@pinelabs.com |
      | amount                 | 1000                     |
    When i get the card detail using "old" header with V1 API for the previously issued card
      | Reference Number | context |
    Then the status code should be 200
    And i should see the following in the header level
      | responseCode    | 0       |
      | responseMessage | Success |
    And i should see the following in the "cardDetailResponseList"
      | cardVariant |
      | 2           |

# Validating the balance amount on reloading a card.

  Scenario: Validating a balance field of card on issuing and reloading a card.
    Given i am an authorized corporate user
    Given i fetch the mobile number from properties
    And de link from all the previously issued card
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
      | amount          | 200     |
    When i get the card detail using "old" header with V1 API for the previously issued card
      | Reference Number | context |
    Then the status code should be 200
    And i should see the following in the "cardDetailResponseList"
      | balance | loadAmount |
      | 1200    | 1200       |

#  Scenario: Validating  card status the blocked on field on blocking the card.

  # Validating the card status terminatedOn , terminated by and reason field on terminating a card.

 # Validating the reissued on,reissued by,reissued by card reference number and reissue charges field on reissuing an card.






