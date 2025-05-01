/*
DO NOT DELETE!! This is your tracker for the project!
Store each input as a variable (there should be two input boxes - one for each answer) [ ]
Store the button as a variable (there should be ONE button) [ ]
Create a click handler [ ]
Use the .value property to store user input [ ]
Add console.log to test if the code is being stored [ ]
Write a conditional statement with else-if to include all 4 possible results [ ]
Write a compound conditional statement that uses input from both questions to provide the user with a result [ ]
Write a sentence using string concatenation using the data stored in the user input variables [ ]
Add a next level feature! [ ]
*/
let submit=document.querySelector("button");
let age=document.querySelector(".age"); 
let animal=document.querySelector(".animal");
let result=document.querySelector(".result");
let other=document.querySelector(".other")

submit.onclick=function(){
  if(age.value <=20 && animal.value==="land animal"){
       result.innerHTML="Lion";}
  else if(age.value <=20 && animal.value==="sea animal"){
    result.innerHTML="Orca";
  
  }else if(age.value >=21 && animal.value==="land animal"){
    result.innerHTML="Elephant";
  }else if(age.value >=21 && animal.value==="sea animal"){
    result.innerHTML="Fish"
  }
  
};

    
;
console.log(submit
           );


