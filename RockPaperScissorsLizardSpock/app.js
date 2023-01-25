const button = document.querySelector('.btn');
var userClick;
var computerPicked;
// The dollar sign is the short cut for document.getElementById(). If you want to use it use the last link line in the head section.
//#region Giving random inputs using a switch statement.
$(document).ready(function(){
    $("button").click(function() {
        userClick =this.id;
        computerPicked = Math.floor(Math.random() * 5);
        switch (computerPicked) {
            case 0 : computerPicked = "rock";
            break
            case 1 : computerPicked = "paper";
            break
            case 2 : computerPicked = "scissors";
            break
            case 3 : computerPicked = "Lizard";
            break
            case 4 : computerPicked = "Spock";
            break
        }
        var result = ComparePicks(computerPicked);
    $('.result').html("Computer Choice: " + computerPicked  + "<br>" + "User Choice: " + userClick + "<br>" + "Result is....." + result + "!!!!");
    });
});
//#endregion

//#region Compare computers choice against users choice. 
function ComparePicks(choice) {
    if (userClick === choice) {
        return `The computer chose ${choice} as well!!!`;
    } else if (userClick === "rock") {
        if (choice === "paper") {
            return "paper covers rock <br> You Lose :\(";
              } else if (choice === "scissors") {
            return "rock crushes scissors <br> You Win! :\)";
              } else if (choice === "lizard") {
                  return "rock crushes lizard <br> You Win! :\) ";
              } else {
                  return "spock vaporizes rock <br> You Lose :\(";
              }
          } else if (userClick === "paper") {
              if (choice === "rock") {
                  return "paper covers rock <br> You Win! :\)";
              } else if (choice === "scissors") {
                  return "scissors cut paper <br> You Lose :\(";
              } else if (choice === "lizard") {
                  return "lizard eats paper <br> You Lose :\(";
              } else {
                  return "paper disproves spock <br> You Win! :\)";
              }
          }else if (userClick === "scissors") {
              if (choice === "rock") {
                  return "rock crushes scissors <br> You Lose :\(";
              } else if (choice === "paper") {
                  return "scissors cut paper <br> You Win! :\)";
              } else if (choice === "lizard") {
                  return "scissors decapitate lizard <br> You Win! :\)";
              } else {
                  return "spock smashes scissors <br> You Lose :\(";
              }
          } else if (userClick === "lizard") {
              if (choice === "rock") {
                  return "rock crushes lizard <br> You Lose :\(";
              } else if (choice === "paper") {
                  return "lizard eats paper <br> You Win! :\)";
              } else if (choice === "scissors") {
                  return "scissors decapitate lizard <br> You Lose :\(";
              } else {
                  return "lizard poisons spock <br> You Win! :\)";
              }
          } else if (userClick === "spock") {
              if (choice === "rock") {
                  return "spock vaporizes rock <br> You Win! :\)";
              } else if (choice === "paper") {
                  return "paper disproves spock <br> You Lose :\(";
              } else if (choice === "scissors") {
                  return "spock smashes scissors <br> You Win! :\) ";
              } else {
                  return "lizard poisons spock <br> You Lose :\(";
              }
    }
}
//#endregion

//#region Logging the user picks
function log(id) {
    if(id == computerPicked){
        return `Computer picked ${computerPicked} aswell! its a tie!`;
    }
    else if (id == "rock") {
        console.log('Rock has been picked!');
    } else if ( id == "paper")
    {
        console.log('Paper has been picked!');
    } else if ( id == "scissors")
    {
        console.log('Scissors has been picked!');
    }else if ( id == "lizard")
    {
        console.log('Lizard has been picked!');
    }else
    {
        console.log('Spock has been picked!');
    }
  };
//#endregion 

