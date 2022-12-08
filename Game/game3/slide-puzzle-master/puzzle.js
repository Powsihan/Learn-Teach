
var rows = 2;
var columns = 12;

var currTile;
var otherTile; //blank tile

var turns = 0;

var imgOrder = ["4", "1", "2", ];
var imgOrder1 = ["1.png", "2.png", "4.png"];
let cardsChosen = []
let cardsChosen1 = []
window.onload = function() {
    for (let r=1; r < rows; r++) {
        for (let c=0; c < columns; c++) {

            //<img id="0-0" src="1.jpg">
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.src = imgOrder.shift() + ".png";

            //DRAG FUNCTIONALITY
            tile.addEventListener("dragstart", dragStart);  //click an image to drag
            tile.addEventListener("dragover", dragOver);    //moving image around while clicked
            tile.addEventListener("dragenter", dragEnter);  //dragging image onto another one
            tile.addEventListener("dragleave", dragLeave);  //dragged image leaving anohter image
            tile.addEventListener("drop", dragDrop);        //drag an image over another image, drop the image
            tile.addEventListener("dragend", dragEnd);      //after drag drop, swap the two tiles

            document.getElementById("board").append(tile);
            if(cardsChosen[0]==imgOrder1[0]&&cardsChosen[1]==imgOrder1[1]&&cardsChosen[2]==imgOrder1[2]){
                alert("ddddd")
            }

        }
    }
    for (let r=1; r < rows; r++) {
        for (let c=0; c < columns; c++) {

            //<img id="0-0" src="1.jpg">
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.src =  "3.png";

            //DRAG FUNCTIONALITY
            tile.addEventListener("dragstart", dragStart);  //click an image to drag
            tile.addEventListener("dragover", dragOver);    //moving image around while clicked
            tile.addEventListener("dragenter", dragEnter);  //dragging image onto another one
            tile.addEventListener("dragleave", dragLeave);  //dragged image leaving anohter image
            tile.addEventListener("drop", dragDrop);        //drag an image over another image, drop the image
            tile.addEventListener("dragend", dragEnd);      //after drag drop, swap the two tiles

            document.getElementById("board").append(tile);
            cardsChosen1.push(title.src)
            if(cardsChosen[0]==imgOrder1[0]&&cardsChosen[1]==imgOrder1[1]&&cardsChosen[2]==imgOrder1[2]){
                alert("ddddd")
            }


        }
    }

    
}

function dragStart() {
    currTile = this; //this refers to the img tile being dragged
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {

}

function dragDrop() {
    otherTile = this; //this refers to the img tile being dropped on
}

function dragEnd() {
    
   
        let currImg = currTile.src;
        let otherImg = otherTile.src;

        currTile.src = otherImg;
        otherTile.src = currImg;
        cardsChosen.push(otherTile.src)

        turns += 1;
        document.getElementById("turns").innerText = turns;

    
    }
    
    if(cardsChosen[0]==imgOrder1[0]&&cardsChosen[1]==imgOrder1[1]&&cardsChosen[2]==imgOrder1[2]){
        alert("ddddd")
    }