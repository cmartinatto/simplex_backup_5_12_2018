Feature: I want to log in to Opskins

  Scenario Outline: Attempt to log in to Opskins
    Given I am on the Opskins page
    When I log in as "<username>" with the password: "<password>"
    Then I should see my name on the main menu bar "<username_shown_in_dashboard>"

    Examples:
      | username | password | username_shown_in_dashboard |
      | cam      | ABcd1234 | carlos.martinatto           |
      | cam2     | ABcd1234 | cam2                        |