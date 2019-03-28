 // Write your solution here
let counter=0;

$("#button1").click(function(){
    counter++;    
    $("input").val(counter);
});

$("#button2").click(function(){
    counter--;
    $("input").val(counter);
});
 

