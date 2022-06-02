Feature: Demo Feature

  Scenario Outline: Run first demo feature
    Given Google page is open
    When  Search with <searchItem>
    And   Click on the first search result
    Then  Url should match <expectedUrl>

    Examples:
      | testId | searchItem | expectedUrl           |
      | demo1  | wdio       | https://webdriver.io/ |
