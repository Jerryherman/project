function countVowel(str){
    const count = str.match(/[aeiou]/gi).length;
    return count;
}

let string = "Enter a string"; 
let result = countVowel(string);
console.log(result);
