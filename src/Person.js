class Person {
  constructor(name){
    this.name = name;
  }
  
  greet(){
    return this.name + ' Says hello';
  }
}

console.log(new Person('Christian').greet());