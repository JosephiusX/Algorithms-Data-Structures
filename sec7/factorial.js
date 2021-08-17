// Writing Factorial Iteratively

// take in uumber
const factorial = (num) => {
	let total = 1 // init total at 1
	// starting index value number, while i is greater then 0, decrement 1
	for (let i = num; i > 1; i--) {
		total *= i // multiply total the increment value
	}
	return total
}

const ex = factorial(4)

console.log(ex)
46
