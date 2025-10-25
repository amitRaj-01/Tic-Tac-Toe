let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".reset-btn");
let newGameBtn=document.querySelector(".new-game-btn");
let msg=document.querySelector(".msg");

let turn_of_O=true;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () =>{
    turn_of_O=true;
    enableBoxes();
    msg.innerText="";
}

boxes.forEach((box) => {
    box.addEventListener("click" , () =>{
        if(turn_of_O){
            box.innerText="O";
            turn_of_O=false;
        }
        else{
            box.innerText="X";
            turn_of_O=true;
        }
        box.disabled=true;
        checkDraw();
        checkWinner();
    })

});

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const disabledBoxes = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const showWinner = (winner) =>{
    msg.innerText=`Congratulation,Winner is ${winner}`;
    disabledBoxes();
};

const checkDraw = () =>{
    for(let box of boxes){
        if(box.disabled == true){
           continue;
        }
        else{
            return;
        }
    }
    msg.innerText="Match Draw";
};

const checkWinner = () =>{
    for(let pattern of winPatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val === pos2val  && pos2val === pos3val){
                showWinner(pos1val);
            }
        }
    }
};

resetBtn.addEventListener("click" ,resetGame);

newGameBtn.addEventListener("click" ,resetGame);