let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["dagad", "kagaj", "kaichi"];
    const rndmix = Math.floor(Math.random() * 3);
    return options[rndmix];
};

const draw = () => {

    msg.innerText = ("draw zala nigh");
    msg.style.backgroundColor = "lavender"
    msg.style.color = "purple"
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorepara.innerText = userScore;

        msg.innerText = (`Jinkii.. your ${userChoice} beats ${compChoice}`);
        msg.style.backgroundColor = "lawngreen"
        msg.style.color = "black"
    } else {
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = (`Chat Hattt..${compChoice} beats your ${userChoice}`);
        msg.style.backgroundColor = "pink"
        msg.style.color = "black"

    }
}
const playGame = (userChoice) => {
    console.log("user choice=", userChoice);
    //generate comp choice
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if (userChoice === compChoice) {
        draw();
    } else {
        let userWin = true;
        if (userChoice === "dagad") {
            userWin = compChoice === "kagaj" ? false : true;
        } else if (userChoice === "kagaj") {
            userWin = compChoice === "kaichi" ? false : true;
        } else {
            userWin = compChoice === "dagad" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});