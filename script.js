function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    t = document.getElementById("years").value;
    si=p*r*t/100;
    document.getElementById ('num1').innerHTML ="If you deposit "+p;
    document.getElementById ('num2').innerHTML ="at an interest rate: "+r;

    document.getElementById ('num3').innerHTML ="You will receive,"+si;
    var d = new Date();
    var n = d.getFullYear();
    var x= n+t;
    document.getElementById ('num4').innerHTML ="in the year"+x;

    
}   
