package com.opskins.feautomation.pages.opskins;

import org.openqa.selenium.By;

/**
 * Login Page
 *
 * The model of the Opskins login page.
 */
public class LoginPage extends MainMenuPage {

    //--- High level ---

    /**
     * Performs a login flow by filling in all necesary fields and clicking the sign in button.
     * This method requires an account with Two Factor Authentication active.
     * @param user: The username.
     * @param password: The password.
     * @param twoFACode: The 2FA code.
     */
    public void logIn(String user, String password, String twoFACode){
        fillInUsername(user);
        fillInPassword(password);
        clickSignInToOPSkins();
        fillInTFACode(twoFACode);
        clickSignInToOPSkins();
    }

    //--- Low level---

    /**
     * Fills in the Username field.
     * @param user: The new username.
     */
    private void fillInUsername(String user){
        waitForElement(By.id("username"), "Username field")
                .sendKeys(user);
    }

    /**
     * Fills in the Password field.
     * @param password: The new password.
     */
    private void fillInPassword(String password){
        waitForElement(By.id("password"), "Password field")
                .sendKeys(password);
    }

    /**
     * Fills in the Two Factor Authentication code field.
     * @param code: The new code.
     */
    private void fillInTFACode(String code){
        waitForElement(By.id("twofactor_code"), "2FA field")
                .sendKeys(code);
    }

    /**
     * Clicks the "Sign in to Opskins button.
     */
    private void clickSignInToOPSkins(){
        waitForElement(By.xpath("//*[@id=\"login-buttons\"]/div[1]/button"), "Sign in button")
                .click();
    }

}
