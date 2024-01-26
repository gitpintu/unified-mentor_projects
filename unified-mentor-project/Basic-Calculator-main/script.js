// Container to store the query and result as a string 
let result = document.getElementById('result');

// Insert the query into string 
function insert(char) {
	result.value += char;
}

// Erase the whole string 
function clearResult() {
	result.value = '';
}

// Erase last Character of the string
function backspace() {
	result.value = result.value.slice(0, -1);
}

// Calculate the arithmatic operation 
// return result into display
function calculate() {
	try {
		result.value = eval(result.value);
	} catch (error) {
		result.value = 'Error';
	}
}