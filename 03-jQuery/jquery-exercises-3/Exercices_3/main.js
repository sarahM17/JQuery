 // Write your solution here

let num = 0;
let count = Math.floor((Math.random()*100)+1);

$("#button").on("click", function(){
    let text1 = $("#text1").val()
    num++;

    document.getElementById("textanswer").innerHTML = 'Guess a number between 1 and 100!';

    if(text1 < count){
        document.getElementById("textanswer").innerHTML = 'More'
    }
    else if(text1 > count){
        document.getElementById("textanswer").innerHTML = 'Less'
    }
    else {
        document.getElementById("textanswer").innerHTML = 'Right, this is the correct answer';
        alert("It only took" + " " + num + " " + "tries to guess the right number")
    }
});
 

