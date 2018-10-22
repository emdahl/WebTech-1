window.onscroll = function() {makewhite()};

function makewhite(){
	var phone = document.getElementById("dv1").offsetTop;
	var phone2 = document.getElementById("dv2").offsetTop;
	var phone3 = document.getElementById("dv3").offsetTop;
	var phone4 = document.getElementById("dv4").offsetTop;
	var docscroll = document.documentElement.scrollTop;
	var feature = document.getElementById("feature");
	var feature2 = document.getElementById("feature2");
	var feature3 = document.getElementById("feature3");
	var feature4 = document.getElementById("feature4");
	var contentA = document.getElementById("contentA");
	var contentB = document.getElementById("contentB");
	var contentC = document.getElementById("contentC");
	var contentD = document.getElementById("contentD");

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

