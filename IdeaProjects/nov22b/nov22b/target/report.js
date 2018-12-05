$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("stock.feature");
formatter.feature({
  "line": 2,
  "name": "Customer search for stock price",
  "description": "",
  "id": "customer-search-for-stock-price",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@AAPL"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Search and add to cart",
  "description": "",
  "id": "customer-search-for-stock-price;search-and-add-to-cart",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on the Google search page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I search for \"\u003cstock\u003e\" price",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I navigate to Google finance link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should be able to read current price and 52 week range",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should see the current price displayed is within that range",
  "keyword": "And "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "customer-search-for-stock-price;search-and-add-to-cart;",
  "rows": [
    {
      "cells": [
        "stock"
      ],
      "line": 12,
      "id": "customer-search-for-stock-price;search-and-add-to-cart;;1"
    },
    {
      "cells": [
        "INTC"
      ],
      "line": 13,
      "id": "customer-search-for-stock-price;search-and-add-to-cart;;2"
    },
    {
      "cells": [
        "GOOG"
      ],
      "line": 14,
      "id": "customer-search-for-stock-price;search-and-add-to-cart;;3"
    },
    {
      "cells": [
        "AAPL"
      ],
      "line": 15,
      "id": "customer-search-for-stock-price;search-and-add-to-cart;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Search and add to cart",
  "description": "",
  "id": "customer-search-for-stock-price;search-and-add-to-cart;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@AAPL"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on the Google search page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I search for \"INTC\" price",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I navigate to Google finance link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should be able to read current price and 52 week range",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should see the current price displayed is within that range",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.i_am_on_the_Google_search_page()"
});
formatter.result({
  "duration": 45828587714,
  "error_message": "net.thucydides.core.webdriver.UnsupportedDriverException: Could not instantiate class org.openqa.selenium.firefox.FirefoxDriver\n\tat net.thucydides.core.webdriver.WebDriverFacade.newDriverInstance(WebDriverFacade.java:152)\n\tat net.thucydides.core.webdriver.WebDriverFacade.newProxyDriver(WebDriverFacade.java:139)\n\tat net.thucydides.core.webdriver.WebDriverFacade.getProxiedDriver(WebDriverFacade.java:109)\n\tat net.thucydides.core.webdriver.WebDriverFacade.openIgnoringHtmlUnitScriptErrors(WebDriverFacade.java:184)\n\tat net.thucydides.core.webdriver.WebDriverFacade.get(WebDriverFacade.java:179)\n\tat nov22b.pages.SearchPage.openSearchPage(SearchPage.java:16)\n\tat nov22b.steps.UserSteps.open_google_page(UserSteps.java:14)\n\tat nov22b.steps.UserSteps$$EnhancerByCGLIB$$a29d7020.CGLIB$open_google_page$0(\u003cgenerated\u003e)\n\tat nov22b.steps.UserSteps$$EnhancerByCGLIB$$a29d7020$$FastClassByCGLIB$$392a3de5.invoke(\u003cgenerated\u003e)\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\n\tat net.thucydides.core.steps.StepInterceptor.invokeMethod(StepInterceptor.java:395)\n\tat net.thucydides.core.steps.StepInterceptor.executeTestStepMethod(StepInterceptor.java:380)\n\tat net.thucydides.core.steps.StepInterceptor.runTestStep(StepInterceptor.java:355)\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:132)\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:61)\n\tat nov22b.steps.UserSteps$$EnhancerByCGLIB$$a29d7020.open_google_page(\u003cgenerated\u003e)\n\tat nov22b.stepDefinition.StepDefinition.i_am_on_the_Google_search_page(StepDefinition.java:24)\n\tat ✽.Given I am on the Google search page(stock.feature:5)\nCaused by: net.thucydides.core.webdriver.UnsupportedDriverException: Could not instantiate new WebDriver instance of type class org.openqa.selenium.firefox.FirefoxDriver (Timed out waiting 45 seconds for Firefox to start.\nBuild info: version: \u00273.5.2\u0027, revision: \u002710229a9\u0027, time: \u00272017-08-21T17:29:55.15Z\u0027\nSystem info: host: \u0027simplex-MAX-G0101\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.15.0-36-generic\u0027, java.version: \u002710.0.2\u0027\nDriver info: driver.version: FirefoxDriver\n\tat net.thucydides.core.webdriver.WebDriverFactory.newWebdriverInstance(WebDriverFactory.java:135)\n\tat net.thucydides.core.webdriver.WebDriverFacade.newDriverInstance(WebDriverFacade.java:148)\n\tat net.thucydides.core.webdriver.WebDriverFacade.newProxyDriver(WebDriverFacade.java:139)\n\tat net.thucydides.core.webdriver.WebDriverFacade.getProxiedDriver(WebDriverFacade.java:109)\n\tat net.thucydides.core.webdriver.WebDriverFacade.openIgnoringHtmlUnitScriptErrors(WebDriverFacade.java:184)\n\tat net.thucydides.core.webdriver.WebDriverFacade.get(WebDriverFacade.java:179)\n\tat nov22b.pages.SearchPage.openSearchPage(SearchPage.java:16)\n\tat nov22b.steps.UserSteps.open_google_page(UserSteps.java:14)\n\tat nov22b.steps.UserSteps$$EnhancerByCGLIB$$a29d7020.CGLIB$open_google_page$0(\u003cgenerated\u003e)\n\tat nov22b.steps.UserSteps$$EnhancerByCGLIB$$a29d7020$$FastClassByCGLIB$$392a3de5.invoke(\u003cgenerated\u003e)\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\n\tat net.thucydides.core.steps.StepInterceptor.invokeMethod(StepInterceptor.java:395)\n\tat net.thucydides.core.steps.StepInterceptor.executeTestStepMethod(StepInterceptor.java:380)\n\tat net.thucydides.core.steps.StepInterceptor.runTestStep(StepInterceptor.java:355)\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:132)\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:61)\n\tat nov22b.steps.UserSteps$$EnhancerByCGLIB$$a29d7020.open_google_page(\u003cgenerated\u003e)\n\tat nov22b.stepDefinition.StepDefinition.i_am_on_the_Google_search_page(StepDefinition.java:24)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\nCaused by: org.openqa.selenium.WebDriverException: Timed out waiting 45 seconds for Firefox to start.\nBuild info: version: \u00273.5.2\u0027, revision: \u002710229a9\u0027, time: \u00272017-08-21T17:29:55.15Z\u0027\nSystem info: host: \u0027simplex-MAX-G0101\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.15.0-36-generic\u0027, java.version: \u002710.0.2\u0027\nDriver info: driver.version: FirefoxDriver\n\tat org.openqa.selenium.firefox.XpiDriverService.waitUntilAvailable(XpiDriverService.java:112)\n\tat org.openqa.selenium.firefox.XpiDriverService.start(XpiDriverService.java:97)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:78)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:254)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:236)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:137)\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:191)\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:103)\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:137)\n\tat net.serenitybdd.core.webdriver.driverproviders.FirefoxDriverProvider.newFirefoxDriver(FirefoxDriverProvider.java:69)\n\tat net.serenitybdd.core.webdriver.driverproviders.FirefoxDriverProvider.newInstance(FirefoxDriverProvider.java:52)\n\tat net.thucydides.core.webdriver.WebDriverFactory.newWebdriverInstance(WebDriverFactory.java:125)\n\t... 72 more\nCaused by: org.openqa.selenium.net.UrlChecker$TimeoutException: Timed out waiting for [http://localhost:26673/hub/status] to be available after 45003 ms\n\tat org.openqa.selenium.net.UrlChecker.waitUntilAvailable(UrlChecker.java:102)\n\tat org.openqa.selenium.firefox.XpiDriverService.waitUntilAvailable(XpiDriverService.java:110)\n\t... 84 more\nCaused by: java.util.concurrent.TimeoutException\n\tat java.base/java.util.concurrent.FutureTask.get(FutureTask.java:204)\n\tat com.google.common.util.concurrent.SimpleTimeLimiter.callWithTimeout(SimpleTimeLimiter.java:180)\n\tat org.openqa.selenium.net.UrlChecker.waitUntilAvailable(UrlChecker.java:77)\n\t... 85 more\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "INTC",
      "offset": 14
    }
  ],
  "location": "StepDefinition.i_search_for_price(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.i_navigate_to_Google_finance_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "52",
      "offset": 43
    }
  ],
  "location": "StepDefinition.i_should_be_able_to_read_current_price_and_week_range(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.i_should_see_the_current_price_displayed_is_within_that_range()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1490857,
  "error_message": "java.lang.NullPointerException\n\tat nov22b.Stepdefs.closeBrowser(Stepdefs.java:96)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 14,
  "name": "Search and add to cart",
  "description": "",
  "id": "customer-search-for-stock-price;search-and-add-to-cart;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@AAPL"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on the Google search page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I search for \"GOOG\" price",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I navigate to Google finance link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should be able to read current price and 52 week range",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should see the current price displayed is within that range",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.i_am_on_the_Google_search_page()"
});
