
document.getElementsByClassName("div2")[0].style.left = -10;

window.onscroll = function() {makewhite()};

const feature = document.getElementById("feature");
const feature2 = document.getElementById("feature2");
const feature3 = document.getElementById("feature3");
const feature4 = document.getElementById("feature4");
const listoffeatures = [feature, feature2, feature3, feature4];
const contentA = document.getElementById("contentA");
const contentB = document.getElementById("contentB");
const contentC = document.getElementById("contentC");
const contentD = document.getElementById("contentD");
const listofcontent = [contentA, contentB, contentC, contentD];

function makewhite(){
	const phone = document.getElementById("dv1").offsetTop;
	const phone2 = document.getElementById("dv2").offsetTop;
	const phone3 = document.getElementById("dv3").offsetTop;
	const phone4 = document.getElementById("dv4").offsetTop;
	var docscroll = document.documentElement.scrollTop;
	
	if(docscroll > phone && docscroll < phone2){
		feature.style.backgroundColor = "white";
		feature2.style.backgroundColor = "#373E56";
		contentA.style.color = "#373E56";
		contentB.style.color = "white";
		}
	if(docscroll > phone2 && docscroll < phone3){
		feature.style.backgroundColor = "#373E56";
		feature2.style.backgroundColor = "white";
		feature3.style.backgroundColor = "#373E56";
		contentA.style.color = "white";
		contentC.style.color = "white";
		contentB.style.color = "#373E56";
	}
	if(docscroll > phone3 && docscroll < phone4){
		feature2.style.backgroundColor = "#373E56";
		feature3.style.backgroundColor = "white";
		feature4.style.backgroundColor = "#373E56";
		contentB.style.color = "white";
		contentD.style.color = "white";
		contentC.style.color = "#373E56";

	}
	if((docscroll > phone4)){
		feature3.style.backgroundColor = "#373E56";
		feature4.style.backgroundColor = "white";
		contentC.style.color = "white";
		contentD.style.color = "#373E56";		
	}
}

function mewhite(string){
	for(i in listoffeatures){
		listoffeatures[i].style.backgroundColor = "#373E56";
		listofcontent[i].style.color = "white";
	}
	document.getElementById(string).style.backgroundColor ="white";
}

function thanksForTheForm(){
	var user = document.getElementById("nameofSub");
	alert("Thank you for your feedback "+ user + ".");
}


