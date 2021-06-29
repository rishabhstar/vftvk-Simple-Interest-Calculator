function compute()
{
    p = document.getElementById("principal").value;
    r= document.getElementById("rate").value;
    y=document.getElementById("years").value;
    
    res=p*r*y
    document.getElementById("result").innerHTML=res-p
    document.getElementById("resul").innerHTML="If you deposit<br>"+ res+"at an interest rate of"+r+"% <br>"+"You will recieve an amount of <br>"+res ;
    
}
        