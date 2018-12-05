package com.opskins.feautomation.pages.opskins;

import com.opskins.feautomation.pages.BasePage;
import org.openqa.selenium.By;

/**
 * Main Menu Page
 *
 * The model of the main menu of the Opskins site, located on the upper end on all (or most) pages.
 * All pages that include this menu must extend this class, instead of BasePage.
 * Examples of elements included are:
 * - Opskins Logo on the left hand side.
 * - Shop, trade, help and all other menus close to these.
 * - Sign In / Register button.
 * - User profile dropdown menu.
 * - Account balance.
 * - Language selection dropdown menu.
 * - Browse X Listings link.
 * - Change game dropdown menu.
 * - Search field.
 * - Advanced Search link.
 */
public class MainMenuPage extends BasePage {

    public void clickSignInRegister(){
        waitForElement(By.xpath("/html/body/div[2]/nav/div[3]/div[1]/div[1]/a"), "Sign In button")
                .click();
    }

}
