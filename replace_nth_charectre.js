//Write a function to replace each alphabet in the given string with another alphabet occurring at the n-th position from each of them.

function replaceNthElement(str,n) {
    let result = '';

    for (let i = 0; i< str.length; i++){
        let char = str[i];
        
        if(char.match(/[a-zA-Z]/)){
            let charCode = char.charCodeAt(0);
            let isUpperCase = charCode >= 65 && charCode <= 90;
            let isLowerCase = charCode >= 97 && charCode <= 122;

            if(isUpperCase){
                char = String.fromCharCode (((charCode - 65 + n ) % 26) + 65);
            }else if (isLowerCase) {
                char  = String.fromCharCode(((charCode - 97 + n) % 26) + 97);
            }
        }
        result += char;
    }
    return result;
}

const str = "hello World";
const n = 3;
console.log(replaceNthElement(str, n));

