let Animal={
    walk(){
        console.log("walking");
    }

}

let Dog={
    eat(){
        console.log("Eating");
    }
}

let Puppy={
    color(){
        console.log("brown");
    }
}

Dog.__proto__=Animal;
Puppy.__proto__=Dog;
Puppy.walk();