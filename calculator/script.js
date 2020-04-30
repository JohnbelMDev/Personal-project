//
// function add() {
//     var x = Number(document.getElementById('1').value);
//     var y = Number(document.getElementById('2').value);
//      var total = x+y;
//     document.getElementById('result').innerHTML = total;
//
// }

// var result = document.getElementById("result");

// using annonymous fucntion storing id element from html
var add = document.getElementById('add');
add.addEventListener('click',() =>{
  var num1 = parseInt(document.getElementById("num1").value);

  var num2 = parseInt(document.getElementById("num2").value);

  // console.log(num1);
var total= num1 + num2;
// console.log(total);
var result = document.getElementById("result");


// innerHTML
result.innerHTML=total;

});


// using annonymous fucntion storing id element from html
var multiply = document.getElementById('multiply');
multiply.addEventListener('click',() =>{
  var num1 = parseInt(document.getElementById("num1").value);

  var num2 = parseInt(document.getElementById("num2").value);

  // console.log(num1);
var total= num1 * num2;
 console.log(total);

var result = document.getElementById("result");

// innerHTML
result.innerHTML=total;

});


// using annonymous fucntion storing id element from html
var divide = document.getElementById('division');
divide.addEventListener('click',() =>{
  var num1 = parseInt(document.getElementById("num1").value);

  var num2 = parseInt(document.getElementById("num2").value);

  var total= num1 / num2;
  // console.log(total);

  var result = document.getElementById("result");

  // innerHTML
  // result.innerHTML=total;

if(num1==0 || num2==0)
{
  console.log("NAN");
  result.innerHTML=total;

  document.getElementById("result").innerHTML = "nan";

}
else {
  result.innerHTML=total;

}
  // console.log(num1);
// var total= num1 / num2;
// // console.log(total);
//
// var result = document.getElementById("result");
//
// // innerHTML
// result.innerHTML=total;

});



var substraction = document.getElementById('substraction');
substraction.addEventListener('click',() =>{
  var num1 = parseInt(document.getElementById("num1").value);

  var num2 = parseInt(document.getElementById("num2").value);

  // console.log(num1);
var total= num1 - num2;
 console.log(total);

var result = document.getElementById("result");

// innerHTML
result.innerHTML=total;

});


// var multiply = document.getElementById('division');
// add.addEventListener('click',() =>{
//   var num1 = parseInt(document.getElementById("num1").value);
//
//   var num2 = parseInt(document.getElementById("num2").value);
//
//   // console.log(num1);
// var total= num1 / num2;
// // console.log(total);
//
//
// // innerHTML
// result.innerHTML=total;
//
// });
