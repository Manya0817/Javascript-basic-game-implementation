let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const getComputerChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=()=>{
    msg.innerText="Game was draw!!. Please play again!!";
    msg.style.backgroundColor='#081b31';
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText= `You win!! Your ${userChoice} choice beats ${compChoice}`;
        msg.style.backgroundColor='green';
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText= `You lose!! ${compChoice} beats your choice ${userChoice}`;
        msg.style.backgroundColor='red';
    }
}

const playGame=(userChoice)=>{
    const compChoice=getComputerChoice();
    if(userChoice==compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==='rock'){
            userWin=compChoice==='paper'?false:true;
        }else if(userChoice==='paper'){
            userWin=compChoice==='scissors'?false:true;
        }else{
            userWin=compChoice==='rock'?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }  
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const choiceId=choice.getAttribute("id");
        playGame(choiceId);
    })
})