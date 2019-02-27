var  ans1;
var  ans2;
var  ans3;
var  ans4;
var  ans5;
var  ans6;
var  ans7;
var  ans8;
var  ans9;
var  ans10;

$("#Question1").change(function(){
     ans1=$(this).val();
});
$("#Question2") .change(function(){
     ans2= $(this).val();
});
$("#Question3") .change(function(){
     ans3= $(this).val();
});
$("#Question4") .change(function(){
     ans4= $(this).val();
});
$("#Question5") .change(function(){
     ans5= $(this).val();
});
$("#Question6") .change(function(){
     ans6= $(this).val();
});
$("#Question7") .change(function(){
     ans7= $(this).val();
});
$("#Question8") .change(function(){
     ans8= $(this).val();
});
$("#Question9") .change(function(){
     ans9= $(this).val();
});
$("#Question10") .change(function(){
     ans10= $(this).val();
});
//this is the marking scheme
var answers = ['HTML', 'Js', 'var', 'double quotes', 'Arrays', 'JavaScript library', 'non-repetitive code', 'prepend()', 'four', 'yes'];
//these are answers submitted by the user
var forStudent = [];
//this is the final result of the user
var result = [];

//marking process;for correct answers logic
var count =0;
var find = (() => {
  forStudent.push(ans1, ans2, ans3, ans4, ans5, ans6, ans7, ans8, ans9, ans10);
  console.log(forStudent);
  for(var a = 0; a < answers.length ; a++){
    for(var b = 0; b <forStudent.length ; b++){
      if(answers[a] === forStudent[b])
      {
        count = count+1
        console.log("correct" + forStudent[b] + count + "out of 10");
        calculate(count);
      }
      else
      {
        //no function runs in this section
      }
     }
   }
});
//calculation of percentage markings
var calculate = ((number) =>{
  var divide = number / 10;
  var final = divide * 100;
  result.push(final);
});
//everything below this is front-end user interface

$(document).ready(function(){
  //interactive buttons
  $(".btnSubmit").on("click",function(){
    find();
    $(this).hide();
    if(result[result.length-1] === undefined)
    {
      alert("0% ni kidogo sana,rudia");
    }
    else
    {
      //getting the marks by calculation
      var anscheck = parseInt(result[result.length - 1]);
      if(anscheck < 50)
      {
        alert(anscheck + "%" + "ni fair mark,though bado umedunda,rudia.");
      }
      else if(anscheck > 50 || anscheck === 50 && anscheck < 80)
      {
        alert(anscheck + "%" + "ni marks poa,umejaribu.");
      }
      else if(anscheck > 80)
      {
        alert(anscheck + "%" + "ni marks excellent,toka shule.");
      }
    }
  });
});
