let container = document.querySelector("#container");
let dino = document.querySelector("#dino");
let cactus = document.querySelector("#cactus");
let clouds = document.querySelector("#clouds");
let score = document.querySelector("#score");
let gameOver = document.querySelector("#gameOver");

//score
let interval = null;
let playerScore = 0;

let scoreCounter = () => {
    playerScore++;
    score.innerHTML = `Score <b>${playerScore}</b>`;
}

window.addEventListener("keydown",(start)=>{
    if(start.code == "Space")
    {
        gameOver.style.display = "none";
        cactus.classList.add("cactusActive");
        //clouds.firstElementChild.style.animation = "cloudAnimate 5s linear infinite";
        let playerScore=0;
        interval = setInterval(scoreCounter,200);
    }
})

//dino jump
window.addEventListener("keydown",(e) => {
    if(e.key == "ArrowUp")
    if(dino.classList!="dinoActive")
    {
        dino.classList.add("dinoActive");
        setTimeout(()=>{
            dino.classList.remove("dinoActive");
        },1000);
    }
})

let result = setInterval(() => {
    let dinoBottom = parseInt(getComputedStyle(dino).getPropertyValue("bottom"));
    //console.log(dinoBottom);
    let cactusLeft = parseInt(getComputedStyle(cactus).getPropertyValue("left"));
    //console.log("blockeft "+ cactusLeft);
      if(dinoBottom<50 && cactusLeft<=160){
      //console.log("game over");  
      gameOver.style.display = "block";  
      cactus.classList.remove("cactusActive");
      clouds.firstElementChild.style.animation = "none";
      clearInterval(interval);
      playerScore=0;
      }
},10)
