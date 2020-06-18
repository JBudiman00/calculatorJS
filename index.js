$(document).ready(function() {

    $('#btnAdd').css({fontWeight:'bold'});
    $('#btnSub').css({fontWeight:'bold'});
    $('#btnMulti').css({fontWeight:'bold'});
    $('#btnDiv').css({fontWeight:'bold'});
})

$(function(){
    $('#btnAdd').on('click', function() {
        result = retrieveValues();
        $('#lblAnswer').text(parseInt(result[0])+parseInt(result[1]));
    });
    $('#btnSub').on('click', function() {
        result = retrieveValues();
        $('#lblAnswer').text(result[0]-result[1]);
    });
    $('#btnMulti').on('click', function() {
        result = retrieveValues();
        $('#lblAnswer').text(result[0]*result[1]);
    });
    $('#btnDiv').on('click', function() {
        result = retrieveValues();
        var ans = result[0] / result[1];
        ans += result[1] % result[0];
        $('#lblAnswer').text(ans);
    });
})

function retrieveValues()
{
    var input1 = $("#tb1").val();
    var input2 = $("#tb2").val();
    return [input1, input2];
}