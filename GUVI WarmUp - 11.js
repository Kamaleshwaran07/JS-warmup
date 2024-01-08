/* Create a function that returns the number of frames shown in a given number of minutes for a certain FPS. */

function frames(num1, num2) {
	///Your code Starts here 
	let numberOfFrames = 60 * (num1) * num2
	
	return numberOfFrames
	
	
	///Your code Ends here
}
console.log(frames(10, 1))
/*
Lines For TestCase

frames(1, 1);
frames(10, 1);
frames(10, 25); 
*/