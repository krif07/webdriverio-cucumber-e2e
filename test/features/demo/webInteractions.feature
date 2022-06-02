Feature: Web Interaction Feature

  @demo
  Scenario Outline: Web Interactions
    Given I open the page "/inputs"
    And   I wait on the element "[type=number]" to be displayed
    When  I set the value "123456" to the element "[type=number]"
    And   I type the value "56789" to the element "[type=number]"

    Examples:
      | testId          |
      | webInteractions |
