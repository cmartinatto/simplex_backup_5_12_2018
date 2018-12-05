package com.opskins.feautomation.pages;

import com.opskins.feautomation.tools.WebDriverFactory;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.NoSuchElementException;

/**
 * Base Page
 *
 * The base model of a web page where common actions to every page are implemented.
 */
public class BasePage {

    private static final int STANDARD_TIMEOUT = 30;
    protected static WebDriver driver;

    /**
     * Assigns a new driver to the driver class object.
     */
    public static void generateNewDriver(){
        driver = WebDriverFactory.getDriver();
    }

    /**
     * Closes all instances of the current browser.
     */
    public static void quitWebDriver(){
        driver.quit();
    }

    /**
     * Waits for an element using the criterion specified. If found, the element is returned.
     * @param criterion: (By) A Selenium By object to indicate how to locate the element.
     * @param userFriendlyName: (String) The name of the element which will be shown in the error report.
     * @return: (WebElement) The element found.
     */
    protected WebElement waitForElement(By criterion, String userFriendlyName){
        try{
            (new WebDriverWait(driver, STANDARD_TIMEOUT)).until(ExpectedConditions.elementToBeClickable(criterion));
            return driver.findElement(criterion);
        }catch(Exception e){
            throw new NoSuchElementException("Element \"" + userFriendlyName +
                    "\" not found after " + STANDARD_TIMEOUT +
                    " seconds, in page \""
                    + Thread.currentThread().getStackTrace()[2].getClassName() + "\"");
        }
    }

    /**
     * [DEBUG] Highlights an element with a red border.
     * @param element: (WebElement) The element to be highlighted.
     */
    protected void highlightElement(WebElement element){
        if (driver instanceof JavascriptExecutor) {
            ((JavascriptExecutor)driver).executeScript("arguments[0].style.border='3px solid red'", element);
        }
    }
}
