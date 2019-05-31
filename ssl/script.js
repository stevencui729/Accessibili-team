var synth = window.speechSynthesis;

//var inputForm = document.querySelector('form');
//var voiceSelect = document.querySelector('select');

const text = 'The site is not secure. Click the blue button to return to safety' 
let utterThis = new SpeechSynthesisUtterance(text);
utterThis.pitch = 1;
utterThis.rate = 1;
console.log(utterThis)

// function speak(text){
//   if (synth.speaking) {
//     console.error('speechSynthesis.speaking');
//     return;
//   }
  
//   utterThis.onend = function (event) {
//     console.log('SpeechSynthesisUtterance.onend');
//   }
//   utterThis.onerror = function (event) {
//     console.error('SpeechSynthesisUtterance.onerror');
//   }
//   //utterThis.pitch = 1;
//   //utterThis.rate = 1;

// }
synth.speak(utterThis);
if (synth.speaking) {
  console.log('speechSynthesis.speaking');
}

document.getElementById("playButton").addEventListener("click", function() {
  synth.speak(utterThis);
  
})

document.getElementById("pauseButton").addEventListener("click", function() {
  synth.pause(utterThis);
})
