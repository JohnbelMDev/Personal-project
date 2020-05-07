var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");

var plus = document.getElementById("plus");
//Creating minus variable assigning minus and passing minus as string in oder to get the ID
var minus = document.getElementById("minus");
var minus = document.getElementById("minus");
var multiply = document.getElementById("multiply");

var equal = document.getElementById("equal");
var clear = document.getElementById("clear");


one.addEventListener("click", getInput);
two.addEventListener("click", getInput);
three.addEventListener("click", getInput);
four.addEventListener("click", getInput);
plus.addEventListener("click", getInput);
//calling the addEventListener function and passing click as a string in order to listen to detect which button has been pressed
minus.addEventListener("click", getInput);
multiply.addEventListener("click",getInput);
equal.addEventListener("click", getInput);
clear.addEventListener("click", getInput);


var num = "";
var total;
var display = []
//creating function call getInput
function getInput(){

  // console.log("at the begining")
//checking if the value to clear it
  if(this.value == "clear"){
    //Getting the value and set it an empty string
    document.getElementById("display").value = ""
    display = [];
    console.log("I am inside where it says clear on line 40=" + display);
  }
//checking if the buttton with the equal sign is press to display value
  if(this.value == "="){
    console.log("I am inside the equal operator on line 44")

    var exp = display.join("")
    console.log("I am inside the equal operator on line 47=" + exp);
    total += exp;
    console.log("line 49" + total);


   //setting value to an empty string
    var values = [];
    console.log("I am inside the equal operator on line 52=" + values);

    //assigning num to an empty string
    var num = "";
    console.log("I am inside the equal operator on line 56=" + num);

    //setting to total to equal zero
    //creating a varialle with the "+" operator
    var ps = "+"
    console.log("I am inside the equal operator on line 61=" + ps);

    //looping through lenght
    for(i=0; i<= exp.length; i++){
      //checking if the exp is equal to it's sels
        if(parseInt(exp[i]) == parseInt(exp[i])){
          console.log("I am inside the equal operator on line 67 =" + exp[i]);

          //num=num+ exp[i]
          //adding num with the index of exp
          num = num + exp[i]
          console.log("I am inside the paseint where it said equal with the other line 72 ex =" + num);

        }
        //checking if the exp is equal to the add operator
        if(exp[i] == "+"){
          //pushing the value ontop of num
          values.push(parseInt(num));
          console.log("I am inside the adding operator =" + values);
          console.log("I am inside the adding operator displaying line 80 num=" + num);

          //setting num to an equal string
          num = "";
          console.log("I am inside the adding operator where num is equal an empty string line 84=" + exp[i]);

        }

        if(exp[i] == "*"){
          ps="*";
          console.log("I am on line 90 =" + ps);
          num*=exp[i]
          var m=num;
            values.push(parseInt(num) * m);
            console.log("I am on line 94 =" + values);
             num=num*exp[i];
             console.log("I am on line 96=" + num)
          num = "";
          console.log("I am on line 98=" + num)

        }


        if(exp[i] == "-"){
          ps = "-"
          values.push(parseInt(num));
          console.log("I am inside the where it the operator is negative on line 106=" + ps);
          console.log("I am inside the where it the operator is negative on line 107=" + num);

          num = "";
          console.log("I am inside the where it the operator is negative on line 110=" + num);

        }
    }
    if (ps == "-"){
        values.push(parseInt(num) * -1);
        console.log("I am on line 116=" + values);
    }
    //first else
    else{
      values.push(parseInt(num));
      console.log("inside the first else line 121=" + values);
      total+=values;
      console.log("inside the first else displaying the line 123 num=" + num + total);
    }
     ///outside of first else
    document.getElementById("display").value = values.reduce(function(a,b){return a +b;});
    console.log("Outside of first else line 127=" + values);
     total+=values;
     console.log("line 129"+ total);
    display = [];
    console.log("Outside of first else line 131=" + values);
    console.log("Outside of first else line 132=" + display);

  }
  //second else
  else{
    console.log("inside 2rd else line 137")
    if(this.value == "clear"){
        document.getElementById("display").value = "";
    }
    //third else
    else{
      console.log("inside 3rd else. will display line 142= " + this.value)
      // console.log(this.value)
      display.push(this.value)
      document.getElementById("display").value = display.join("")
    }
  }


}
