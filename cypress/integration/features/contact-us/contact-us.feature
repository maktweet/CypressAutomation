Feature: Contact Us

    User can submit through contact us page

    Scenario: Verify user can submit contact form successfully
    Given I am on Contact Us page
    Then I enter firstname
    And I enter lastname
    And I enter email address
    And I enter comments
    When I click on submit button
    Then I can see that contact us form is successfully submitted


    Scenario: Verify user cannot submit contact form without entering details
    Given I am on Contact Us page
    Then I enter firstname
    And I enter lastname
    And I enter comments
    When I click on submit button
    Then I can see that contact us form is not submitted