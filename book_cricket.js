var i=0;
var d;
var e;
var b=0;
$(document).ready( function() {
  $('.fd').hide();
  $('.hell').hide();
  $('.hello').hide();
  $('.hi').hide();
  $('.bye').hide();
  $('.gd').hide();
    $('.play').click( function() {
    $('.play').hide();
    $('.gd').fadeIn('slow');
    $('.bat').html('Batting');
    $('.bowl').html('Bowling');
  });
  $('.bat').click( function() {
    d=true;
  });
  $('.bowl').click( function() {
    d=false;
  });
  $('.ba').click( function() {
    i+=1;
    $('.ba').hide();
    $('.fd').fadeIn('fast');
  });
  $('.su').click( function() {
    compare();
    if (i>=3){
      $('.fd').hide();
      $('.play').html('Play Again');
      $('.play').fadeIn('fast');
      i=0;
    }
  else if (b==1) {
    b=0;
    i+=1;
    $('.fd').hide();
    if (d==true){
      $('.bat').show();
    }
    if (d==false){
      $('.bowl').show();
    }
  }
  $('.hell').fadeIn('fast');
  $('.hello').fadeIn('fast');
  $('.hi').fadeIn('fast');
  $('.bye').fadeIn('fast');
  });
});



var run1 = 0;
var run2 =0;
function getCheckedRadioValue(radioGroupName) {
  var rads = document.getElementsByName(radioGroupName),
    i;
  for (i=0; i < rads.length; i++)
    if (rads[i].checked)
      return rads[i].value;
  return null;}
var compare=function (){
var checkedValue = getCheckedRadioValue("mode");
var userChoice = parseInt(checkedValue);
var choice1= userChoice;
var computerChoice = Math.random();
if (computerChoice < 0.21) {
computerChoice = 1;
} 
else if(computerChoice < 0.41) {
  computerChoice = 2;
} 
else if(computerChoice < 0.61){
  computerChoice = 3;
} 
else if(computerChoice < 0.81){
  computerChoice = 4;
}
else{
  computerChoice = 6;
}
document.getElementsByClassName('hell')[0].innerHTML="Your Choice : " + userChoice;
document.getElementsByClassName('hello')[0].innerHTML="Computer Choice : " + computerChoice;
var choice2 = computerChoice;
	if(choice1 === choice2){
    if (d == true) {
      document.getElementsByClassName('bye')[0].innerHTML="USER OUT on";
      document.getElementsByClassName('hi')[0].innerHTML=run1;
      run1=0;
      if (i<3){
      document.getElementsByClassName('bowl')[0].innerHTML="Let's bowl";
      b=1;
      d=false;
      }
      return;
    }
    else {
      document.getElementsByClassName('bye')[0].innerHTML="COMPUTER OUT on";
      document.getElementsByClassName('hi')[0].innerHTML=run2;
      run2=0;
      if (i<3){
      document.getElementsByClassName('bat')[0].innerHTML="Let's bat";
      b=1;
      d=true;
      }
      return;
    }
	}
	else {
    if (d == true){
      run1 = run1 + choice1;
      document.getElementsByClassName('bye')[0].innerHTML="USER";
      document.getElementsByClassName('hi')[0].innerHTML=run1;
    }
    else {
      run2 = run2 + choice2;
      document.getElementsByClassName('bye')[0].innerHTML="COMPUTER";
      document.getElementsByClassName('hi')[0].innerHTML=run2;
    }
    
	}
}
/*.-----*/
