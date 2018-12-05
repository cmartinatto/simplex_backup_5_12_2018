package nov22b;

import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import net.serenitybdd.core.Serenity;
import net.thucydides.core.annotations.Steps;
import net.thucydides.core.webdriver.WebDriverFactory;
import nov22b.pages.FinancePage;
import nov22b.pages.SearchResultPage;
import nov22b.steps.UserSteps;
import org.apache.commons.lang3.SystemUtils;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.function.Predicate;

import static org.junit.Assert.*;

class DayInformer {
    static String isIt(String dayToAskAbout, String today) {
        if(today.equals(dayToAskAbout)){
            return "Yes!";
        }else{
            return "No!";
        }

    }
}

public class Stepdefs {
    private String today;
    private String actualAnswer;
    private WebDriver driver;

    @Given("^today is \"([^\"]*)\"$")
    public void today_is_(String day) {
        this.today = day;
    }

    @When("^I ask whether it's Friday yet$")
    public void i_ask_whether_is_s_Friday_yet() {
        this.actualAnswer = DayInformer.isIt("Friday", today);
    }

    @When("^I ask whether it's Saturday yet$")
    public void i_ask_whether_is_s_Saturday_yet() {
        this.actualAnswer = DayInformer.isIt("Saturday", today);
    }

    @Then("^I should be told \"([^\"]*)\"$")
    public void i_should_be_told(String expectedAnswer) {
        assertEquals(expectedAnswer, actualAnswer);
    }





    @Given("^I am on the Google search page2$")
    public void I_visit_google() throws Exception{
        driver = WebDriverFactory2.getDriver();
        driver.get("https:\\www.google.com");
        driver.manage().window().maximize();
    }

    @When("^I search for \"(.*)\"$")
    public void search_for(String query) {
        WebElement element = driver.findElement(By.name("q"));
        // Enter something to search for
        element.sendKeys(query);
        // Now submit the form. WebDriver will find the form for us from the element
        element.submit();
    }

    @Then("^the page title should start with \"(.*)\"$")
    public void checkTitle(String titleStartsWith) {
        // Google's search is rendered dynamically with JavaScript
        // Wait for the page to load timeout after ten seconds
        new WebDriverWait(driver,10L).until(new ExpectedCondition<Boolean>() {
            public Boolean apply(WebDriver d) {
                return d.getTitle().toLowerCase().startsWith("cheese");
                // Should see: "cheese! -Google Search"
            }
        });
    }

    @After()
    public void closeBrowser() {
        driver.quit();
    }


    //--------------------------------------
/*
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
    */
}

class WebDriverFactory2 {

    /**
     * Put the desired driver into the proper system path, so that Fluentlenium can link to the browser.
     * @throws Exception
     */
    public static void setChromeDriver() throws Exception {
        String WINDOWS_PATH = "chromedriver_win32/chromedriver.exe";
        String LINUX_PATH = "chromedriver_linux64/chromedriver";

        if (SystemUtils.IS_OS_WINDOWS) {
            System.setProperty("webdriver.chrome.driver",
                    WebDriverFactory.class.getClassLoader().getResource(WINDOWS_PATH).getPath());
        } else if (SystemUtils.IS_OS_LINUX) {
            System.setProperty("webdriver.chrome.driver",
                    WebDriverFactory.class.getClassLoader().getResource(LINUX_PATH).getPath());
        } else {
            throw new Exception("OS not supported");
        }
    }

    public static WebDriver getDriver() throws Exception{
        setChromeDriver();
        return new ChromeDriver();
    }
}