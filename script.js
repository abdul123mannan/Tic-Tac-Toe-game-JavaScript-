let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newgamebtn=document.querySelector("#newgame");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnx=true;
const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]

];
const resetgame=()=>{
    turnx=true;
    enablebtn();
    msgcontainer.classList.add("hide");
}
const disablebtn=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
    
}
const enablebtn=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showwinner=(winner)=>{
    msg.innerText=`Congratulations,Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disablebtn();
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnx){
            box.innerText="X";
            
            turnx=false;
        }else{
            box.innerText="O";
            turnx=true;
        }
        box.disabled=true;
        checkWinner();
    })
})
const checkWinner=()=>{
    for(let pattern of winpattern){
        let pos1=boxes[pattern[0]].innerText;
        
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!=""&&pos2!=""&&pos3!=""){
            if(pos1===pos2&&pos2===pos3){
                console.log("winner",pos1)
                showwinner(pos1);
            }
        }
    }
}
newgamebtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);