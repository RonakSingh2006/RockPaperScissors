obj = {
    0 : "Rock",
    1 : "Paper",
    2 : "Scissors"
}

// game buttons

let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

let userSelected;
let compGenerated;

let select = (e)=>{
    userSelected = e;
    console.log("You",userSelected);
}

let generate = ()=>{
    let x = Math.floor(Math.random()*3);
    compGenerated =  obj[x];
    console.log("comp",compGenerated);
}

rock.addEventListener("click",()=>{
    select("Rock");
    generate();
    game();
});

paper.addEventListener("click",()=>{
    select("Paper");
    generate();
    game();
});

scissors.addEventListener("click",()=>{
    select("Scissors");
    generate();
    game();
});


// function to update score and check winner
let userScore = 0;
let compScore = 0;
let result = "Start The Game"

let res = document.querySelector(".result");
let scoreX = document.querySelector("#user");
let scoreY = document.querySelector("#computer");
let color;

let game = ()=>{
    if(userSelected === compGenerated){
        result = `Draw Your ${userSelected} is same as ${compGenerated}`;
        color = "blue";
    }
    else{
        if((userSelected==="Rock" && compGenerated === "Scissors") || (userSelected==="Scissors" && compGenerated ==="Paper") || (userSelected==="Paper" && compGenerated === "Rock")){
            result = `You Won Your ${userSelected} beats ${compGenerated}`;
            color = "green";
            userScore ++;
        }
        else{
            result = `Computer Won ${userSelected} beats your ${compGenerated}`;
            color = "red";
            compScore ++;
        }
    }

    res.innerText = result;
    res.style.backgroundColor = color;
    scoreX.innerText = userScore;
    scoreY.innerText = compScore;
}