package com.opskins.feautomation.pages.opskins;

import org.openqa.selenium.By;

import static org.junit.Assert.*;

/**
 * Dashboard Page
 *
 * The model of the main Opskins page, usually accessible by clicking the Opskins logo on the upper left corner.
 */
public class DashboardPage extends MainMenuPage {

    public void goTo(){
        driver.get("https://ijust:didntsleep@onetruestage.com/");
        driver.manage().window().maximize();
    }

    public void confirmUserNameShown(String username){
        String textFound = waitForElement(By.xpath("/html/body/div[2]/nav/div[3]/div[1]/div[2]/div[1]/ul/li/a/h2"), "Login name element")
                .getText();
        assertEquals(textFound.toLowerCase(), username.toLowerCase());
    }
}
