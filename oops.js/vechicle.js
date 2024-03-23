class vechicle{
    constructor(name,models,price,color){
        this.name = name
        this.models = models
        this.price = price
        this.color = color
    }
    getDetails(){
        console.log("this is a" + this.name + "car")
    }
   }
   let c1 = new vechicle("bwm","xl",100000000,"blue")
   c1.getDetails()