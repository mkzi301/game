let user = 0;
let bot = 0;

const choice = document.querySelectorAll(".select");
const msg = document.querySelector("#msg");
const Uscore = document.querySelector("#points-u");
const Bscore = document.querySelector("#points-b");
const userChoiceDisplay = document.querySelector("#user-choice-display");
const botChoiceDisplay = document.querySelector("#bot-choice-display");
const userChoiceName = document.querySelector("#user-choice-name");
const botChoiceName = document.querySelector("#bot-choice-name");

const draw = () => {
    msg.innerText = "Game draw. Play again.";
    msg.style.backgroundColor = "lightseagreen";
}

const win = (userwin, compchoice, userchoice) => {
    if (userwin) {
        user++;
        Uscore.innerText = user;
        msg.innerText = `You win!`;
        msg.style.backgroundColor = "green";
    } else {
        bot++;
        Bscore.innerText = bot;
        msg.innerText = `You lose!`;
        msg.style.backgroundColor = "red";
    }
}

const comp = () => {
    const opt = ["rock", "paper", "scissor"];
    const rand = Math.floor(Math.random() * 3);
    return opt[rand];
}

const playgame = (userchoice) => {
    const compchoice = comp();

    // Display user and bot choices with image and name
    userChoiceDisplay.innerHTML = `<img src="C:\\Users\\mohod\\OneDrive\\Desktop\\game\\${userchoice}.png" alt="${userchoice}">`;
    userChoiceName.innerText = userchoice.charAt(0).toUpperCase() + userchoice.slice(1);
    
    botChoiceDisplay.innerHTML = `<img src="C:\\Users\\mohod\\OneDrive\\Desktop\\game\\${compchoice}.png" alt="${compchoice}">`;
    botChoiceName.innerText = compchoice.charAt(0).toUpperCase() + compchoice.slice(1);

    if (userchoice === compchoice) {
        draw();
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userwin = compchoice === "scissor" ? false : true;
        } else {
            userwin = compchoice === "rock" ? false : true;
        }
        win(userwin, compchoice, userchoice);
    }
}

choice.forEach((select) => {
    select.addEventListener("click", () => {
        const userchoice = select.getAttribute("id");
        playgame(userchoice);
    })
});
