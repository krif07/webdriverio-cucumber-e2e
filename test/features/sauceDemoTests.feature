@sauceDemo
Feature: Sauce Demo Tests

  @sauceDemo1
  Scenario Outline: <testId>: Validate the products price
    Given I login into sauce demo page with user "<userName>" and password "<password>"
    And   I wait on the element ".inventory_list" to be displayed
    Then  I expect that element ".inventory_item" contain <numberOfItems> items
    And   I expect that elements ".inventory_item_price" contain value greater than 0

    Examples:
      | testId       | userName       | password     | numberOfItems |
      | sauceDemo001 | standard_user  | secret_sauce | 6             |
      #| problem_user   | secret_sauce | 6             |

  @sauceDemo2
  Scenario Outline: <testId>: Validate different login sessions in the same try
    Given I login into sauce demo page with user "<userName>" and password "<password>"
    And   I wait on the element ".inventory_list" to be displayed
    Then  I expect that element ".inventory_item" contain <numberOfItems> items
    And   I reload the browser
    And   I login into sauce demo page with user "locked_out_user" and password "<password>"
    And   I expect that element ".error-message-container h3" contain the text "Epic sadface: Sorry, this user has been locked out."
    And   I refresh the browser
    And   I login into sauce demo page with user "problem_user" and password "<password>"
    And   I wait on the element ".inventory_list" to be displayed
    And   I expect that element ".inventory_item" contain <numberOfItems> items
    And   I click on the element "#item_4_title_link"
    And   I expect that element ".inventory_details_name.large_size" contain the text "Sauce Labs Fleece Jacket"
    And   I go back page
    And   I expect that element "#item_4_title_link div.inventory_item_name" contain the text "Sauce Labs Backpack"

    Examples:
      | testId       | userName       | password     | numberOfItems |
      | sauceDemo002 | standard_user  | secret_sauce | 6             |

  @sauceDemo3
  Scenario: sauceDemo003: Validate different login sessions in the same try
    Given I check the sauce demo login page with different users
      | userName         | password     |
      | standard_user    | secret_sauce |
      | problem_user     | secret_sauce |
      | locked_out_user  | secret_sauce |
    # fail step to get the screen shot in after step hook function
    #Then I expect that element ".inventory_details_name.large_size" contain the text "Sauce Labs Fleece Jacket"

  @sauceDemo4
  Scenario Outline: <testId>: Validate different login sessions in the same try
    Given I login into sauce demo page with user "<userName>" and password "<password>"
    When  I wait on the element ".inventory_list" to be displayed
    Then  I expect that element ".inventory_item" contain 7 items

    Examples:
      | testId       | userName       | password     |
      | sauceDemo003 | standard_user  | secret_sauce |
      | sauceDemo004 | standard_user  | secret_sauce |
      | sauceDemo005 | standard_user  | secret_sauce |
