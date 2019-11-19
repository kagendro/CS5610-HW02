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
			console.log("Line 30, Else")
			var output = getOutput();
			var history = getHistory();
			

			// if history is null
			if(history==""){
				// get operation
				var operation = this.id;
				console.log("operation = ", operation)
				console.log("history is null")
				history = output + operation;
				console.log("history = ", history)
				
				// Set history, print it
				printHistory(history)
				printOutput("")
			}

			// if history exists
			else{
				// make sure operation is working correctly
				console.log(history + output)
				result= eval(history + output);
				console.log("result = ", result)
				printOutput(result);
				printHistory("");
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
			console.log("output = ", output)
			printOutput(output);
		}
	})
}



