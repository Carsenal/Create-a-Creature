var oldx = -1;
var oldy = -1;

var list = [];

var index = 0;

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 1000;

document.addEventListener("mousedown", function(e) {
    var x = canvas.relMouseCoords(e)[0];
    var y = canvas.relMouseCoords(e)[1];
    if(oldx == -1 && oldy == -1){
        context.beginPath();
        context.moveTo(x, y);
    } else {
        context.lineTo(x, y);
        context.stroke();
    }
    list.push([x, y]);
    displayList();
    oldx = x;
    oldy = y;
});

function displayList(){
    var str = "["
    for(var i = 0; i < list.length; i ++){
        str += "[" + list[i][0] + ", " + list[i][1] + "], ";
    }
    str += "], ";
    console.log(str);
}

document.addEventListener("keydown", function(e){
    if(e.keyCode = 83){
        list = [];
        context.clearRect(0, 0, 1000, 1000);
        context.closePath();
        oldx = -1;
        oldy = -1;
        context.drawImage(document.getElementById("img" + index), 0, 0, 1000, 1000);
    }
});

function relMouseCoords(event){
    var totalOffsetX = 0;
    var totalOffsetY = 0;
    var canvasX = 0;
    var canvasY = 0;
    var currentElement = this;

    do{
        totalOffsetX += currentElement.offsetLeft - currentElement.scrollLeft;
        totalOffsetY += currentElement.offsetTop - currentElement.scrollTop;
    }
    while(currentElement = currentElement.offsetParent)

    canvasX = event.pageX - totalOffsetX;
    canvasY = event.pageY - totalOffsetY;

    return [canvasX, canvasY];
}
HTMLCanvasElement.prototype.relMouseCoords = relMouseCoords;