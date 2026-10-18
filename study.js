$(document).ready(function(){

    $("h4").mouseover(function(){
        $(this).css("background-color", "pink");
    })

    $("h4").mouseleave(function(){
        $(this).css("background-color", "");
    })


    $("h4").on('click', function(){
        $("li").slideToggle(500);
    })


    $("li").mouseenter(function(){
        $(this).css("background-color", "pink");
    })

    $("li").mouseleave(function(){
        $(this).css("background-color", "");
    })

    $("li").mouseup(function(){
        $(this).css("background-color", "");
    })
    
    $("li").mousedown(function(){
        $(this).css("background-color", "skyblue");
    })


    $("button").on('click',function(){
        $("#Pv").hide();
    })


});

    

