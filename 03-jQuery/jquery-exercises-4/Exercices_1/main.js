 // Write your solution here
let win = 0;
let defeat = 0;

let computer = ["Rock", "Paper", "Scissors"];
let answer = "";

$('#text_1').click(function(){
    answer = "Rock";
    $('#answer').html(answer);
    console.log(answer);
  });
  
$('#text_2').click(function(){
    answer = "Paper";
    $('#answer').html(answer);
    console.log(answer);
  });
  
$('#text_3').click(function(){
    answer = "Scissors";
    $('#answer').html(answer);
    console.log(answer);
  });

$("#btn_1").on("click", function(){

    let computer1 = computer[Math.floor(Math.random()* computer.length)];
    

    if(answer === "Rock"){
        if(computer1 === "Rock"){
            $("#resultat").html("<h3>Equal</h3>"); 
        } else if (computer1 === "Paper"){
            $("#resultat").html("<h3>You lose, paper beats rock!</h3>");
            defeat++;
        } else if (computer1 === "Scissors"){
            $("#resultat").html("<h3>You won, rock beats scissors!</h3>");
            win++;
        }
      
    } else if (answer === "Paper"){
      
        if(computer1 === "Paper"){
            $("#resultat").html("<h3>Equal</h3>");
        } else if (computer1 === "Rock"){
            $("#resultat").html("<h3>You won, paper beats rock!</h3>");
            win++;
        } else if (computer1 === "Scissors"){
            $("#resultat").html("<h3>You lose, rock beats scissors!</h3>");
            defeat++;   
        }
    } else if (answer === "Scissors"){
      
        if(computer1 === "Scissors"){
            $("#resultat").html("<h3>Equal</h3>");    
        } else if (computer1 === "Paper"){
            $("#resultat").html("<h3>You won, scissors beats paper!</h3>");
            win++;   
        } else if (computer1 === "Rock"){
            $("#resultat").html("<h3>You lose, rock beats scissors!</h3>");
            defeat++;
        }
    } else {
      return `What are you doing!`
    }
  });

$("#win").html('<strong>You have won: </strong>' + win);
$("#lost").html('<strong>You have lost: </strong>' + defeat);






