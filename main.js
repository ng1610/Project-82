canvas= document.getElementById("MyCanvas");
ctx= canvas.getContext("2d");
var color="";
var width_of_line="";
var radius="";
var mouse_event=""
var current_position_of_x, current_position_of_y;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color= document.getElementById("color").value;
    radius= document.getElementById("radius").value;
    width_of_line= document.getElementById("width").value;
    mouse_event="mousedown";
    console.log(mouse_event);
    console.log(color);
    console.log(radius);
    console.log(width_of_line);
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouse_event="mouseup";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouse_event="mouseleave;"
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    color= document.getElementById("color").value;
    radius= document.getElementById("radius").value;
    width_of_line= document.getElementById("width").value;

    current_position_of_x= e.clientX- canvas.offsetLeft;
    current_position_of_y= e.clientY- canvas.offsetTop;

    if(mouse_event=="mousedown"){
        console.log("corrunt positions of x and y coordinates");
        console.log("x- "+ current_position_of_x+ "y- "+ current_position_of_y);
        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth= width_of_line;
        ctx.arc(current_position_of_x, current_position_of_y, radius, 0, 2*Math.PI);
        ctx.moveTo(current_position_of_x, current_position_of_y);
        ctx.stroke();
    };
    
};

function ClearArea(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
}
