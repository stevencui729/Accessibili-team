
console.log("hello there we are in the testScript")
console.log(document)
var target_url = chrome.runtime.getURL("ssl/expired.html");
// var target_url = chrome.runtime.getURL("text_to_speech/index.html");
console.log(target_url)

// fetch(chrome.runtime.getURL("testPage.html"))
//   .then((response) => console.log(response))
//   .catch((err) => console.log(err))

// window.location.href = chrome.runtime.getURL("testPage.html");
window.location.replace(target_url);
