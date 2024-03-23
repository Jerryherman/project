function same(input) {
    return Array.isArray(input);
  }
  
  
  console.log(same([1, 2, 3]));  
  console.log(same({foo: 'bar'})); 
  console.log(same('Hello, world!'));