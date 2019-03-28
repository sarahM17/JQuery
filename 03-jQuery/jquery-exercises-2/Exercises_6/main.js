// Write your solution here

$("#green, #red, #blue").mouseover(function(){
    switch(expression) {
        case "green":
        $("#text").css({"color" : "green"});
        break;

        case "red":
        $("#text").css({"color" : "red"});
        break;

        case "blue":
        $("#text").css({"color" : "blue"});
        break;

        default:
        $("#text").css({"color" : "black"});
        break;
  }
});

$("#geen, #red, #blue"). mouseleave(function(){
    $("#text").css({"color" : "black"})
});

