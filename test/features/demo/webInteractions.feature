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

  @demo2
  Scenario: Web Interactions Dropdown
    Given I open the page "/dropdown"
    And   I wait on the element "#dropdown" to be displayed
    When  I select the text "Option 2" from dropdown "#dropdown"
    Then  I expect that element "//option[@selected="selected"]" contain the text "Option 2"
    And   I select the value "1" from dropdown "#dropdown"
    And   I expect that element "//option[@selected="selected"]" contain the text "Option 1"
    And   I select the index "2" from dropdown "#dropdown"
    And   I expect that element "//option[@selected="selected"]" contain the text "Option 2"

  @demo
  Scenario: Web Interactions Checkbox
    Given I open the page "/checkboxes"
    And   I wait on the element "#checkboxes" to be displayed
    When  I check the checkbox "//form[@id='checkboxes']/input[1]"
    And   I check the checkbox "//form[@id='checkboxes']/input[2]"
    And   I check the checkbox "//form[@id='checkboxes']/input[1]"
    And   I check the checkbox "//form[@id='checkboxes']/input[2]"
    Then  I expect that checkbox "//form[@id='checkboxes']/input[1]" is checked
    And   I expect that checkbox "//form[@id='checkboxes']/input[2]" is checked
    When  I uncheck the checkbox "//form[@id='checkboxes']/input[1]"
    And   I uncheck the checkbox "//form[@id='checkboxes']/input[2]"
    And   I uncheck the checkbox "//form[@id='checkboxes']/input[1]"
    And   I uncheck the checkbox "//form[@id='checkboxes']/input[2]"
    And   I expect that checkbox "//form[@id='checkboxes']/input[1]" is unchecked
    And   I expect that checkbox "//form[@id='checkboxes']/input[2]" is unchecked
