const canvas = document.getElementById("gorilla");

const ctx = canvas.getContext("2d");

ctx.translate(250,500);
ctx.scale(1,-1);
ctx.fillStyle = "black";
canvas.style.background = "lavender";

// Draw the Body of the Gorilla
ctx.beginPath();
ctx.moveTo(-68, 72);
ctx.lineTo(-80, 176);

ctx.lineTo(-44, 308);
ctx.lineTo(0, 336);
ctx.lineTo(+44, 308);

ctx.lineTo(+80, 176);
ctx.lineTo(+68, 72);
ctx.fill();

// left leg
ctx.beginPath();
ctx.moveTo(0,72);
ctx.lineTo(-28,0);
ctx.lineTo(-80,0);
ctx.lineTo(-68,72);
ctx.fill();