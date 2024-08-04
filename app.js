let userScore = 0;
let compScore = 0;

const chioces = document.querySelectorAll(".chioce");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-Score");
const compScorePara = document.querySelector("#comp-Score");

//to generate computer chioce
const genCompChioce = () =>{
    const options = ["rock","paper","scissor"];
    const randomNum = Math.floor(Math.random() * 3);
    return options[randomNum];

}

//display wineer 
const showWin = (userWin, userChioce, compChioce) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win. ${userChioce} beats ${compChioce}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `Computer win. ${compChioce} beats ${userChioce}`;
        msg.style.backgroundColor = "red";
    }

    
}
//draw scenario

const draw = () => {
    //console.log("The game was draw");
    msg.innerText = "Game was draw ! play again.";
    msg.style.backgroundColor = "rgb(75, 7, 138)";
}
//for making the score count and it require both userchioce nd computer chioce
const playGame  = (userChioce) =>{

   
   console.log("user chioce = ",userChioce);
   const compChioce = genCompChioce();
   console.log("Computer chioce = ", compChioce);

   if(userChioce === compChioce){
    draw();
   }else{
    let userWin = true;
    if(userChioce === "rock"){
        //computer option paper and sissor
        userWin = compChioce === "paper" ? false : true;
    }else if(userChioce === "paper") {
      //comp option rock and sissor
      userWin = compChioce === "scissor" ?  false : true ;
    }else {
        //comp option rock and paper
        userWin = compChioce === "rock" ? false : true;
    }
    showWin (userWin, userChioce, compChioce);
}
};





// to get user chioce
chioces.forEach((chioce) => {
    chioce.addEventListener("click",() =>{
        const userChioce = chioce.getAttribute("id");
        playGame(userChioce);
    });
});



