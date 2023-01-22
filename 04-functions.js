function sum (a, b) {
    return a+b;
}

console.log(sum(10,10));

function product(a, b) {
    return a*b;
}

console.log(product(12,12));

const bignum = product(563753, 56376537);
console.log(bignum);

setTimeout(function () {
    console.log("Hey! You rock!!!");
}, 1000);

setTimeout(() => console.log("Hey! You rock!!!"), 1000); //arrow function