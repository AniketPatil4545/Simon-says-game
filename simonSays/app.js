let gameSeq =[];
let userSeq = [];
let started = false;
let level =0;

let btns = ["yellow", "red", "purple", "green"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if (started==false){
        console.log("game is started");
        started = true;
        levelUp();
        }
});

 function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function levelUp(){
    userSeq = [];
    //here we are resetting the userseq because we have to achieve the next level we have click colors from starting again
    level++;
    h2.innerText = `Level ${level}`;

    let randomIdx = Math.floor(Math.random() * 4);
    let randomClr = btns[randomIdx];
    let randomBtn = document.querySelector(`.${randomClr}`);

    // console.log(randomClr);
    // console.log(randomIdx);
    // console.log(randomBtn);

    gameSeq.push(randomClr);
    console.log(gameSeq);

    btnFlash(randomBtn);

}

function checkAns(indx){
    // console.log("curr level : ", level);
    

    if(userSeq[indx]==gameSeq[indx]){
        if (userSeq.length == gameSeq.length){
           setTimeout(levelUp,1000);
            //if index of userseq is equal to gameseq and length of userseq is equal to length of gameseq then we call levelUp function
        }
    }
    else{
        h2.innerHTML = `game over! Your score was <b> ${level} </b> <br> Press any key to start`; 
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }

}

function btnPress (){
    // console.log(this);
    let btn = this;
    btnFlash(btn); 
    userColor = btn.getAttribute("id");
    console.log(userColor); 
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset (){
    started = false;
    gameSeq = [];
    userSeq = [];
    level =0;

}