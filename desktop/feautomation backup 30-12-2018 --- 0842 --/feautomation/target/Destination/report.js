$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com/opskins/feautomation/opskins_login.feature");
formatter.feature({
  "name": "I want to log in to Opskins",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Attempt to log in to Opskins",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on the Opskins page",
  "keyword": "Given "
});
formatter.step({
  "name": "I log in as \"\u003cusername\u003e\" with the password: \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I should see my name on the main menu bar \"\u003cusername_shown_in_dashboard\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "username_shown_in_dashboard"
      ]
    },
    {
      "cells": [
        "cam",
        "ABcd1234",
        "carlos.martinatto"
      ]
    },
    {
      "cells": [
        "cam2",
        "ABcd1234",
        "cam2"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Attempt to log in to Opskins",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the Opskins page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.I_visit_opskins()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I log in as \"cam\" with the password: \"ABcd1234\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.log_in(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see my name on the main menu bar \"carlos.martinatto\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.confirm_user_is_logged_in(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Attempt to log in to Opskins",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the Opskins page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.I_visit_opskins()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I log in as \"cam2\" with the password: \"ABcd1234\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.log_in(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see my name on the main menu bar \"cam2\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.confirm_user_is_logged_in(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});