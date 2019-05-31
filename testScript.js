
console.log("hello there we are in the testScript")
console.log(document)
// var target_url = chrome.runtime.getURL("ssl/expired.html");
// var target_url = chrome.runtime.getURL("ssl/wronghost.html")
var target_url = chrome.runtime.getURL("ssl/untrusted_root.html")
console.log(target_url)

// window.location.href = chrome.runtime.getURL("testPage.html");
window.location.replace(target_url);
