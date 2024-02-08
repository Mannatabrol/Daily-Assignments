// Refactor the number guessing game to use functions for each part of the game logic. 
// Store the scores from each round in an array. At the conclusion of the game, output
// the array to display all the scores recorded during the game. 
// This approach will help organize the game code and facilitate tracking of player performance across multiple rounds.



function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playRound() {
    const val = generateRandomNumber(1, 100);
    let attempts = 0;

    while (true) {
        const guess = parseInt(prompt("Guess the secret number (between 1 and 100):"));

        if (isNaN(guess)) {
            alert("Please enter a valid number.");
        } else {
            attempts++;

            if (guess === val) {
                alert(`Congratulations! You guessed the secret number in ${attempts} attempts.`);
                return attempts;
            } else if (guess < val) {
                alert("Too low");
            } else {
                alert("Too high");
            }
        }
    }
}

function playGame() {
    const scores = [];
    const rounds = parseInt
    for (let i = 0; i < rounds; i++) {(prompt("How many rounds do you want to play?"));
    const roundArray = []; 

        alert(`Round ${i + 1}`);
        const score = playRound();
        scores.push(score);
        roundArray.push(i + 1);
    }

    return { scores, roundArray }; 
}

function displayScores(scores) {
    console.log("Scores from each round:");
    scores.forEach((score, index) => {
        alert(`Round ${index + 1}: ${score} attempts`);
    });
}

const gameData = playGame(); 
displayScores(gameData.scores); 
alert("Your scores are: " + gameData.scores.join(", ")); 
alert("Number of rounds played: " + gameData.roundArray.length);





















