
console.log("hello there we are in the testScript")
console.log(document)
console.log(chrome.runtime.getURL("testPage.html"));

// fetch(chrome.runtime.getURL("testPage.html"))
//   .then((response) => console.log(response))
//   .catch((err) => console.log(err))

// window.location.href = chrome.runtime.getURL("testPage.html");
window.location.replace(chrome.runtime.getURL("testPage.html"));
