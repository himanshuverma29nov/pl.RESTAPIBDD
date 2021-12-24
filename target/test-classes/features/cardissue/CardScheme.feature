#Feature: Validating Card Schemes API
#
#  Scenario: Validating card Scheme Values from DB
#    Given i am an authorized corporate user
#    When i get the card scheme from API using the "old" header using V1 API
#    Then the status code should be 200
#    Then response header of scheme API should have following as in the DB
#      | relodableMinimumKYCCardMaximumAllowedBalance | 1200000  |
#      | relodableFullKYCCardMaximumAllowedBalance    | 20000000 |
#      | nonReloadableCardMaximumAllowedBalance       | 1000000  |
#    Then scheme

