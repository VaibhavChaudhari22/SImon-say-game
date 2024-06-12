let gamesequence=[];
let usersequence=[];
 
let h4=document.querySelector("h4");
let btns=["green","red","yellow","purple"];




let started=false;
let level=0;

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game is started");
        started = true;

        levelup();
    }
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);

}

function levelup(){
    usersequence=[];
    level++;
    h4.innerText=(`level ${level}`);

    randIdx=Math.floor(Math.random()*4);
    let randomcolor=btns[randIdx];
    let radBtn= document.querySelector(`.${randomcolor}`);

    gamesequence.push(randomcolor);
    console.log(gamesequence);
    
    btnflash(radBtn);
}
function checkAns(Idx){
// console.log("curr level=",level);
    

    if(usersequence[Idx]==gamesequence[Idx]){
       if(usersequence.length==gamesequence.length){
        setTimeout(levelup,1000);
       }
    }
    else{
        h4.innerHTML=`Game over!,<br>your score was ${level}<br> please enter any key to start`;

        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }

    

}

function btnpress(){
    let btn=this;
   
    btnflash(btn);

    userColor=btn.getAttribute("id");
    usersequence.push(userColor);

    checkAns(usersequence.length-1);
}
let allbtns = document.querySelectorAll(".btn");

for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}



function reset(){
    Started=false;
    let gamesequence=[];
let usersequence=[];


level=0;

}