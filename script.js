setInterval(()=>{
    let day = new Date();
    console.log(day);
    let h = day.getHours();
    let m = day.getMinutes();
    let s = day.getSeconds();
    
    
    document.getElementById("minute").innerHTML=`${m}<br>minutes`;
    document.getElementById("second").innerHTML=`${s}<br>seconds`;
    if(h<=12){
        document.getElementById("hour").innerHTML=`${h}<br>hour`;
    }
    else{
        document.getElementById("hour").innerHTML=`${h-12}<br>hour`;
    }
    let hr = document.getElementById("hh");
    let min = document.getElementById("mm");
    let sec = document.getElementById("ss");
    
    hr.style.transform=`rotate(${h*30}deg)`;
    min.style.transform=`rotate(${m*6}deg)`;
    sec.style.transform=`rotate(${s*6}deg)`;
    
    
    if(h<12){
        document.getElementById("ap").innerHTML="AM";
    }
    else{
        document.getElementById("ap").innerHTML="PM";
    }

},1000)