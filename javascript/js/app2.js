function onClickMe() {
	this.textContent = "You Clicked me!";
}

var btnClickMe = document.querySelector(".btn1");
btnClickMe.addEventListener("click",onClickMe);