 // Write your solution here

let c = document.getElementById("myCanvas");
let c1 = c.getContext("2d");
let i = 30;
 
c1.beginPath();
c1.lineWidth = "6";
c1.strokeStyle = "purple";
c1.rect(5, 5, 290, 140);  
c1.stroke();

$("#btn_1").on("click", function(){
    if(i <= 100){
        $("#myCanvas").css('height', `${i}`)
        i += 10
    }
    else{
        $("#myCanvas").css('height', '10px')
    }
})

$("#btn_2").on("click", function(){
    $("#myCanvas").css({"background-color" : "red"})
})

$("#btn_3").on("click", function(){
    $("#myCanvas").css({"background-color" : "purple"})
})

$("#btn_4").on("click", function(){
    $("#myCanvas").remove()
})

$("#btn_5").on("click", function(){
    $("#myCanvas").show();
});
