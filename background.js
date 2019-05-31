'use strict';

chrome.browserAction.onClicked.addListener(function(tab) {
  // note that this logs to the background page!
  console.log("click on browser action button detected")
  chrome.tabs.executeScript(null, {file: "testScript.js"});
});