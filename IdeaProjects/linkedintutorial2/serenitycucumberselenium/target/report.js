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
