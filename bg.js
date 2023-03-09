document.addEventListener("mousemove", function(event) {
    const bg = document.querySelector(".bg");
    const xPos = event.clientX;
    const yPos = event.clientY;
    console.log(xPos);console.log(yPos);
    bg.style.marginLeft = "calc("+xPos+"px - 375%)";
    bg.style.marginTop = "calc("+yPos+"px - 205%)";
    
});