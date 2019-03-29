 // Write your solution here

$(document).keydown(function(e){
    switch (e.which){
    case 37:   //arrow key for left
        $("#square").finish().animate({
            left: "-=10px"});
        break;

    case 38:    //arrow key for top
        $("#square").finish().animate({
            top: "-=10px"});
        break;

    case 39:    //arrow key for right
        $("#square").finish().animate({
            left: "+=10px"});
        break;

    case 40:    //arrow key for bottom
        $("#square").finish().animate({
            top: "+=10px"});
        break;
    }
});

