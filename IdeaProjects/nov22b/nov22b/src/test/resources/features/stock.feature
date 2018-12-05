@AAPL
Feature: Customer search for stock price

  Scenario Outline: Search and add to cart
    Given I am on the Google search page
    When I search for "<stock>" price
    And I navigate to Google finance link
    And I should be able to read current price and 52 week range
    And I should see the current price displayed is within that range

    Examples: 
      | stock |
      | INTC  |
      | GOOG  |
      | AAPL  |
