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
  Scenario Outline: Validate the products price
    Given I login into sauce demo page with user "<userName>" and password "<password>"
    And   I wait on the element ".inventory_list" to be displayed
    Then  I expect that element ".inventory_item" contain <numberOfItems> items
    And   I pause 2000
    And   I reload the browser
    And   I login into sauce demo page with user "locked_out_user" and password "<password>"
    And   I pause 2000
    And   I refresh the browser
    And   I login into sauce demo page with user "problem_user" and password "<password>"
    And   I pause 2000
    And   I wait on the element ".inventory_list" to be displayed
    Then  I expect that element ".inventory_item" contain <numberOfItems> items

    Examples:
      | userName       | password     | numberOfItems |
      | standard_user  | secret_sauce | 6             |