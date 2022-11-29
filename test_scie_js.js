function check()
{
    var c=0;
    var q1=document.scietst.question1.value;
    var q2=document.scietst.question2.value;
    var q3=document.scietst.question3.value;
    var q4=document.scietst.question4.value;
    var q5=document.scietst.question5.value;
    var q6=document.scietst.question6.value;
    var q7=document.scietst.question7.value;
    var q8=document.scietst.question8.value;
    var q9=document.scietst.question9.value;
    var q10=document.scietst.question10.value;
    var result=document.getElementById('result');
    if(q1==" (i), (ii) and (iv)"){c++};
    if(q2==" (i) and (ii)"){c++};
    if(q3=="addition of oxygen"){c++};
    if(q4=="addition of hydrogen"){c++};
    if(q5=="(ii) and (iv)"){c++};
    if(q6=="Baking soda"){c++};
    if(q7=="Oxalic acid"){c++};
    if(q8=="Concave mirror as well as convex lens"){c++};
    if(q9=="a convex mirror"){c++};
    if(q10=="all mirrors irrespective of their shape"){c++};
    perc=c*10;
    scietst.style.display="none";

    if(c<=6)
    {
        result.innerHTML="<table name='t1'id='tab1' border='0px'width='100%'' height='100%'>"+
        "<tr><td class='cel'>You have scored "+perc+"% in this examination.<br><br>You need to work harder and go through the tutorial again.</td>"+
        "</tr><tr><td rowspan='4' class='cel'><a href='mat_scie.html'><button id='btn2'>Go Back To Tutorial</button></a></td></tr></table>"

    }
    else{
        result.innerHTML="<table name='t2'id='tab2' border='0px'width='100%'' height='130%'>"+
        "<tr><td colspan='2'class='cel'>You have scored "+perc+"% in this examination.<br><br>You did really well. Keep it Going.</td>"+
        "</tr><tr><td rowspan='4' class='cel'><a href='Home.html'><button id='btn2'>Go Back To Home</button></a></td><td rowspan='4' class='cel'><a href='mat_scie.html'><button id='btn2'>Go Back To Tutorial</button></a></td></tr></table>"
    }
}