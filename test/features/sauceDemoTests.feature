Feature: Sauce Demo Tests

  @sauceDemo
  Scenario Outline: Validate the products price
    Given I login into sauce demo page with user "<userName>" and password "<password>"
    And   I wait on the element ".inventory_list" to be displayed

    Examples:
      | userName      | password     |
      | standard_user | secret_sauce |
