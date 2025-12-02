// Annotations in TypeScript = Decorators (metadata for classes, methods, properties).

// Syntax: let variableName: type = value;

// string
let s: string = "hello";

// number
let n: number = 100;

// boolean
let b: boolean = true;

// any
let a: any = "text";

// array
let arr: number[] = [1, 2, 3];

// tuple
let tup: [string, number] = ["age", 20];

// union
let u: string | number = "hello";

// enum
enum Color { Red, Green, Blue }
let c: Color = Color.Green;

// object
let obj: { name: string; age: number } = { name: "Ram", age: 20 };

// function annotation
function add(x: number, y: number): number {
    return x + y;
}

console.log(s, n, b, a, arr, tup, u, c, obj, add(5, 10));
