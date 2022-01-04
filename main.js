//Default game mode will be easy
//Initialize global variables
let seriesN = 1; //number of notes to play in series
let gameMode = "easy"; //game difficulty
let score = 0; //how many series have successfully been completed
const numKeys = 5; //total number of keys
let chosenKeys = [];
let checker = 0;

//Setup array of key objects
//Number of objects will be equal to the game mode selected
//objects will have a key name, audio src, and randomly assigned color.
let keyFirst = {
    name: "c",
    audioSrc: "audio/c5.mp3",
    color: "red"
}

let keySecond = {
    name: "cs",
    audioSrc: "audio/c-5.mp3",
    color: "orange"
}

let keyThird = {
    name: "d",
    audioSrc: "audio/d5.mp3",
    color: "yellow"
}

let keyFourth = {
    name: "ds",
    audioSrc: "audio/d-5.mp3",
    color: "green"
}

let keyFifth = {
    name: "e",
    audioSrc: "audio/e5.mp3",
    color: "blue"
}

//Array holding our key objects
let myKeys = [keyFirst, keySecond, keyThird, keyFourth, keyFifth];

//Setup keys as new buttons and add to empty div? Can just start with keys in the div and manipulate those.

//add code to play a series of notes starting with 1 note
//player will have to copy the series each time it is played
//Need code logic to give the player time to press the right keys.
//Once player presses the right keys, next series of notes will be played.
//Is this where async timing comes into play? For giving the player a time limit.
function playKey(key) {
    let note = new Audio(key.audioSrc);
    note.play();
}

//Play all the keys in the chosenKeys array
//This will need to change the color of the keys too and needs async functionality
function playKeySeries() {
    for(let i = 0; i < chosenKeys.length; i++) {
        let note = new Audio(chosenKeys[i].audioSrc);
        note.play();
    }
}

//Change the color of a specific key document element to the key object's color value
function changeKeyColor(docKey, myKey) {
    docKey.style.backgroundColor = myKey.color;
}

//Add a key to the series challenge
function chooseKey() {
    let rand = Math.floor(Math.random() * 5);
    chosenKeys.push(myKeys[rand]);
    console.log(chosenKeys);
}

//add event listeners to each key
//check if the right key was pressed
//when the key is pressed it plays the associated audio.
let docKeys = document.getElementsByClassName("keyboard");
for(let i = 0; i < docKeys.length; i++) {
    docKeys[i].addEventListener("click", () => {
        playKey(myKeys[i]);
        if(myKeys[i].name === chosenKeys[checker].name) {
            if(checker === chosenKeys.length - 1) { //the player beat that series so update the score and add more keys to the challenge list
                checker = 0;
                score++;
                document.getElementById("score").innerHTML = `Score: ${score}`;
                chooseKey();
                playKeySeries();
                console.log("yay")
            } else {
                checker++;
                console.log("next");
            }
        } else {
            console.log("missed");
        }
    });
}

//When the player clicks the start button, the game begins.
let startB = document.querySelector("#start");
startB.addEventListener("click", () => {
    chooseKey();
    playKey(chosenKeys[0]);
})


//Need function to do the key checking?

//Need one play function for computer and a different one for the player.
//var button = getElementByID(button) then do button.click() to trigger computer function
