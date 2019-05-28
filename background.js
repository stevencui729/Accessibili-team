'use strict';


let synth = window.speechSynthesis;

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log("The color is green.");
  });
});

chrome.browserAction.onClicked.addListener(function(tab) {
  // note that this logs to the background page!
  console.log("click on browser action button detected")
  const new_text = 'The site is not secure. Click the blue button to return to safety';
  chrome.tabs.executeScript(null, {file: "testScript.js"});
  setTimeout(speak_text, 400, new_text)
});

function speak_text(text){
  if (synth.speaking) {
      console.error('speechSynthesis.speaking');
      return;
  }
  let  utterThis = new SpeechSynthesisUtterance(text);
  utterThis.onend = function (event) {
      console.log('SpeechSynthesisUtterance.onend');
  }
  utterThis.onerror = function (event) {
      console.error('SpeechSynthesisUtterance.onerror');
  }
  //utterThis.pitch = 1;
  //utterThis.rate = 1;
  synth.speak(utterThis);
}