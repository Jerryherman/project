function capitalizeFirstLetters(String){
    let world = String.split(" ");
    for(let i=0; i<world.length; i++){
        world[i]=world[i][0].toUpperCase() + world[i].substring(1)
    }
    return world.join(" ");
}
let input = "hello my friend"
let capitalizeString = capitalizeFirstLetters(input);
console.log(capitalizeString);
