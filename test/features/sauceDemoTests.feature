Feature: Sauce Demo Tests

  @sauceDemo
  Scenario Outline: Validate the products price
    Given I login into sauce demo page with user "<userName>" and password "<password>"
    And   I wait on the element ".inventory_list" to be displayed
    Then  I expect that element ".inventory_item" contain <numberOfItems> items


    Examples:
      | userName       | password     | numberOfItems |
      | standard_user  | secret_sauce | 6             |
      | problem_user   | secret_sauce | 6             |
