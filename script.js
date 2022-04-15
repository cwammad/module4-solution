(function () {
 
let names = ["Yaakov", "john", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "jaura", "Jim"];

 names.forEach((char) => {
 
 if (char.charAt(0) === 'j'){
 byeSpeaker.speak(char);
 }

 else if (char.charAt(0) === 'J'){
 byeSpeaker.speak(char);
 }
 
 else{
 helloSpeaker.speak(char)
 }

   
});


})();
 


