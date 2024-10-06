function reverseString(str) {
    return str.split("").reverse().join("");
}

const notReversed = "STRESSED";

console.log(reverseString(notReversed));