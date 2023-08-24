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
    else
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
}

    let player="rock";
    let computer=getComputerChoice();

    console.log(computer);
    console.log(playRound(player, computer));