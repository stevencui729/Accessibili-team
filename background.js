'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log("The color is green.");
  });
});

chrome.browserAction.onClicked.addListener(function(tab) {
  // note that this logs to the background page!
  console.log("click on browser action button detected")
  chrome.tabs.executeScript(null, {file: "testScript.js"});
});