let boxes = document.querySelectorAll(".box") ;
let resetBtn = document.querySelector("#reset");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newBtn = document.querySelector("#newBtn");

let turn0 = true;//playerx player0

const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
    turn0 = true;
    ensableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        
        if(turn0){
             box.innerText = "O";//player0
             turn0 = false;
        } else {
            box.innerText = "X";//playerX
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();       
    });
});

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const ensableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = "Congratulations, Winner is " +winner;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () =>{
    for( let pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1===pos2 && pos2===pos3){
                console.log("Winner!");
                showWinner(pos1);
            }
        }
    }
};

newBtn.addEventListener("click", resetGame );
resetBtn.addEventListener("click", resetGame );