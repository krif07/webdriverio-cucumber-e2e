Feature: Web Interaction Feature

  @demo1
  Scenario Outline: Web Interactions Input
    Given I open the page "/inputs"
    And   I wait on the element "[type=number]" to be displayed
    When  I set the value "123456" to the element "[type=number]"
    And   I type the value "56789" to the element "[type=number]"

    Examples:
      | testId          |
      | webInteractions |

  @demo
  Scenario: Web Interactions dropdown
    Given I open the page "/dropdown"
    And   I wait on the element "#dropdown" to be displayed
    When  I select the text "Option 2" from dropdown "#dropdown"
    Then  I expect that element "//option[@selected="selected"]" contain the text "Option 2"
    And   I select the value "1" from dropdown "#dropdown"
    And   I expect that element "//option[@selected="selected"]" contain the text "Option 1"
    And   I select the index "2" from dropdown "#dropdown"
    And   I expect that element "//option[@selected="selected"]" contain the text "Option 2"
