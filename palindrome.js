// 2. Check if a String is a Palindrome
// Problem:
// A string is a palindrome if it reads the same forward and backward. Write a function that checks if a given string is a palindrome.

function isPalindrome(str){
        let sanitized = str.toLowerCase().replace(/[^a-z0-9]/g, '');

        return sanitized === sanitized.split("").reverse().join("");
}

const str1 = "A man, a plan, a canal: Panama";
console.log(isPalindrome(str1));  // Output: true

const str2 = "hello";
console.log(isPalindrome(str2));  // Output: false