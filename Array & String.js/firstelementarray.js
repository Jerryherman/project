function getFirstElement(array){
    if(array.length > 0){
        return array[0]
    }else{
        return undefined
    }
}
let number = [1,2,4,5,6]
let fistElement = getFirstElement(number);
console.log(fistElement)
