function getRandomInt(start, end) {
    return Math.round(Math.round(start + Math.random() * (end - start + 1)));
}

function guessTheNumberGame() {
    var retry = true;

    while (retry) {
        var secret = getRandomInt(1, 10);
        var secretGuessed = false;

        for (var i = 0; i < 5; i++) {
            var userInput = prompt('Enter your guess');
            if (userInput == null) {
                var exitGame = confirm('Exit game?')
                if (!exitGame) {
                    i--;
                    continue;
                }
                else {
                    retry = false;
                    break;
                }
            }

            var guess = parseInt(userInput);

            if (isNaN(guess)) {
                i--;
                alert('Incorrect input');
                continue;
            }

            if (guess == secret) {
                secretGuessed = true;
                break;
            }
            else if (guess < secret) {
                alert('Your number is less than secret');
            }
            else if (guess > secret) {
                alert('Your number is bigger than secret');
            }
        }

        if (exitGame) {
            break;
        }
        if (secretGuessed) {
            alert('You were right, the number is ' + secret);
        }
        else if (i == 5) {
            alert('You exceeded the number of guesses');
        }

        retry = confirm('Try again?');
    }
}