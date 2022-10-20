$(document).ready(function(){
    $('.box-result').attr('disabled', true);

    $('.number, .operation, .dot').click(function(){
        //debugger;
        var number = $(this).html();
        var input = $('.box-calculation').val();
        if(input != ""){
            $('.box-calculation').val(input + number);
        }else{
            $('.box-calculation').val(number);
        }
    });

    $('.refresh').click(function(){
        $('.box-calculation').val('')
    });


    $('.del').click(function(){
        var input = $('.box-calculation').val();
        $('.box-calculation').val(input.slice(0, -1));
    });
    $('.equal').click(function(){
        var input = $('.box-calculation').val();
        $('.box-calculation').val(eval(input));
    });
});