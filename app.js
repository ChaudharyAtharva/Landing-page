let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#userscore");
const compscorepara=document.querySelector("#compscore");
let msgboard=document.getElementById("msg_container");



const genCompChoice=() => {
    const options = ["rock" ,"paper" ,"scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options [randIdx]; 
    }

    const drawGame = () => {
        console.log("Game was drawn");
        msg.innerText="Draw,try again"
        msgboard.style.backgroundColor="violet";


    }

    const showWin=(userWin)=>{
        if(userWin)
        {   userscore++;
            userscorepara.innerText=userscore;
            console.log("You have won");
            msg.innerText="You Win!!!";
            msgboard.style.backgroundColor="green"
        }
        else {
            compscore++;
            compscorepara.innerText=compscore;
            console.log("You have lost");
            msg.innerText="You lose!!!"
            msgboard.style.backgroundColor="red";

        }
    }

const playGame = (userChoice) => {
    console.log("userchoice is " + userChoice);
    //Generate comouter choice
    const compChoice=genCompChoice();
    console.log("compchoice is " + compChoice);

     if (userChoice===compChoice){
        drawGame(); 
     }

     else{
        let userWin;
        if(userChoice === "rock"){
            //scisors,paper
            userWin=compChoice==="paper" ? false :true;
        }  else if(userChoice==="paper"){
            userWin=compChoice==="scissors" ? false :true;
        }

        else {
            userWin=compChoice==="rock"?false:true;
        }
        showWin(userWin);


     }



}
 

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () =>{
        const userChoice=choice.getAttribute("id");
    playGame(userChoice);
    })
});  