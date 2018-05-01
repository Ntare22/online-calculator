

let screen = document.getElementById("screen")
var allButtons = document.getElementsByClassName('buttons');

	

for (var i = 0; i < allButtons.length; i++) {
	allButtons[i].addEventListener('click', pressButton)
}

function pressButton(event){
	let numID = this.id; // activates ID for each button the event listener above
	let numValue = this.value;
	screen.innerHTML = numValue;
	concantenateNum()
};

function concantenateNum() {
	
}

