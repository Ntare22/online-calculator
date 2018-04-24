var screen = document.getElementById("screen")
var number1 = document.getElementById("num1");
var number2 = document.getElementById("num2");
var number3 = document.getElementById("num3");
var number4 = document.getElementById("num4");
var number5 = document.getElementById("num5");
var number6 = document.getElementById("num6");
var number7 = document.getElementById("num7");
var number8 = document.getElementById("num8");
var number9 = document.getElementById("num9");
const number0 = document.getElementById("num0");
var plussign = document.getElementById("plus");
var multiplication = document.getElementById("multiply");
var division = document.getElementById("divide");
var subtraction = document.getElementById("minus");
var point = document.getElementById("point");
var equate = document.getElementById("equals");




function enterNumber(numbers) {
	var numbers = [number0, number1,number2,number3, number4, number5, number6, number7, number8, number9];
		for (var i = 0; i < numbers.length; i++) {
			
			// function to help us click on numbers
			function clickNumbers(event) {
				alert("You clicked a number");

			};

		numbers[i].addEventListener('click', clickNumbers());
	}
};

