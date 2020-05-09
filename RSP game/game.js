// This is the big function
const game = ()=>
{
    // Getting the score
    let pscore = 0;
    let cscore = 0;

    // Press Button for starting a game
    // This function is helping us to fade in and out the intro part when 
    // we press the button
    const startGame =() =>
    {
        const playBtn = document.querySelector('.intro button');
        const introScreen =  document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click',()=>
        {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        })
    }

    //Play match
    const playMatch = () =>
    {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector(".computer-hand");

        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand =>
            {
                hand.addEventListener('animationend', function()
                {
                    this.style.animation ="";
                })
            })

        //Computer's Options
        const computerOptions = ['rock','paper','scissor'];

        options.forEach(choice=>
        {
            choice.addEventListener('click', function()
            {
                // This is computer choice
                const computerNum = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[computerNum];               

               setTimeout(() => 
               {
                   //update images
                playerHand.src = `./images/${this.textContent}.png`;
                computerHand.src = `./images/${computerChoice}.png`;

                // Comparision for Result
                compareHand(this.textContent , computerChoice);
               }, 2000);
                

                // Animation
                playerHand.style.animation =  "shakePlayer 2s ease";
                computerHand.style.animation =  "shakeComputer 2s ease";
                
            })
        })
    }

    // This function is for updating the score board
    const updateScore = () =>
    {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.com-score p');

        playerScore.textContent = pscore;
        computerScore.textContent = cscore;

    }

    const compareHand =  (playerChoice , computerChoice) =>
    {
        //update Text
        const winner = document.querySelector('.winner');

        // check for a tie
        if (playerChoice === computerChoice)
        {
            winner.textContent = 'It is a tie';
            return ;
        }

        if(playerChoice == 'rock')
        {
            if(computerChoice === 'scissor')
            {
                winner.textContent = "Player Wins";
                pscore++;
                updateScore();
                return;
            }

            else
            {
                winner.textContent = "Computer Wins";
                cscore++;
                updateScore();
                return;
            }
        }

        //check for paper
        if(playerChoice == 'paper')
        {
            if(computerChoice === 'scissor')
            {
                winner.textContent = "Computer Wins";
                cscore++;
                updateScore();
                return;
            }

            else
            {
                winner.textContent = "Player Wins";
                pscore++;
                updateScore();
                return;
            }
        }

        //chech for scissors
        if(playerChoice == 'scissor')
        {
            if(computerChoice === 'rock')
            {
                winner.textContent = "Computer Wins";
                cscore++;
                updateScore();
                return;
            }

            else
            {
                winner.textContent = "Player Wins";
                pscore++;
                updateScore();
                return;
            }
        }
    }


    startGame();
    playMatch();
}

game();