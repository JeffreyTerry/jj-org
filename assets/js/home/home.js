$(document).ready(function(){
    function resizeDrawing() {
        var $window = $(window);
        var theReunion = new Date(2015, 0, 10, 12);
        var now = new Date();
        var difference = theReunion.valueOf() - now.valueOf();
        console.log(1 - difference / 1182449609);
        var paddingPercentage = difference / 1182449609;
        var paddingWidth = Math.floor(($window.width() - 292) * (1 - paddingPercentage));
        var scaleWidth = Math.ceil(($window.width() - 292) * paddingPercentage);

        $('.jordan').css('left', 20 + paddingWidth / 2);
        $('.jeff').css('right', 20 + paddingWidth / 2);
        $('.measure').css('left', 140 + paddingWidth / 2);
        $('.measure').find('svg:eq(1)')[0].setAttribute('width', scaleWidth);
        $('.measure').find('svg:eq(1)').children()[0].setAttribute('width', scaleWidth);
    }
    resizeDrawing();
    
    var theReunion = new Date(2015, 0, 10, 12);
    $('#clock').countdown(theReunion, function (event) {
      $(this).html(event.strftime('%-D days<br>%-Hh %Mm %Ss'));
    });

    $(window).resize(function(){
        resizeDrawing();
    });
});

