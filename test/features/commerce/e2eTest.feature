Feature: E2E Test with API Calls

  @demoAPI
  Scenario Outline: <testId>: API Cals demo
    Given I save a user with name "<name>" and job "<job>" in the API ReqRes.in
    Then  I expect the user with name "<name>" and job "<job>" was saved in the API ReqRes.in
    When  I get a list of users from the API ReqRes.in
    #And   I expect the user with name "<name>" and job "<job>" exist in Get API ReqRes.in

    Examples:
    | testId       | name            | job                                   |
    #| APICalls_001 | Michael Lawson  | Software Development Engineer in Test |
    | APICalls_002 | Cristian Davila | Software Development Engineer in Test |
