const car = {
    price: 2000,
    color: "red",
    numDoors: 4
};
if (car.price < 2000 || car.color === "red" && car.numDoors === 4) { // || is OR, && is AND
    console.log("We'll take it!");
} else {
    console.log("keep looking");
}