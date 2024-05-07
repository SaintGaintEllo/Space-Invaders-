const body
const playerElement = document.getElementById("player");
playerElement.style.left=500;
function MovePlayerRight(amount=10)
{
    playerElement.style.left+=amount;
}
function MovePlayerLeft(amount=10){
    playerElement.style.left-=amount;
}

class key
{
    key()
    {
        this.left=false;
        this.right=false;
    }
}
let Keys=new key()

var life = 4;
var isalive=true;


if(life<=0){
    isalive = false;
    GameOver()

} else {

}
function shootbutton() {
    shoot()
}
function shoot(){
    console.log("syncdhuH")
}
function GotHit(){
    life -= 1;
    console.log( `${life}`)
    document.getElementById("Debugging").innerHTML =`${life}`;
    if(life==3) {
        document.getElementById("HeartFour").style.display = "none";
    }else if (life==2) {
        document.getElementById("HeartThree").style.display = "none";
    }else if (life==1) {
        document.getElementById("HeartTwo").style.display = "none";
    }else if(life==0){
        document.getElementById("HeartOne").style.display = "none";
    }
}
function GameOver(){
    document.getElementById("GameOverScreen").style.display= "block";

}
document.addEventListener(onkeydown, function(e)
{
    alert(e)
    if(e==='a'){
        Keys.left=true;
        
    }
    if(e==='d')
    {
        Keys.right=true
    }
})
document.addEventListener(onkeyup, function(e)
{
    if(e==='a')
    {const playerElement = document.getElementById("player");
    playerElement.style.left=500;
        Keys.left=false;
    }
    if(e==='d')
    {
        Keys.right=false;
    }
})
const loop=()=>
    {
        if(Keys.left)
        {   
            MovePlayerLeft();
        }
    }
setInterval(loop,15)    
setInterval(loop,15)
function CodePadding(){
    console.log("djajduyagsdgsa")
    console.log("djajduyagsdgsa")
    console.log("djajduyagsdgsa")
    console.log("djajduyagsdgsa")
    console.log("djajduyagsdgsa")
    console.log("djajduyagsdgsa")
    console.log("djajduyagsdgsa")
    console.log("djajduyagsdgsa")
    console.log("djajduyagsdgsa")
}