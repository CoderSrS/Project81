canvas=document.getElementById("myCanvas");
ctx=canvas.getcontext("2d");

color= "blue";

ctx.beginpath()
ctx.strokeStyle=color;
ctx.lineWidth= 3;
ctx.arc(30,200,40, 0, 2*Math.PI)
ctx.stroke

canvas.addEventListener("mousedown", MouseDown);

function MouseDown(e) {
    color = document.getElementById("color").value;
    line_Width = document.getElementById("lineWidth").value;

    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;

    console.log("X = " + mouse_x + " ,Y =  " + mouse_y);
    circle(mouse_x , mouse_y);    
}

function CreateArct(mouse_x , mouse_y){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = line_Width;
    ctx.arc(mouse_x, mouse_y, 40 ,0 , 2*Math.PI);
    ctx.stroke();

}

function clear()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}