let boxes=document.querySelectorAll(".box");
let resetBtn=document.getElementById("reset");

let turnO=true;
const wPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]];
boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        console.log("box was clicked");
        // Set text content based on the player's turn
        if (turnO) {
            box.textContent='O';
            turnO=false;
        }
        else{
            box.textContent='X';
            turnO=true;
        }
        box.disabled=true; // Disable the clicked box
        checkWinner();
    });
});
function checkWinner() {
    for (pattern of wPatterns){
        // Check if all three boxes in the pattern are not empty
        if (boxes[pattern[0]].textContent!="" && boxes[pattern[1]].textContent!="" && boxes[pattern[2]].textContent!="") {
            
            // Check if all three boxes in the pattern have the same content
            if (boxes[pattern[0]].textContent==boxes[pattern[1]].textContent && boxes[pattern[1]].textContent==boxes[pattern[2]].textContent) {
               var node= document.querySelector(".winner");
               node.textContent=`Winner is ${boxes[pattern[0]].textContent} `;
               node.style.visibility="visible"; // Make the winner message visible
               for(b of boxes){
                b.disabled=true; // Disable all boxes
               }
                
            }
        }

    }
}
resetBtn.addEventListener("click",()=>{
    boxes.forEach((val)=>{
        val.textContent=""; // Reset text content of all boxes
        for(b of boxes){
            b.disabled=false; // Enable all boxes
           }
    });
    var node = document.querySelector(".winner");
    node.style.visibility = "hidden"; // Hide the winner message

});
