// alert("connected!")

function Random(){
    const random=Math.floor(Math.random()*6 +1);
    console.log(random);
    document.getElementById('no').style.display = "block";
    document.getElementById('no').src=`./images/${random}.png`;
}
document.getElementById('roll-dice').addEventListener("click",Random);

function reset(){
    document.getElementById('no').style.display = "none";
}
document.getElementById('reset').addEventListener("click",reset);