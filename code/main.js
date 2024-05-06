
const playerElement = document.createElement("img");
playerElement.src="imgs/pls/MainShip-Base-FullHealth.png";
playerElement.style.position="absolute";
playerElement.style.top="90%";
playerElement.style.left="500px"

var playerPoss=500;
function MovePlayerRight(amount=10)
{
    playerPoss+=amount;
    playerElement.style.left=`${playerPoss}px`;
}
function MovePlayerLeft(amount=10)
{
    playerPoss-=amount;
    playerElement.style.left=`${playerPoss}px`;
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

var life=4;
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
    if(life==3) {document.getElementById("HeartFour").style.display = "none";
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
    {
        Keys.left=false;
        console.log("left true")
    }
    if(e==='d')
    {
        Keys.right=false;
        console.log("right true")
    }
})
const loop=()=>
    {
        if(Keys.left)
        {   
            MovePlayerLeft();        
        }
        if(Keys.right)
        {
            MovePlayerRight();
        }
    }
setInterval(loop,15)