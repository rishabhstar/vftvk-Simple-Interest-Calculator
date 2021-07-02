function compute()
{
    p = document.getElementById("principal").value;
    r= document.getElementById("rate").value;
    y=document.getElementById("years").value;
    
    let cur=2021;
    
    res=(p*r/100)*y;
    let z=cur+parseInt(y);
    document.getElementById("result").innerHTML=res;
    document.getElementById("resul").innerHTML="<br>If you deposit  "+p+"<br>at an interest rate of  "+r+"% <br>"+"You will recieve an amount of "+res+"<br>in the Year "+z;
    
}
        