const playerElement = document.getElementById("player");

var life=4;
var isalive=true;
if(life<=0){
    isalive = false;
    GameOver()

} else {

}
function GotHit(){
    life -= 1;
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