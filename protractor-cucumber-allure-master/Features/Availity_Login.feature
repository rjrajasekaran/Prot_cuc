Feature: Availity Login

    @Availity Login
    Scenario: Availity Login
	
	Given I am on Availity Portal Login Page
	When I type Username "raja001"
	And I type PassWord "Refresh37@"
	Then I click submit
	Then I close Pop-up
	Given I am on Availity Portal Home Page	
	When I choose the region
	And I Click on Claim Status Inquiry under Claims
	Then I should see Claim Status Inquiry Page
	And I Select Payer and Organization
	And I Enter NPI, Subscriber ID, Last Name and First Name
	And I Enter Patient DOB
	And I Enter the Claim Information Date From
	And I Enter the Claim Information Date To
	And I Click on Submit
	And I Verity Claim Status Inquiry Results
	And I Click on From-To Date of Service Hyper link
	#Then I verify Claim Status Detail Inside Claims Status Details Page