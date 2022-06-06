Feature: Sauce Demo Tests

  @sauceDemo
  Scenario Outline: Validate the products price
    Given I login into sauce demo page with user "<userName>" and password "<password>"
    And   I wait on the element ".inventory_list" to be displayed
    Then  I expect that element ".inventory_item" contain <numberOfItems> items
    And   I expect that elements ".inventory_item_price" contain value greater than 0

    Examples:
      | userName       | password     | numberOfItems |
      | standard_user  | secret_sauce | 6             |
      #| problem_user   | secret_sauce | 6             |

  @demo
  Scenario Outline: Validate different login sessions in the same try
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
      | userName       | password     | numberOfItems |
      | standard_user  | secret_sauce | 6             |