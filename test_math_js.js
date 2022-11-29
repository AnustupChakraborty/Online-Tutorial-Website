function check()
{
    var c=0;
    var q1=document.mthtst.question1.value;
    var q2=document.mthtst.question2.value;
    var q3=document.mthtst.question3.value;
    var q4=document.mthtst.question4.value;
    var q5=document.mthtst.question5.value;
    var q6=document.mthtst.question6.value;
    var q7=document.mthtst.question7.value;
    var q8=document.mthtst.question8.value;
    var q9=document.mthtst.question9.value;
    var q10=document.mthtst.question10.value;
    var result=document.getElementById('result');
    if(q1=="1"){c++};
    if(q2=="irrational"){c++};
    if(q3=="6"){c++};
    if(q4=="98 kg"){c++};
    if(q5=="3"){c++};
    if(q6=="p = 7"){c++};
    if(q7=="24 cm"){c++};
    if(q8=="1024"){c++};
    if(q9=="216"){c++};
    if(q10=="480"){c++};
    perc=c*10;
    mthtst.style.display="none";

    if(c<=6)
    {
        result.innerHTML="<table name='t1'id='tab1' border='0px'width='100%'' height='100%'>"+
        "<tr><td class='cel'>You have scored "+perc+"% in this examination.<br><br>You need to work harder and go through the tutorial again.</td>"+
        "</tr><tr><td rowspan='4' class='cel'><a href='mat_maths.html'><button id='btn2'>Go Back To Tutorial</button></a></td></tr></table>"

    }
    else{
        result.innerHTML="<table name='t2'id='tab2' border='0px'width='100%'' height='130%'>"+
        "<tr><td colspan='2'class='cel'>You have scored "+perc+"% in this examination.<br><br>You did really well. Keep it Going.</td>"+
        "</tr><tr><td rowspan='4' class='cel'><a href='Home.html'><button id='btn2'>Go Back To Home</button></a></td><td rowspan='4' class='cel'><a href='mat_maths.html'><button id='btn2'>Go Back To Tutorial</button></a></td></tr></table>"
    }
}