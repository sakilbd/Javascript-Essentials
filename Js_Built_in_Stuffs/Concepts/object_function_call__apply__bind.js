const c = console.log.bind(console);

let obj = {
    name: "Sakil",
    age: "19",
    getNameAge: function() {
        return `${this.name}'s age is ${this.age}`
    },
    getNameAgeWithParameter: function(a = 5, b = 10) {
        return `name:${this.name} age:${this.age} param1:${a} param2:${b}`
    }
}



let callFunction = obj.getNameAge();
c(callFunction) //Sakil's age is 19
c(obj.getNameAgeWithParameter()) //name:Sakil age:19 param1:5 param2:10
c(obj.getNameAgeWithParameter(10, 20)) //ame:Sakil age:19 param1:10 param2:20

let newObj = {
    name: "Rahim",
    age: "36"
}

let callFunctionWithNewThis = obj.getNameAge.call(newObj)

c(callFunctionWithNewThis) //Rahim's age is 36

let callManuputedFunctinWithParameter = obj.getNameAgeWithParameter.call(newObj, 10, 15);

c(callManuputedFunctinWithParameter) //name:Rahim age:36 param1:10 param2:15

let applyManupulatedThis = obj.getNameAgeWithParameter.apply(newObj, [50, 60]) //appy takes argument as array 
c(applyManupulatedThis); //name:Rahim age:36 param1:50 param2:60

let bindManupulatedObjFunctionCall = obj.getNameAgeWithParameter.bind(newObj); //for bind we have to put parameters in separate as belw

c(bindManupulatedObjFunctionCall(101, 102)); //name:Rahim age:36 param1:101 param2:102