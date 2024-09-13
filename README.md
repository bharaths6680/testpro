** Operators and Expressions in js **

**In JavaScript, operators can be classified into six categories:**

1. **Arithmetic operators**: Used for basic mathematical calculations such as addition, subtraction, multiplication, division, and modulus.
2. **Comparison operators**: Used to compare two values or variables and return a Boolean true or false result. Common comparison operators include equality, inequality, strict equality, strict inequality, less than, greater than, less than or equal to, and greater than or equal to.
3. **Logical operators**: Used to combine or manipulate Boolean values. Common logical operators include logical AND, logical OR, and logical NOT.
4. **Assignment operators**: Used to assign values to variables. The most basic assignment operator is the equal sign.
5.**Unary operators**: Operate on a single value or variable. Common unary operators include increment and decrement.
6. **typeof operator**: A built-in operator in JavaScript that allows you to determine the data type of a variable or an expression. It returns a string representing the type of the operand.
   ex:
**Arithmetic operators in JavaScript are used for performing basic mathematical calculations**
Here are the common arithmetic operators in JavaScript:
- Addition (+): Adds two values together.
- Subtraction (-): Subtracts one value from another.
- Multiplication (*): Multiplies two values.
- Division (/): Divides one value by another.
- Modulus (%): Returns the remainder of a division operation.

Here's an example that demonstrates the use of arithmetic operators in JavaScript:

```javascript
let num1 = 10;
let num2 = 5;

let sum = num1 + num2; // Addition
console.log(sum); // Output: 15

let difference = num1 - num2; // Subtraction
console.log(difference); // Output: 5

let product = num1 * num2; // Multiplication
console.log(product); // Output: 50

let quotient = num1 / num2; // Division
console.log(quotient); // Output: 2

let remainder = num1 % num2; // Modulus
console.log(remainder); // Output: 0
```

In JavaScript, logical operators are used to combine or manipulate Boolean values. There are three logical operators: logical AND (`&&`), logical OR (`||`), and logical NOT (`!`).

Here's how you can use logical operators to combine Boolean values in JavaScript:

1. Logical AND (`&&`): The logical AND operator returns `true` if both operands are `true`, and `false` otherwise. It is represented by the `&&` symbol.

```javascript
let a = true;
let b = false;

console.log(a && b); // Output: false
```

In this example, the logical AND operator is used to combine the Boolean values of `a` and `b`. Since `a` is `true` and `b` is `false`, the result of `a && b` is `false`.

2. Logical OR (`||`): The logical OR operator returns `true` if at least one of the operands is `true`, and `false` otherwise. It is represented by the `||` symbol.

```javascript
let x = true;
let y = false;

console.log(x || y); // Output: true
```

In this example, the logical OR operator is used to combine the Boolean values of `x` and `y`. Since `x` is `true` and `y` is `false`, the result of `x || y` is `true`.

3. Logical NOT (`!`): The logical NOT operator negates the Boolean value of its operand. It returns `true` if the operand is `false`, and `false` if the operand is `true`. It is represented by the `!` symbol.

```javascript
let p = true;

console.log(!p); // Output: false
```

In this example, the logical NOT operator is used to negate the Boolean value of `p`. Since `p` is `true`, the result of `!p` is `false`.

These logical operators are commonly used in conditional statements and boolean expressions to make decisions based on the combination of Boolean values.
