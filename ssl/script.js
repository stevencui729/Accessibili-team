var HIDDEN_CLASS = 'hidden';

var synth = window.speechSynthesis;

const text = 'The site is not secure. Click the blue button to return to safety' 
let utterThis = new SpeechSynthesisUtterance(text);
utterThis.pitch = 1;
utterThis.rate = 1;
console.log(utterThis)



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

document.getElementById('error-code').addEventListener('click', function() {
  document.getElementById("error-debugging-info").classList.toggle(HIDDEN_CLASS);
});

