// SHOPPING LIST

let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");

//for preventing empty list
function inputLength() {
	return input.value.length;
}

//creating new li and adding class 
function createListElement() {
	let li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	/*li.addEventListener("click", function(){
		li.classList.toggle("done")})*/
	ul.appendChild(li);
	let btnDone=document.createElement("button");
	btnDone.appendChild(document.createTextNode("Done!"))
	ul.appendChild(btnDone)
	btnDone.addEventListener("click",function(){
		li.classList.toggle("done")});
	let btn=document.createElement("button");
	btn.innerHTML="Delete";
	btn.addEventListener("click",function(){
		btn.remove();
		btnDone.remove();
		li.remove();
	})
	ul.appendChild(btn);
	input.value = "";	
}

//Adding .done class to current items
let liCurrent=document.querySelectorAll("li");
let btnDoneCurrent=document.querySelectorAll(".currentDone")
for(let i=0; i<btnDoneCurrent.length; i++){
	btnDoneCurrent[i].addEventListener("click", function(){
		liCurrent[i].classList.toggle("done")
	})
}

//Adding delete feture to "Delete" button
let btnDeleteCurrent=document.querySelectorAll(".currentDelete")
for(let i=0; i<btnDeleteCurrent.length; i++){
	btnDeleteCurrent[i].addEventListener("click",function(){
		this.remove();
		btnDoneCurrent[i].remove();
		liCurrent[i].remove();
	})
}

// "click" function will be active if there is any value
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

// "keyboard" function will be active if there is any value
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


