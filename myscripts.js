function getComputerChoice()
{
    let number= Math.floor(Math.random()*3+1);

    if (number==1)
    {
        return "rock";
    }
    else if(number ==2)
    {
        return "paper";
    }
    else
    {
        return "scissors";
    }
}
console.log(getComputerChoice());

function playRound(playerSelection, computerSelection)
{
    playerSelection=playerSelection.toLowerCase()

    if(playerSelection== "rock")
    {
        if(computerSelection=="rock")
        {
            return "draw"
        }
        else if(computerSelection=="paper")
        {
            return "loss"
        }
        else
        {
            return "win"
        }
    }
    else if(playerSelection== "paper")
    {
        if(computerSelection=="rock")
        {
            return "win"
        }
        else if(computerSelection=="paper")
        {
            return "draw"
        }
        else
        {
            return "loss"
        }
    }
    else if(playerSelection=="scissors")
    {
        if(computerSelection=="rock")
        {
            return "loss"
        }
        else if(computerSelection=="paper")
        {
            return "win"
        }
        else
        {
            return "draw"
        }
    } 
    else
    {
        return "draw";
    }  
}

    let player="rock";
    let computer=getComputerChoice();

    console.log(computer);
    console.log(playRound(player, computer));

function game()
{
    let playerWins=0
    let computerWins=0;
    while(playerWins<5&&computerWins<5)
    {
        let playerChoice=prompt("what is your choice?");
        let computerChoice=getComputerChoice();

        let outcome=playRound(playerChoice, computerChoice);

        if(outcome=="win")
        {
            playerWins++;
            alert("you won that one | Computer Wins: "+computerWins+" | Player Wins: "+playerWins);
        }
        else if(outcome=="loss")
        {
            computerWins++;
            alert("you lost that one | Computer Wins: "+computerWins+" | Player Wins: "+playerWins);
        }
        else
        {
            alert("draw | Computer Wins: "+computerWins+" | Player Wins: "+playerWins);
        }

    }

    if(computerWins==5)
    {
        alert("you loss :(");
    }
    else
    {
        alert("you win :)");
    }
}

console.log(game());