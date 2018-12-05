package nov22b.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class FinancePage extends SearchPage {

	@FindBy(xpath = "//td[text()='52-wk high']/following-sibling::td")
	public WebElement lbl_52week_high;

	@FindBy(xpath = "//td[text()='52-wk low']/following-sibling::td")
	public WebElement lbl_52week_low;

	@FindBy(xpath = "//span[contains(text(),'USD')]/preceding-sibling::span")
	public WebElement lbl_current_price;

}
