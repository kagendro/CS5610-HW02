function getHistory() {
	return document.getElementById("history-value").innerText;
}

function printHistory(num) {
	document.getElementById("history-value").innerText=num;
}

function getOutput() {
	return document.getElementById("output-value").innerText;
}

function printOutput(num) {
	
	document.getElementById("output-value").innerText=num;

}





var operator = document.getElementsByClassName("operator");

for (var i=0;i<operator.length;i++) {
	operator[i].addEventListener('click',function(){
		if (this.id=="C"){
			printHistory("");
			printOutput("");
		}
		else {
			var output = getOutput();
			alert(getOutput());
			var history = getHistory();
			alert(getHistory());
			if(output!=""){
				history = history + output;
			}
			else{
				var result=eval(history);
				printOutput(result);
			}
		}	
	});
}

var number = document.getElementsByClassName("number");
for (var i=0;i<number.length;i++) {
	number[i].addEventListener('click',function(){
		var output = getOutput();
		if(output!=NaN){
			output = output + this.id;
			printOutput(output);
		}




	})
}



