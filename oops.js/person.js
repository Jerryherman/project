class person{
    constructor(firstname,lastname){
        this.firstname = firstname;
        this.lastname = lastname
    }
    getDetalis(){
        console.log("Hi I am a " + this.firstname + " " + this.lastname)
    }
}
let p1 = new person("Jeffry","Roy")
p1.getDetalis()