let bold = false;



$(document).ready(function(){
    /* On click: Enlarge the font (120%) */
    $("ol li:nth-child(1)").on("click", function(){
        $("#content").css({"font-size" : "120%"})
    })
    
    /* On click: Decrease the font size (80%) */
    $("ol li:nth-child(2)").on("click", function(){
        $("#content").css({"font-size" : "80%"})
    })

    /* On click: Bold or normalize the green words */
    $("ol li:nth-child(3)").on("click", function(){
        $(".green").toggleClass("bold")
    })

    /*On click: to underline or normalize the words in red */
    $("ol li:nth-child(4)").on("click", function(){
        $('.red').css('text-decoration','underline')
        $(this).click(function(){
            $('.red').css('text-decoration','none')
        })
    })
        
    /* On click: Replace the logo with another image */
    $("ol li:nth-child(5)").mouseover(function(){
        $("img").attr("src",("images/koala.jpg"));})
        .mouseout(function(){
        $("img").attr("src",("images/jquery-logo.png"));    
        })
    
    /* On hover: Display the URL of links in a tooltip when hovering over links */
    $("a").mouseover(function(){
        $(this).attr("title",$(this).attr("href"))
    });
    
    /* On click: add "Chapter 1:" before the 1st title h2 and "Chapter 2:" before the 2nd title h2 */
    $("ol li:nth-child(7)").on("click", function(){
        $("<h2>Chapter 1:</h2>").insertBefore("#content h2:first")
        $("<h2>Chapter 2:</h2>").insertBefore("#content h2:last")
    })

});