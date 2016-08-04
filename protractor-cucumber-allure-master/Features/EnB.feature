#Author: your.email@your.domain.com
Feature: Availity Regression Testing

  Scenario Outline: Eligibility and Benefits Inquiry Testing
    Given I am on the Availity Home Page EnB <Enb>
    When I Choose the Region for EnB <Enb>
    And I Click on Eligibility and Benefits under Patient Registration
    Then I should see Eligibility and Benefits Inquiry Page
    And I Select Payer <Enb>
    And I Enter NPI, Date and Benefit/Service Type <Enb>
    And I Select Patient Search Option
    Then I Enters Patient Details and Select Subscriber <Enb>
    Then I Should see Results page and Verify the Benefits is returned <Enb>