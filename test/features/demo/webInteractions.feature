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

  @demo3
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

  @demo4
  Scenario: Web Interactions Checkboxes
    Given I open the page "/checkboxes"
    And   I wait on the element "#checkboxes" to be displayed
    When  I check all the checkboxes "//form[@id='checkboxes']/input"
    Then  I expect that checkbox "//form[@id='checkboxes']/input[1]" is checked
    And   I expect that checkbox "//form[@id='checkboxes']/input[2]" is checked
    And   I uncheck all the checkboxes "//form[@id='checkboxes']/input"
    And   I expect that checkbox "//form[@id='checkboxes']/input[1]" is unchecked
    And   I expect that checkbox "//form[@id='checkboxes']/input[2]" is unchecked

  @demo5
  Scenario: Web Interactions Windows
    Given I open the page "/windows"
    And   I wait on the element "div.example a" to be displayed
    When  I click on the element "div.example a"
    Then  I expect that the page title is "The Internet"
    And   I switch the window to "New Window"
    And   I wait on the element "body > div.example h3" to be displayed
    And   I expect that the page title is "New Window"
    And   I expect that element "body > div.example h3" contain the text "New Window"
    And   I switch the window to "The Internet"
    And   I click on the element "=Elemental Selenium"
    And   I switch the window to "Elemental Selenium: Receive a Free, Weekly Tip on Using Selenium like a Pro"
    And   I wait on the element "h2.subheader" to be displayed
    And   I expect that the page title is "Elemental Selenium: Receive a Free, Weekly Tip on Using Selenium like a Pro"
    And   I expect that element "h2.subheader" contain the text "A free, once-weekly e-mail on how to use Selenium like a Pro"

  @demo6
  Scenario: Web Interactions javascript alerts
    Given I open the page "/javascript_alerts"
    And   I wait on the element "div.example h3" to be displayed
    When  I click on the element "//button[.='Click for JS Alert']"
    Then  I expect that alert is open
    And   I expect that alert text is "I am a JS Alert"
    And   I accept the alert message
    And   I expect that element "#result" contain the text "You successfully clicked an alert"
    And   I click on the element "//button[.='Click for JS Confirm']"
    And   I expect that alert is open
    And   I expect that alert text is "I am a JS Confirm"
    And   I accept the alert message
    And   I expect that element "#result" contain the text "You clicked: Ok"
    And   I click on the element "//button[.='Click for JS Confirm']"
    And   I expect that alert is open
    And   I expect that alert text is "I am a JS Confirm"
    And   I cancel the alert message
    And   I expect that element "#result" contain the text "You clicked: Cancel"
    And   I click on the element "//button[.='Click for JS Prompt']"
    And   I expect that alert is open
    And   I expect that alert text is "I am a JS prompt"
    And   I enter the text "algo" to the alert
    And   I accept the alert message
    And   I expect that element "#result" contain the text "You entered: algo"

  @demo7
  Scenario: Web Interactions upload files
    Given I open the page "/upload"
    And   I wait on the element "#file-submit" to be displayed
    And   I upload a file "dummyFile.txt"
    Then  I expect that element "h3" contain the text "File Uploaded!"

  @demo
  Scenario: Web Interactions iframe
    Given I open the page "/frames"
    And   I wait on the element "=iFrame" to be displayed
    And   I click on the element "=iFrame"
    And   I wait on the element "#mce_0_ifr" to be displayed
    When  I go to the iframe "#mce_0_ifr"
    And   I set the value "algun valor para testear" to the element "#tinymce p"
    Then  I expect that element "#tinymce p" contain the text "algun valor para testear"
    And   I go to the parent frame
    And   I expect that element "<h3>" contain the text "An iFrame containing the TinyMCE WYSIWYG Editor"

