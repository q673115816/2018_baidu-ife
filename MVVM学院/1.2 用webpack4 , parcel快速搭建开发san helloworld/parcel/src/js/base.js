setTimeout(_=>{
    console.log('Hello World')
},1000)
const someBody = '666'
console.log(someBody)
class Person {
    constructor(name){
        this.name = name
    }
    sayName(){
        console.log(this.name)
    }
}

class Gender extends Person {
    constructor(name,sex){
        super(name)
        this.sex = sex
    }
    sayGender(){
        console.log(this.sex)
    }
}


export {
    Person,
    Gender
}