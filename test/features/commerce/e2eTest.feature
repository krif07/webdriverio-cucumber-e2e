Feature: E2E Test with API Calls

  @demoAPI
  Scenario Outline: <testId>: API Cals demo
    Given I get a list of users from the API ReqRes.in

    Examples:
    | testId       |
    | APICalls_001 |
