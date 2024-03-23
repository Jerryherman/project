class Employee {
    constructor(name, salary, department, age) {
        this.name = name;
        this.salary = salary;
        this.department = department;
        this.age = age;
    }

    getDetails() {
        console.log("This is a " + this.name + ". They earn " + this.salary + " working in the " + this.department + " department, and they are " + this.age + " years old.");
    }
}
     let e1 = new Employee("joy", 50000, "b.com", 29);
     e1.getDetails();
