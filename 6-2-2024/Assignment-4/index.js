//Number guessing game

let playAgain;

do {
    let number = Math.floor(Math.random() * 100) + 1; 
    let numberofguess = 0;

    do {
        let guess = parseInt(prompt("Guess any number between 1-100"));

        if (numberofguess >= 9) {
            alert("You lose! The correct number was " + number);
            break;
        } else if (guess > number) {
            alert("Too high");
            numberofguess++; 
        } else if (number > guess) {
            alert("Too low");    
            numberofguess++;
        } else {
            alert("Congratulations! You guessed the number in " + (numberofguess + 1) + " attempts.");
            break; 
        }
    } while (true);

    playAgain = prompt("Do you want to play again? Type 'Y' for yes or 'N' for no.").toUpperCase();

    if (playAgain !== 'Y') {
        alert("Exiting the game.");
        break;
    }
} while (playAgain === 'Y');

alert("Thank you for playing!");
