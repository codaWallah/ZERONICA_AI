const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hour = day.getHours();

    if (hour >= 0 && hour < 12) {
        speak("Good Morning Boss...");
    } else if (hour >= 12 && hour < 17) {
        speak("Good Afternoon Master...");
    } else {
        speak("Good Evening Sir...");
    }
}

window.addEventListener('load', () => {
    speak("Initializing JARVIS...");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
};

btn.addEventListener('click', () => {
    content.textContent = "Listening...";
    recognition.start();
});

{
/*function takeCommand(message) {
    if (message.includes('good morning') || message.includes('good afternoon') || message.includes('good evening') ) {
        speak("Same to you Guru G"); 
}
}*/
}
function takeCommand(message) {
    if (message.includes('hey') || message.includes('hello')) {
        speak("Hello Sir, How May I Help You?"); 
        
    } if (message.includes('good morning') || message.includes('good afternoon') || message.includes('good evening') ) {
        speak("Same to you Guru G"); 

 
  
    
    } else if (message.includes("open google")) {
        window.open("https://google.com", "_blank");
        speak("Opening Google...");
    }
    else if (message.includes("open youtube")) {
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube...");
    } else if (message.includes("open whatsapp")) {
        window.open("https://api.whatsapp.com/", "_blank");
        speak("Opening Whatsapp...");
    } else if (message.includes("open facebook")) {
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook...");
    } else if (message.includes("open instagram")) {
        window.open("https://instagram.com", "_blank");
        speak("Opening instagram...");
    } else if (message.includes("open x")) {
        window.open("https://twitter.com/", "_blank");
        speak("Opening X...");
    } else if (message.includes("open github")) {
        window.open("https://github.com/", "_blank");
        speak("Opening Github...");    
    } else if (message.includes("open linkedin")) {
        window.open("https://linkedin.com/", "_blank");
        speak("Opening Linkedin..."); 
    } else if (message.includes("open chat gpt")) {
        window.open("https://chat.openai.com/" , "_blank");
        speak("Opening ChatGPT....");
    } else if (message.includes("open flipkart")) {
        window.open("https://flipkart.com/" , "_blank");
        speak("Opening Flipkart....");
    } else if (message.includes("open amazon")) {
        window.open("https://amazon.in/" , "_blank");
        speak("Opening Amazon....");
    } else if (message.includes("play spotify")) {
        window.open("https://open.spotify.com/" , "_blank");
        speak("Opening Spotify....");   
    } else if (message.includes("open niu attendance")) {
        window.open("https://accsoft.niu.edu.in/accsoft_niu/studentlogin.aspx" , "_blank");
        speak("Opening NIU E.R.P.....");    
        
    } else if (message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what I found on the internet regarding " + message;
        speak(finalText);
    } else if (message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "").trim()}`, "_blank");
        const finalText = "This is what I found on Wikipedia regarding " + message;
        speak(finalText);
    } else if (message.includes('time')) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        const finalText = "The current time is " + time;
        speak(finalText);
    } else if (message.includes('date')) {
        const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" });
        const finalText = "Today's date is " + date;
        speak(finalText);
    } else if (message.includes('calculator')) {
        window.open('Calculator:///');
        const finalText = "Opening Calculator";
        speak(finalText);
    } else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on Google";
        speak(finalText);
    }
}
