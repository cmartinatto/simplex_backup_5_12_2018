package com.google.finance.pages;

import net.serenitybdd.core.pages.WebElementFacade;
import org.openqa.selenium.support.FindBy;

public class SearchResultPage extends SearchPage {

	@FindBy(xpath = "//a[text()='Finance']")
	public WebElementFacade lnk_finance;

}
