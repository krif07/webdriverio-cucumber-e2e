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

  @demo8
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

  @demo9
  Scenario: Web Interactions Key press
    Given I open the page "/iframe"
    And   I wait on the element "#mce_0_ifr" to be displayed
    When  I go to the iframe "#mce_0_ifr"
    And   I click on the element "#tinymce p"
    #And   I use two key values "Meta" "A"
    And   I use two key values "Control" "A"
    And   I use the key value "Delete"
    And   I set the value "Other value to test" to the element "#tinymce p"
    Then  I expect that element "#tinymce p" contain the text "Other value to test"

  @demo10
  Scenario: Web Interactions Key press
    Given I open the page "/"
    And   I wait on the element "=WYSIWYG Editor" to be displayed
    When  I scroll into the element "=WYSIWYG Editor" to the top false

  @demo11
  Scenario: Web Interactions Table
    Given I open the page "/tables"
    And   I wait on the element "#table1 tr" to be displayed
    Then  I expect that element "//table[@id='table1']/tbody/tr" contain 4 items
    And   I expect that element "//table[@id='table1']/thead/tr/th" contain 6 items
    And   I expect that elements "//table[@id='table1']/tbody/tr/td[4]" contain value greater than 49
    And   I expect each value for the column 4 of the table "//table[@id='table1']" is greater than 49
    And   I expect that the sum column 4 of the table "//table[@id='table1']" is 251
    And   I expect that table "//table[@id='table1']" contains "Jason" in the column name "First Name"
    And   I expect that table "//table[@id='table1']" contains "Jason" in the column name "First Name"
    And   I expect that table "//table[@id='table1']" contains "tconway@earthlink.net" in the column name "Email"
    And   I expect that table "//table[@id='table2']" contains "Conway" in the column name "Last Name"
    And   I expect that table "//table[@id='table2']" contains "$50.00" in the column name "Due"
    And   I expect that table "//table[@id='table1']" contains last name "Bach" first name "Frank" email "fbach@yahoo.com" due "$51.00" and web "http://www.frank.com" search by column "Last Name"
    And   I expect that table "//table[@id='table2']" contains last name "Doe" first name "Jason" email "jdoe@hotmail.com" due "$100.00" and web "http://www.jdoe.com" search by column "Web Site"

  @demo12
  Scenario: Web Interactions Scroll
    Given I open the page "/"
    When  I scroll down the visible page
    And   I pause 2000
    And   I scroll up the visible page
    And   I pause 2000
    And   I scroll down the page
    And   I pause 2000
    And   I scroll up the page
    And   I pause 2000

  @demo13
  Scenario: Web Interactions Waits
    Given I open the page "/"
    And   I wait until the browser title "The Internet" get changed
    When  I scroll down the visible page
    And   I pause 2000
    And   I scroll up the visible page
    And   I pause 2000