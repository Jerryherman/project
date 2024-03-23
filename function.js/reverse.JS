function reverse(number){
    number = number + ""
    return Number(number.split("").reverse().join(""))
  }
 console.log(reverse(12345))