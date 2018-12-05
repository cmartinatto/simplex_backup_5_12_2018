package com.opskins.feautomation;

import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import org.apache.commons.lang3.SystemUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.WebDriverWait;

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





    @Given("^I am on the Google search page$")
    public void I_visit_google() throws Exception{
        driver = WebDriverFactory.getDriver();
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
}

class WebDriverFactory {

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