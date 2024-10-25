let box=document.querySelectorAll(".box");
let msg=document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-conainer");
let restart=document.querySelector("#res-btn");
let newbtn=document.querySelector(".new-btn");
let truno=true;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];
  const resgame=()=>{
    truno=true;
    enaablebox();
    msgContainer.classList.add("hide");
  }
box.forEach((box)=>{
box.addEventListener("click",()=>{
    if(truno){
        box.innerText="0";
        box.style.color="green";
         truno=false;
    }
    else{
        box.innerText="x";
        box.style.color="red";
         truno=true;
    }
    box.disabled=true;
    let isWinner = checkWinner();
})
})
const disablebox =()=>{
    for(val of box){
        val.disabled=true;
    }
}
const enaablebox =()=>{
    for(val of box){
        val.disabled=false;
        val.innerText="";
    }
}

const showwinner=(winner)=>{
msg.innerText=`congratulation ,winner is ${winner}`
msgContainer.classList.remove("hide");
disablebox();

}

let checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1=box[pattern[0]].innerText;
        let pos2=box[pattern[1]].innerText;
        let pos3=box[pattern[2]].innerText;

        if(pos1 != "" && pos2!="" && pos3!=""){
if(pos1===pos2 && pos2===pos3){
    //console.log("winner",p);
    showwinner(pos1);

}
        }
    }
}

restart.addEventListener("click",resgame
);
newbtn.addEventListener("click",resgame);