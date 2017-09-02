window.onscroll = function() {
  scr();
}
window.onresize= function() {
	document.body.style.height=8250+window.innerHeight+"px";
}
var lastScrolltop=0, ismenushowed=1;
function scr() {
  var top = window.pageYOffset;
  if (top <= 1000) {
    var opac = top / 500;
    document.getElementById("meetanim").style.opacity = 1 - opac;
    document.getElementById("meetanim").style.zIndex = 2;
  }
  if (top > 1000) {
    document.getElementById("meetanim").style.zIndex = 0;
    document.getElementById("meetanim").style.opacity = 0;
  }
  if (top > 1000 && top < 1250) {
    document.getElementById("wrapper1").style.width = 0 + "%";
    document.getElementById("op1").style.display="none";
    document.getElementById("op2").style.display="none";
    document.getElementById("op3").style.display="none";
    document.getElementById("op4").style.display="none";
}

  if (top >= 1250 && top <= 1750) {
 	document.getElementById("op1").style.display="block";
    document.getElementById("op2").style.display="none";
    document.getElementById("op3").style.display="none";
    document.getElementById("op4").style.display="none";
    document.getElementById("wrapper1").style.width = (top - 1250) / 10 + "%";
    if (top >= 1250 && top < 1500) {
      document.getElementById("hdr1").style.opacity = 0;
      document.getElementById("txt1").style.opacity = 0;
    }
    if (top >= 1500 && top <= 1750) {
      document.getElementById("hdr1").style.opacity = (top - 1500) / 250;
      document.getElementById("txt1").style.opacity = (top - 1500) / 250;
    }
  }
  if (top >= 1750 && top <= 2250) {
  	document.getElementById("op1").style.display="block";
    document.getElementById("op2").style.display="none";
    document.getElementById("op3").style.display="none";
    document.getElementById("op4").style.display="none";
    document.getElementById("wrapper1").style.width = "50%";
    document.getElementById("hdr1").style.opacity = 1;
    document.getElementById("txt1").style.opacity = 1;
  }
  if (top >= 2250 && top <= 2750) {
  	document.getElementById("op1").style.display="block";
    document.getElementById("op2").style.display="none";
    document.getElementById("op3").style.display="none";
    document.getElementById("op4").style.display="none";
    document.getElementById("wrapper1").style.width = (500 - (top - 2250)) / 10 + "%";
    if (top >= 2250 && top <= 2500) {
      document.getElementById("hdr1").style.opacity = (250 - (top - 2250)) / 250;
      document.getElementById("txt1").style.opacity = (250 - (top - 2250)) / 250;
    }
    if (top > 2500 && top <= 2750) {
      document.getElementById("hdr1").style.opacity = 0;
      document.getElementById("txt1").style.opacity = 0;
    }
  }
  if (top > 2750 && top < 3000) {
  	document.getElementById("op1").style.display="none";
    document.getElementById("op2").style.display="none";
    document.getElementById("op3").style.display="none";
    document.getElementById("op4").style.display="none";
    document.getElementById("wrapper1").style.width = "0%";
    document.getElementById("wrapper2").style.width = "0%";
  }
  if (top >= 3000 && top <= 3500) {
  	document.getElementById("op1").style.display="none";
    document.getElementById("op2").style.display="block";
    document.getElementById("op3").style.display="none";
    document.getElementById("op4").style.display="none";
    document.getElementById("wrapper2").style.width = (top - 3000) / 10 + "%";
    if (top >= 3000 && top < 3250) {
      document.getElementById("hdr2").style.opacity = 0;
      document.getElementById("txt2").style.opacity = 0;
    }
    if (top >= 3250 && top <= 3500) {
      document.getElementById("hdr2").style.opacity = (top - 3250) / 250;
      document.getElementById("txt2").style.opacity = (top - 3250) / 250;
    }
  }
   if (top >= 3500 && top <= 4000) {
   	document.getElementById("op1").style.display="none";
    document.getElementById("op2").style.display="block";
    document.getElementById("op3").style.display="none";
    document.getElementById("op4").style.display="none";
    document.getElementById("wrapper2").style.width = "50%";
    document.getElementById("hdr2").style.opacity = 1;
    document.getElementById("txt2").style.opacity = 1;
  }
  if (top >= 4000 && top <= 4500) {
  	document.getElementById("op1").style.display="none";
    document.getElementById("op2").style.display="block";
    document.getElementById("op3").style.display="none";
    document.getElementById("op4").style.display="none";
    document.getElementById("wrapper2").style.width = (500 - (top - 4000)) / 10 + "%";
    if (top >= 4000 && top <= 4250) {
      document.getElementById("hdr2").style.opacity = (250 - (top - 4000)) / 250;
      document.getElementById("txt2").style.opacity = (250 - (top - 4000)) / 250;
    }
    if (top > 4250 && top <= 4500) {
      document.getElementById("hdr2").style.opacity = 0;
      document.getElementById("txt2").style.opacity = 0;
    }
  }
  if (top > 4500 && top < 4750) {
  	document.getElementById("op1").style.display="none";
    document.getElementById("op2").style.display="none";
    document.getElementById("op3").style.display="none";
    document.getElementById("op4").style.display="none";
    document.getElementById("wrapper2").style.width = "0%";
    document.getElementById("wrapper1").style.width = "0%";
  }
  if (top >= 4750 && top <= 5250) {
  	document.getElementById("op1").style.display="none";
    document.getElementById("op2").style.display="none";
    document.getElementById("op3").style.display="block";
    document.getElementById("op4").style.display="none";
    document.getElementById("wrapper1").style.width = (top - 4750) / 10 + "%";
    if (top >= 4750 && top < 5000) {
      document.getElementById("hdr3").style.opacity = 0;
      document.getElementById("txt3").style.opacity = 0;
    }
    if (top >= 5000 && top <= 5250) {
      document.getElementById("hdr3").style.opacity = (top - 5000) / 250;
      document.getElementById("txt3").style.opacity = (top - 5000) / 250;
    }
  }
   if (top >= 5250 && top <= 5750) {
   	document.getElementById("op1").style.display="none";
    document.getElementById("op2").style.display="none";
    document.getElementById("op3").style.display="block";
    document.getElementById("op4").style.display="none";
    document.getElementById("wrapper1").style.width = "50%";
    document.getElementById("hdr3").style.opacity = 1;
    document.getElementById("txt3").style.opacity = 1;
  }
  if (top >= 5750 && top <= 6250) {
  	document.getElementById("op1").style.display="none";
    document.getElementById("op2").style.display="none";
    document.getElementById("op3").style.display="block";
    document.getElementById("op4").style.display="none";
    document.getElementById("wrapper1").style.width = (500 - (top - 5750)) / 10 + "%";
    if (top >= 5750 && top <= 6000) {
      document.getElementById("hdr3").style.opacity = (250 - (top - 5750)) / 250;
      document.getElementById("txt3").style.opacity = (250 - (top - 5750)) / 250;
    }
    if (top > 6000 && top <= 6250) {
      document.getElementById("hdr3").style.opacity = 0;
      document.getElementById("txt3").style.opacity = 0;
    }
  }
  if (top > 6250 && top < 6500) {
  	document.getElementById("op1").style.display="none";
    document.getElementById("op2").style.display="none";
    document.getElementById("op3").style.display="none";
    document.getElementById("op4").style.display="none";
    document.getElementById("wrapper1").style.width = "0%";
    document.getElementById("wrapper2").style.width = "0%";
  }
  if (top >= 6500 && top <= 7000) {
  	document.getElementById("op1").style.display="none";
    document.getElementById("op2").style.display="none";
    document.getElementById("op3").style.display="none";
    document.getElementById("op4").style.display="block";
    document.getElementById("wrapper2").style.width = (top - 6500) / 10 + "%";
    if (top >= 6500 && top < 6750) {
      document.getElementById("hdr4").style.opacity = 0;
      document.getElementById("txt4").style.opacity = 0;
    }
    if (top >= 6750 && top <= 7000) {
      document.getElementById("hdr4").style.opacity = (top - 6750) / 250;
      document.getElementById("txt4").style.opacity = (top - 6750) / 250;
    }
  }
   if (top >= 7000 && top <= 7500) {
   	document.getElementById("op1").style.display="none";
    document.getElementById("op2").style.display="none";
    document.getElementById("op3").style.display="none";
    document.getElementById("op4").style.display="block";
    document.getElementById("wrapper2").style.width = "50%";
    document.getElementById("hdr4").style.opacity = 1;
    document.getElementById("txt4").style.opacity = 1;
  }
  if (top >= 7500 && top <= 8000) {
  	document.getElementById("op1").style.display="none";
    document.getElementById("op2").style.display="none";
    document.getElementById("op3").style.display="none";
    document.getElementById("op4").style.display="block";
    document.getElementById("wrapper2").style.width = (500 - (top - 7500)) / 10 + "%";
    if (top >= 7500 && top <= 7750) {
      document.getElementById("hdr4").style.opacity = (250 - (top - 7500)) / 250;
      document.getElementById("txt4").style.opacity = (250 - (top - 7500)) / 250;
    }
    if (top > 7750 && top <= 8000) {
      document.getElementById("hdr4").style.opacity = 0;
      document.getElementById("txt4").style.opacity = 0;
    }
  }
  if (top > 8000 && top < 8250) {
  	document.getElementById("op1").style.display="none";
    document.getElementById("op2").style.display="none";
    document.getElementById("op3").style.display="none";
    document.getElementById("op4").style.display="none";
    document.getElementById("wrapper2").style.width = "0%";
  }
}
    var curslide=1;
    var btn1=document.getElementById('arrow-left');
    var btn2=document.getElementById('arrow-right');
    var cont=document.getElementById('container_slider');
    function rotat(direction){
      if(direction=="right" && curslide!=4){
        cont.style.left=-(curslide*100)+"%";
        curslide++;
      }
      if(direction=="left" && curslide!=1){
        cont.style.left=-((curslide-2)*100)+"%";
        curslide--;
      }
      //block buttons
      if(curslide==1){
        btn1.style.color="gray";
        btn1.style.cursor="default";
      }
      else if(curslide==4){
        btn2.style.color="gray";
        btn2.style.cursor="default";
      }
      else{
        btn1.style.color="black";
        btn2.style.color="black";
        btn1.style.cursor="pointer";
        btn2.style.cursor="pointer";
      }
    }