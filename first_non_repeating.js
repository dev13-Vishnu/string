// 3. Find the First Non-Repeating Character
// Problem:
// Given a string, find the first character that appears only once. If all characters repeat, return null.

function firstNonRepeating(str){
    let charCount ={};

    for(let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for(let char of str){
        if (charCount[char] === 1){
            
        return char;
        }
    }
    return null;
}

const str = "swiss";
console.log(firstNonRepeating(str));  // Output: "w"