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

$ ("Question1") .change(function(){
     ans1= $(this).val();
};
$ ("Question2") .change(function(){
     ans2= $(this).val();
};
$ ("Question3") .change(function(){
     ans3= $(this).val();
};
$ ("Question4") .change(function(){
     ans4= $(this).val();
};
$ ("Question5") .change(function(){
     ans5= $(this).val();
};
$ ("Question6") .change(function(){
     ans6= $(this).val();
};
$ ("Question7") .change(function(){
     ans7= $(this).val();
};
$ ("Question8") .change(function(){
     ans8= $(this).val();
};
$ ("Question9") .change(function(){
     ans9= $(this).val();
};
$ ("Question10") .change(function(){
     ans10= $(this).val();
};
//this is the marking scheme
var answers = ['HTML', 'Js', 'var', '"  "', 'Arrays', 'JavaScript library', 'non-repetitive code', 'prepend', 'four', 'yes'];
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
    }
  }
