// TypeScript stands in an unusual relationship to JavaScript. TypeScript offers all of JavaScript’s features, and an additional layer on top of these: 
// TypeScript’s type system.


let firstType = "John Doe"; // On hover type: string

// Inferring Object parameter Type
const user_basic = {
    name: "John",
    age: 20
};

// Explicit type setting for objects
interface User{
    name: string,
    age: number
};

const user_ts: User = { //If you assign object parameters other than those defined in 'interface User', an error will be thrown
    name: "John",
    age: 20
};