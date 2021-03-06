$(document).ready(function(){
    var theReunion = new Date(2015, 7, 22, 22);
    function resizeDrawing() {
        var INITIAL_DIFFERENCE_MILLIS = 1210136393;
        var $window = $(window);
        var now = new Date();
        var difference = Math.max(0, theReunion.valueOf() - now.valueOf());
        var scalePercentage = difference / INITIAL_DIFFERENCE_MILLIS;
        var paddingWidth = Math.floor(($window.width() - 234) * (1 - scalePercentage));
        var scaleWidth = Math.ceil(($window.width() - 234) * scalePercentage);
        console.log(scalePercentage);
        $('.jordan').css('left', 20 + paddingWidth / 2);
        $('.jeff').css('right', 20 + paddingWidth / 2);
        // $('.measure').css('left', 140 + paddingWidth / 2);
        // $('.measure').find('svg:eq(1)')[0].setAttribute('width', scaleWidth);
        // $('.measure').find('svg:eq(1)').children()[0].setAttribute('width', scaleWidth);
    }
    resizeDrawing();
    
    $('#clock').countdown(theReunion, function (event) {
        $(this).html(event.strftime('%-D days<br>%-Hh %Mm %Ss'));
    });

    $(window).resize(function(){
        resizeDrawing();
    });
});

