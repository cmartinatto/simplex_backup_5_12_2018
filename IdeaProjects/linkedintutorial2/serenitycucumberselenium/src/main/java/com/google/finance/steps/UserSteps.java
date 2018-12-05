package com.google.finance.steps;

import com.google.finance.pages.FinancePage;
import com.google.finance.pages.SearchPage;
import net.thucydides.core.annotations.Step;

public class UserSteps {

	SearchPage googleSearchPage;
	FinancePage financePage;

	@Step
	public void open_google_page() {
		googleSearchPage.openSearchPage();
	}

	@Step
	public void search_for_stock_name(String stockName) {
		googleSearchPage.searchOnPage(stockName);
	}

}
