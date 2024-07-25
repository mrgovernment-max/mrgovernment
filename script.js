









function play() {
    let guess = document.getElementById("guess_num").value.toUpperCase();


    if (guess === "") {
        // No input provided
        let wrong = document.getElementById("but");
        wrong.style.display = "inline";
    } 
    
    else {
        // Input provided
        let win = document.getElementById("butt");
        win.style.display = "inline";

        let last = document.getElementById("cont")
        last.style.display = "none";

        let wrong = document.getElementById("but");
        wrong.style.display = "none"

        let looss = document.getElementById("guess_num");
        looss.style.display = "none";

        let loosr = document.getElementById("my");
        loosr.style.display = "none";

        let vaa = document.getElementById("try");
        vaa.style.display = "none";

        let darkTheme = document.getElementById("dark")
        darkTheme.style.display = "inline";

        document.body.style.backgroundColor = "black";


        let loosss = document.getElementById("guess_numm");
        loosss.innerHTML = "";

        /* let nova = document.getElementById("check")
        nova.style.display = "block"; */

        let novaa = document.getElementById("rps");
        novaa.style.display = "block";

        console.log("Congratulations! You guessed correctly!");

        alert("Hello " + guess + ", This Is Nova's First Ever JavaScript work. Try It Out!");
    }
}



//Eligibility To Drive
/*
let agee;
let driver;
let wow;


function bring() {
    let agee = parseInt(document.getElementById("ageInput").value);
    let driverr = document.getElementById("driverSelect").value.toLowerCase();

    let wow = document.getElementById("make");


    if (agee >= 18 && driverr === "yes") {
        
        wow.textContent = "Great! You Are Eligible To Drive";
    }

    else{
        wow.textContent="Oops You Are Not Eligible To Drive"
    }
}*/

//Rock Paper scissors Game

var wins = 0;
var losses = 0;
var ties = 0;
var roundsPlayed = 0;




function playGame() {
   

    
let computerGues = Math.random();   /*computer gusses a random number between 0 and 1 */


const rock = computerGues <= 0.33;  /*stores number as rock if less than or equal to 0.33 */
const paper = computerGues > 0.33 && computerGues <= 0.66; 
const scissors = computerGues > 0.66;
const pa = document.getElementsByTagName("h2")[0]

  



    if (rock) {
        pa.textContent = "Nova chose rock too. It's a tie!";
        outcome = 1;
        ties++
        
    }

    else if (paper) {
        pa.textContent = "Nova chose paper. You lost!";
        outcome = 0;
        losses++
        
    
    }

    else if (scissors) {
        pa.textContent = "Nova chose scissors. You won!";
        outcome = 3;
        
        wins++
        
    }

    
    roundsPlayed++
    

    
   
     const gameStats = {
        "wins": wins,
        "losses": losses,
        "ties": ties,
        "roundsPlayed": roundsPlayed}

      // display in console  the result of the when click
     console.log(gameStats)

     if (roundsPlayed === 10) {
       
        alert(  ` End Results :  Wins: ${gameStats.wins}, Losses: ${gameStats.losses}, Ties: ${gameStats.ties}`);
        
        // Reset the game statistics
        wins = 0;
        losses = 0;
        ties = 0;
        roundsPlayed = 0;

        pa.textContent = "Rock Paper scissors"
    }
     
      
    }
  
   
  

   



function playGam() {

    
    let computerGues = Math.random();   /*computer gusses a random number between 0 and 1 */
    
    
    const rock = computerGues <= 0.33;  /*stores number as rock if less than or equal to 0.33 */
    const paper = computerGues > 0.33 && computerGues <= 0.66; 
    const scissors = computerGues > 0.66;
    const pa = document.getElementsByTagName("h2")[0]
    
      
    
    
    
        if (rock) {
            pa.textContent = "Nova chose rock . You Won!";
            outcome = 3;
            wins++
            
        }
    
        else if (paper) {
            pa.textContent = "Nova chose paper too. It's a Tie!";
            outcome = 1;
            ties++
            
        
        }
    
        else if (scissors) {
            pa.textContent = "Nova chose scissors. You lost!";
            outcome = 0;
            
            losses++
            
        }
    
        
        roundsPlayed++
        
    
        
       
         const gameStats = {
            "wins": wins,
            "losses": losses,
            "ties": ties,
            "roundsPlayed": roundsPlayed}
    
          // Now 'outcome' contains the result of the game
         console.log(gameStats)
    
         if (roundsPlayed === 10) {
            alert(  ` End Results :  Wins: ${gameStats.wins}, Losses: ${gameStats.losses}, Ties: ${gameStats.ties}`);
            
        // Reset the game statistics
        wins = 0;
        losses = 0;
        ties = 0;
        roundsPlayed = 0;

        pa.textContent = "Rock Paper scissors"

        }

        
         
          
        }
      
       

    


    
function playGa() {

    

    
    let computerGues = Math.random();   /*computer gusses a random number between 0 and 1 */
    
    
    const rock = computerGues <= 0.33;  /*stores number as rock if less than or equal to 0.33 */
    const paper = computerGues > 0.33 && computerGues <= 0.66; 
    const scissors = computerGues > 0.66;
    const pa = document.getElementsByTagName("h2")[0]
    
      
    
    
    
        if (rock) {
            pa.textContent = "Nova chose rock . You Lost!";
            outcome = 0;
            losses++
            
        }
    
        else if (paper) {
            pa.textContent = "Nova chose paper. You won!";
            outcome = 3;
            wins++
            
        
        }
    
        else if (scissors) {
            pa.textContent = "Nova chose scissors too. It's a Tie!";
            outcome = 1;
            ties++
           
            
        }
    
        
        roundsPlayed++
        
    
        
       
         const gameStats = {
            "wins": wins,
            "losses": losses,
            "ties": ties,
            "roundsPlayed": roundsPlayed}
    
          // Now 'outcome' contains the result of the game
         console.log(gameStats)
    
         if (roundsPlayed === 10) {
            alert(  ` End Results :  Wins: ${gameStats.wins}, Losses: ${gameStats.losses}, Ties: ${gameStats.ties}`);
            
        // Reset the game statistics
        wins = 0;
        losses = 0;
        ties = 0;
        roundsPlayed = 0;

        pa.textContent = "Rock Paper scissors"


        }
         
        
    
    }


    function changeTheme() {
        const body = document.body;
        const darkTheme = document.getElementById("dark");
        const borderTheme =document.getElementById("Rps")
    
        // Check the current theme
        const isDarkTheme = body.style.backgroundColor === "black";
    
        // Toggle themes
        if (isDarkTheme) {
            // Switch to light theme
            body.style.backgroundColor = "white";
            darkTheme.style.backgroundColor = "black";
            darkTheme.style.color = "white";
            darkTheme.textContent = "dark Theme"
            borderTheme.style.borderColor = "azure"
           
        } else {
            // Switch to dark theme
            body.style.backgroundColor = "black";
            darkTheme.style.backgroundColor = "white";
            darkTheme.style.color = "black"; 
            darkTheme.textContent = "white Theme"
            borderTheme.style.borderColor = "white"
        }
    }
    


