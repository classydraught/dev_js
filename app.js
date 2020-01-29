var num1 = document.getElementById("nuM1");
var num2 = document.getElementById("nuM2");
var result = document.getElementById("resulT");
document.getElementById("myForm").addEventListener("submit", function() {
  if (!num1.value || !num2.value) {
    alert("Enter valid values");
  } else {
      resultVal=parseFloat(num1.value) / parseFloat(num2.value);
      resultVal=resultVal*100;
    document.getElementById("resulT").innerHTML =
      "Result : " + resultVal+"%";
  }
});


//one more way to change content inside the DOM is by using the following code.
//
//resulT.innerText="blah blah!!!";
// 
//but if we do so we need to add an event in the function(event) and then ask the DOM
//
//to say 
//
//event.preventDefault();


//call backs in javascript
//
//<script> 
//  
//   // add() function is called with arguments a, b 
//   // and callback, callback will be executed just  
//   // after ending of add() function 
//   function add(a, b , callback){ 
//   document.write(`The sum of ${a} and ${b} is ${a+b}.` +"<br>"); 
//   callback(); 
//   } 
//   
//   // add() function is called with arguments given below 
//   add(5,6,function disp(){ 
//   document.write('This must be printed after addition.'); 
//   }); 
//     
//</script> 