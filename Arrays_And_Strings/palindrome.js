
//using for loop
function checkStringPalindrome(input){
    for(var i=0;i<input.length/2;i++){
        if(input[i] !== input[input.length-1-i]){
            console.log("It is not a Palindrome!!");
            return;
        }
    }
    console.log("It is a palindrome!")
}

//using inbuilt methods
function checkStringPalindromeInBuilt(input){
    var inputArr = Array.from(input);
    if(inputArr.reverse().join('') === input){
        console.log("It is a palindrome!")
    }else{
        console.log("It is not a palindrome!")
    }
}

//Number Palindrome
function checkNumberPalindrome(number){
    var rem, temp, final = 0;

		temp = number;
		while(number>0)
		{
			rem = number%10;
			number = parseInt(number/10);
			final = final*10+rem;
		}
		if(final==temp)
		{
			console.log("The inputed number is Palindrome");
		}
		else
		{
			console.log("The inputted number is not palindrome");
		}
}

checkStringPalindrome('madam');
checkStringPalindromeInBuilt('madam');
checkNumberPalindrome(1211);