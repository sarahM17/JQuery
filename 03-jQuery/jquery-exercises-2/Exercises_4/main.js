// Write your solution here


$("#red, #blue, #green").on("click", function(){
    switch(thid.id) {
        case "red":
        $("#text").css({"color" : "red"});
        break;
        case "blue":
        $("#text").css({"color" : "blue"});
        break;
        case "green":
        $("#text").css({"color" : "green"});
        break;
    }
});

