$(document).ready(function(){  
})
    $('.menu ul').hide();
    $('.menu span').css('background', 'url("down.png")');
    $('#menu li').hover(function(){
        $(this).children("ul").show();
        $(this).find(span).css('background', 'url("right.png")');
        },function(){
        $(this).children("ul").hide();
        $(this).find(span).css('background', 'url("down.png")');
        }
    )