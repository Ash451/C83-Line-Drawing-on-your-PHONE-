var canvas= document.getElementById("mycanvas")
var ctx=canvas.getContext("2d")
var color="blue"
var width=5
var lastX,lastY,currentX,currentY
var screenwidth=screen.width
var newwidth=screen.width-99
var newheight=screen.height-200
if (screenwidth < 992){
    document.getElementById("mycanvas").width=newwidth
    document.getElementById("mycanvas").height=newheight
    document.body.style.overflow="hidden"
}


canvas.addEventListener("touchstart",ts)
function ts(e){
    console.log("You have started your journey in drawing")
    lastX=e.touches[0].clientX-canvas.offsetLeft
    lastY=e.touches[0].clientY-canvas.offsetTop
    color=document.getElementById("colorinput").value
width=document.getElementById("widthinput").value
}
canvas.addEventListener("touchmove",tm)
function tm(e){
    console.log("Finger is moving.")
    currentX=e.touches[0].clientX-canvas.offsetLeft
    currentY=e.touches[0].clientY-canvas.offsetTop
    color=document.getElementById("colorinput").value
width=document.getElementById("widthinput").value
        ctx.beginPath()
        ctx.strokeStyle=color
        ctx.lineWidth=width
        ctx.moveTo(lastX,lastY)
        ctx.lineTo(currentX,currentY)
        ctx.stroke()
    
    lastX=currentX
    lastY=currentY
}
