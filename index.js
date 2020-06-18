function doAdd()
{
    var input1 = document.getElementById("tb1").value;
    var input2 = document.getElementById("tb2").value;

    var ans = parseInt(input1) + parseInt(input2);

    document.getElementById('lblAnswer').innerHTML = ans;
}

function doSubtract()
{
    var input1 = document.getElementById("tb1").value;
    var input2 = document.getElementById("tb2").value;

    var ans = parseInt(input1) - parseInt(input2);

    document.getElementById('lblAnswer').innerHTML = ans;
}

function doMultiply()
{
    var input1 = document.getElementById("tb1").value;
    var input2 = document.getElementById("tb2").value;

    var ans = input1 * input2;

    document.getElementById('lblAnswer').innerHTML = ans;
}

function doDivide()
{
    var input1 = document.getElementById("tb1").value;
    var input2 = document.getElementById("tb2").value;

    var ans = input1 / input2;
    ans += input2 % input1;

    document.getElementById('lblAnswer').innerHTML = ans;
}