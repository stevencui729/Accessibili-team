var synth = window.speechSynthesis;

//var inputForm = document.querySelector('form');
//var voiceSelect = document.querySelector('select');


function speak(text){
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

onsubmit = function(event) {
  event.preventDefault();

  const text = 'The site is not secure. Click the blue button to return to safety' 
  speak(text);
}
