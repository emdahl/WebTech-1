var form = document.getElementById("theform");
var thelist = document.getElementById("the-list");
var tasks = [];


form.addEventListener("submit", addTask);


function addTask(event){
	event.preventDefault();
	var list = [[document.getElementById("inputfield").value], [Date.now()]];
	tasks.unshift(list);
	console.log(document.getElementById("inputfield").value);
	thelist.innerHTML = '<ul>';
	for (i = 0; i < tasks.length; i++){
		thelist.innerHTML += '<li><input id="'+tasks[i][0]+'" type="checkbox" onclick="updateStatus('+i+')"><label for="'+tasks[i][0]+'"</label>'+tasks[i][0]+'</li>';
	}
	thelist.innerHTML += '</ul>';
	makelist();
}

function updateStatus(inte){
	if(tasks[inte].length == 3){
		document.getElementById(tasks[inte][0]).textDecoration = "none";
		tasks[inte].pop();
	}else{
		console.log(document.getElementById(tasks[0][0]));
		tasks[inte]+=[true];
		document.getElementById(tasks[inte][0].value).textDecoration = "line-through";

	}
	console.log("goes from update");
	makelist();
}

function makelist(){
	console.log("makinglist");
	for(i = 0; i < tasks.length; i++){
		if(tasks[i].length == 3){
			console.log(tasks[i]+"here");
			document.getElementById(tasks[i][0]).style.textDecoration = "line-through";
		}else{
			document.getElementById(tasks[i][0]).style.textDecoration = "none";
		}
	}
}
