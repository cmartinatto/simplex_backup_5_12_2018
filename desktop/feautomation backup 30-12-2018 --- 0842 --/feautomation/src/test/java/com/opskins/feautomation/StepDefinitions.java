package com.opskins.feautomation;

import com.opskins.feautomation.pages.BasePage;
import com.opskins.feautomation.pages.opskins.DashboardPage;
import com.opskins.feautomation.pages.opskins.LoginPage;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;


public class StepDefinitions {

    private DashboardPage dashboardPage = new DashboardPage();
    private LoginPage loginPage = new LoginPage();

    @Before
    public void openBrowser(){
        BasePage.generateNewDriver();
    }

    @After
    public void closeBrowser() {
        BasePage.quitWebDriver();
    }

    @Given("^I am on the Opskins page$")
    public void I_visit_opskins(){
        dashboardPage.goTo();
    }

    @When("^I log in as \"(.*)\" with the password: \"(.*)\"$")
    public void log_in(String username, String password) {
        dashboardPage.clickSignInRegister();
        loginPage.logIn(username, password, "123456");
    }

    @Then("^I should see my name on the main menu bar \"(.*)\"$")
    public void confirm_user_is_logged_in(String usernameShown) {
        dashboardPage.confirmUserNameShown(usernameShown);
    }
}

