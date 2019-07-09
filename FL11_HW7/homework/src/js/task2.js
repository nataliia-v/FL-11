let attempts = 3;
let prize = 0;
let maxPrize = 100;
let possiblePrize = maxPrize;
let range = 8;
let stepOfRange = 4;
let toZero = 0;
let minAttempts = 0;
let stepOfAttempts = 1;
let newIAttempts = 3;
let minMaxPrize = 100;
let stepOfPrize = 2;
let newAttempts = 4;
let newRange = 8;
let numbNull = 0;

const start = confirm('Do you want to play a game?');

if (!start) {
    alert('You did not become a billionaire, but can.')
} else {

    do {
        const randomNumb = Math.floor(Math.random() * range);
        console.log(randomNumb);
        const inputNumb = parseFloat(prompt(`Choose a roulette pocket number from 0 to ${range}
            Attempts left: ${attempts},
            Total prize: ${prize},
            Total prize on current attempts: ${possiblePrize}`));

        possiblePrize = possiblePrize / stepOfPrize;
        if (!inputNumb && numbNull) {
            alert('You did not become a billionaire, but can.');
            attempts = toZero;
        } else if (inputNumb === randomNumb) {

            const playAgain = confirm(`Congratulation, you won! Your prize is: ${(prize = possiblePrize)}$.
                Do you  want to continue?`);
            attempts = attempts - stepOfAttempts;
            if (!playAgain) {
                alert('You did not become a billionaire, but can.');
                attempts = toZero;
            } else {
                attempts = newIAttempts;
                possiblePrize = maxPrize * stepOfPrize;
                maxPrize = maxPrize * stepOfPrize;
                range = range + stepOfRange;
            }
        } else if (inputNumb !== randomNumb) {
            if (attempts === stepOfAttempts) {
                prize = toZero;
                alert(`Thank you for your participation. Your prize is: ${(prize)}$`);
                const playAgain = confirm('Do you want to play again?');

                if (!playAgain) {
                    alert('You did not become a billionaire, but can.');
                    attempts = toZero;
                } else {
                    attempts = newAttempts;
                    possiblePrize = minMaxPrize;
                    prize = toZero;
                    range = newRange;
                }
            }
            attempts = attempts - stepOfAttempts;
        }
    } while (attempts > minAttempts)
}
