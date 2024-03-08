"use strict";

let randomNumber = Math.floor(Math.random() * 100);
let randomNumberDisplay = document.querySelector("h2");
let userInput = document.querySelector("input");
let message = document.querySelector("p");

document.querySelector("button").addEventListener('click', () => {
    console.log(userInput.value);
    console.log(randomNumber);
    if (userInput.value == randomNumber)
    {
        console.log('Same!');
        randomNumberDisplay.textContent = randomNumber;
        message.textContent = "Congrats you guessed the number!"
    } else
    {
        console.log('Not same!');
        if (userInput.value > randomNumber)
        {
            message.textContent = "Try going lower!";
        } else if (userInput.value < randomNumber)
        {
            message.textContent = "Try going higher!"
        }
    }
});
