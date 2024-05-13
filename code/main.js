var screen = document.getElementById("screen")
    var body = document.getElementById("body");
    var playerElement = document.getElementById("player");
    playerElement.style.position="absolute"
    playerElement.style.left="500px";
    playerElement.style.top="80%";
    let arrayOfbulets=[];
    let playerPos=500;
    function MovePlayerRight(amount=10)
    {
        playerPos+=amount;
        UpdatePos();
    }
    function MovePlayerLeft(amount=10){
        playerPos-=amount;
        UpdatePos();
    }
    function UpdatePos()
    {
        playerElement.style.left=`${playerPos}px`;
    }
    // Denne delelen tuller med min kode for en eller annen grunn.. IDK WHY PLEASE WORK PLEASE
    class key
    {
        key()
        {
            this.left=false;
            this.right=false;
        }
    }
    class Bullet
    {
        constructor()
        {
            this.imageAray=["imgs/bulets/b1.png","imgs/bulets/b2.png","imgs/bulets/b3.png"]
            this.CreateBulet();
        }
        CreateBulet()
        {
            this.prosent=75
            this.img=document.createElement("img");
            body.appendChild(this.img)
            this.img.style.top=`${this.prosent}%`;
            this.img.style.left=`${playerPos}px`
            this.img.src=this.imageAray[0]
            this.img.style.position="absolute"
        }
        UpdatePos(x=`${this.prosent}%`)
        {
            this.img.style.top=x
        
        }

        
    }
    class enemies
    {
        constructor(x,y)
        {
            this.x=x
            this.y=y
            this.createElement();
        }
        createElement()
        {
            this.img=document.createElement("img");
            body.appendChild(this.img)
            this.img.style.top=`${this.y}px`;
            this.img.style.left=`${this.x}px`
            this.img.src="imgs/enemies/Nautolan Ship - Fighter - Base.png"
            this.img.style.position="absolute"
        }
    
    }
    enemie= new enemies(500,120);
    const Keys=new key();
    var isalive=true;
    let life=3;

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
        console.log( `${life}`)
        document.getElementById("Debugging").innerHTML =`${life}`;
        if(life==3) {
            document.getElementById("HeartFour").style.display = "none";
        }else if (life==2) {
            document.getElementById("HeartThree").style.display = "none";
        }else if (life<=1) {
            document.getElementById("HeartOne").style.display = "none";
        }life -= 1;
    }
    function GameOver(){
        document.getElementById("GameOverScreen").style.display= "block";

    }

console.log("test")
document.body.addEventListener("keydown", function(e)
{
    console.log(e)

    if(e.key==='a'){
        Keys.left=true;
        
    }
    if(e.key==='d')
    {
        Keys.right=true
    }
})

document.addEventListener("keyup", function(e)
{
    if(e.key==='a')
    {
        Keys.left=false;
    }
    if(e.key==='d')
    {
        Keys.right=false;
    }
})
const loop=()=>
    {
        if(Keys.left)
        {   
            MovePlayerLeft();
            console.log('left')
        }
        if(Keys.right)
        {
            MovePlayerRight();
            console.log('right')
        }
        
    }
const buletShootingLoop=()=>
    {
        
    arrayOfbulets.push(new Bullet())
    }
const bulletMoveLoop=()=>
{
    for(let i=0;i<arrayOfbulets.length;i++)
    {
        
        arrayOfbulets[i].prosent-=1
        arrayOfbulets[i].UpdatePos()
        if(arrayOfbulets[i].prosent<=0)
        {
            arrayOfbulets[i].img.remove()
            delete arrayOfbulets[i]
            arrayOfbulets.splice(i,1)

        }
    }
    console.log(arrayOfbulets[0],arrayOfbulets[1])
}
setInterval(loop,15)
setInterval(buletShootingLoop,1500)
setInterval(bulletMoveLoop,25)
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