function smallword(str){
    let words = str.split(' ')
    let longword = words[0];
    for(let i=0; i<words.length; i++){
        let word = words[i]
        if(word.length < longword.length){
            longword = word;
        }
    }
    return longword;
}
console.log(smallword("integer that is always numerically greater than the highest index in the array."))