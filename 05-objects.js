//creating an object literal

const cookie = {
    name: "Chocolate Chip",
    isGlutenFree: false,
    eatCookie: function () {   //a function in an object literal 
        console.log("I am eating " + this.name);
    }
};

cookie.name = "Chip Chocolate";
cookie.isGlutenFree = true;
//console.log(cookie["+Yummy"]);
// console.log(cookie);
// cookie.eatCookie;

//creating an object using a class

class Cookie {  //class names should start with a capital letter
    constructor(name, isGlutenFree) {  //a constructor is basically the rules you need to create your class
        this.name = name;
        this.isGlutenFree = isGlutenFree;
    }

    //this is a method, a method has a function which belongs to a class. you don't need to use the keyword 'function' inside a class
    eatCookie() {
        console.log("I am eating " + this.name);
    }
}
const myCookie = new Cookie("Iced Oatmeal", false);

myCookie.eatCookie();