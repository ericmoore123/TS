// TypeScript stands in an unusual relationship to JavaScript. TypeScript offers all of JavaScript’s features, and an additional layer on top of these: 
// TypeScript’s type system.

// DEFINING TYPES ============================================================================================================
let firstType = "John Doe"; // On hover type: string

// Inferring Object parameter Type
const user_basic = {
    name: "John",
    age: 20
};

// Explicit type setting for objects
interface User{
    name: string,
    age: number,
    id: number
};

const user_ts: User = { //If you assign object parameters other than those defined in 'interface User', an error will be thrown
    name: "John",
    age: 20,
    id: 1
};

// TS fully support oop within the JS ecosystem and dynamic programming width types within classes
class createUser{
    name: string;
    age: number;
    id: number;

    constructor(name: string, age: number, id: number){
        this.name = name;
        this.age = age;
        this.id = id;
    };
};
const newUser: User = new createUser('Charles', 35, 1);

//CUSTOM TYPES (Unions or Generics) UNIONS ====================================================================================
type MyBool = true | false;

// A popular use-case for union types is to describe the set of string or number literals that a value is allowed to be:
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type OddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

// Unions provide a way to handle different types too. For example, you may have a function that takes an array or a string:
const getLength = (word: string | string[]) => word.length; // Accepts parameter of type string or array

// You can make a function return different values depending on whether it is passed a string or an array or strings:
function wrapInArray(param: string | string[]) {
    if (typeof param === "string") {
        console.log([param]);
        return [param];
    } else {
      return param;
    };
};

// GENERICS ===================================================================================================================
// Generics provide variables to types. A common example is an array. An array without generics could contain anything. 
// An array with generics can describe the values that the array contains.

type StringArray = Array<string>; //Array of strings
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

// Declare your own types as generics
interface Backpack<Type> { //accepts a type as param
    add: (obj: Type) => void;
    get: () => Type;
};
declare const backpack: Backpack<number>; //declare "backpack" to use "interface Backpack" type of number

const object = backpack.get(); // will return type of "number"
// backpack.add("apples");  === THROWS TYPE ERROR ===

// Structural Type System ======================================================================================================

// One of TypeScript’s core principles is that type checking focuses on the shape that values have. 
// This is sometimes called “duck typing” or “structural typing”. In a structural type system, if two objects have the same shape, 
// they are considered to be of the same type.

interface Point{
    x: number;
    y: number;
};

const logPoint = (p: Point) => {
    console.log(`${p.x}, ${p.y}`);
};

const point = { x: 12, y: 20}; // this point variable is the same "shape" as the Point interface 
// Output = "12, 30"

const point2 = { x: 20, y: 35, z: 45};
// Output = "20, 35"

const rect = { x: 33, y: 3, width: 30, height: 80 };
// Output = "33, 3"














