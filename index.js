
let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score")
const compScorepara = document.querySelector("#comp-score")

const genCompChoice = () => {
    // we choose array bcz we use math random function for get indexes of array
    let options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];


}
const drawGame = () => {
    msg.innerText = "Game was Draw. Play again!"
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userchoiceId, compChoice) => {
    if (userWin) {
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = ` You Win! ${userchoiceId} beats ${compChoice}`
        msg.style.backgroundColor = "green";

    }
    else {
        compScore++;
        compScorepara.innerText = compScore
        msg.innerText = `You Lose. ${compChoice} beats ${userchoiceId}`
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userchoiceId) => {
    const compChoice = genCompChoice();

    if (userchoiceId === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userchoiceId === "rock") {
            //computer choice scissor or paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userchoiceId === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userchoiceId, compChoice);
    }
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoiceId = choice.getAttribute("id")
        playGame(userchoiceId);
    })
})








