package com.google.finance.stepDefinition;

import com.google.finance.pages.FinancePage;
import com.google.finance.pages.SearchResultPage;
import com.google.finance.steps.UserSteps;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import net.serenitybdd.core.Serenity;
import net.thucydides.core.annotations.Steps;
import org.junit.Assert;

import java.util.function.Predicate;

public class StepDefinition {
	@Steps
    UserSteps endUser;

	FinancePage financePage;
	SearchResultPage searchResultPage;

	@Given("^I am on the Google search page$")
	public void i_am_on_the_Google_search_page() {
		endUser.open_google_page();
	}

	@When("^I search for \"([^\"]*)\" price$")
	public void i_search_for_price(String stockName) {
		Serenity.setSessionVariable("stockName").to(stockName);
		endUser.search_for_stock_name(stockName);
	}

	@When("^I navigate to Google finance link$")
	public void i_navigate_to_Google_finance_link() {
		searchResultPage.lnk_finance.click();
	}

	@Then("^I should be able to read current price and (\\d+) week range$")
	public void i_should_be_able_to_read_current_price_and_week_range(int noOfWeek) {
		Serenity.setSessionVariable("current_price").to(financePage.lbl_current_price.getText().replaceAll(",", ""));
		Serenity.setSessionVariable("week_high").to(financePage.lbl_52week_high.getText().replaceAll(",", ""));
		Serenity.setSessionVariable("week_low").to(financePage.lbl_52week_low.getText().replaceAll(",", ""));

	}

	@Then("^I should see the current price displayed is within that range$")
	public void i_should_see_the_current_price_displayed_is_within_that_range() {

		// calling session variable @runtime
		String current_price = Serenity.sessionVariableCalled("current_price");
		String week_high = Serenity.sessionVariableCalled("week_high");
		String week_low = Serenity.sessionVariableCalled("week_low");

		// predicate condition
		Predicate<Float> p = i -> i > Float.parseFloat(week_low) && i < Float.parseFloat(week_high);

		// assertion
		Assert.assertTrue("Current price displayed is not within 52 week range.",
				p.test(Float.parseFloat(current_price)));

	}

}
