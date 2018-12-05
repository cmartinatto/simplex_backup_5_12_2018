package com.opskins.feautomation.tools;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class WebDriverFactory {

    /**
     * Put the desired driver into the proper system path, so that Selenium can link to the browser.
     */
    private static void setChromeDriver()  {
        String LINUX_PATH = "chromedriver_linux64/chromedriver";
        System.setProperty("webdriver.chrome.driver",
        WebDriverFactory.class.getClassLoader().getResource(LINUX_PATH).getPath());
    }

    /**
     * Creates a new instance of the Chrome web driver.
     * @return: (WebDriver) A WebDriver object.
     */
    public static WebDriver getDriver() {
        setChromeDriver();
        return new ChromeDriver();
    }
}