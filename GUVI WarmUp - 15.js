/* Given a word, "getLengthOfWord" returns the length of the given word. */

function getLengthOfWord(word1) {
	///Your code Starts here
	if (typeof word1 == "string") {
		word1.split("")
		return word1.length
	}
	return -1
	///Your code Ends here
}
console.log(getLengthOfWord("GUVI"))
/*
Lines For TestCase

getLengthOfWord("GUVI");
getLengthOfWord("");
getLengthOfWord();
getLengthOfWord(9);
*/