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


**2D Array in js**

Certainly! In JavaScript, you can create a 2D array by initializing an array of arrays. Each inner array represents a row in the 2D array.

Here's an example of how to create a 3x3 2D array of integers:

```javascript
let grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
```

In this example, the `grid` variable is a 2D array with three rows and three columns. Each element in the array represents a number.

To access a specific element in the 2D array, you need to provide both the row and column indices. Remember that array indices start from 0 in JavaScript.

For example, to access the element in the second row and third column (which is 6 in this case), you would use `grid[1][2]`.

You can use nested loops to traverse a 2D array and perform operations on each element or row. The outer loop iterates through the rows, and the inner loop iterates through the columns.

Here's an example of how to print each element's value along with its position in the 2D array:

```javascript
for (let i = 0; i < grid.length; i++) {
  for (let j = 0; j < grid[i].length; j++) {
    console.log(`Element at position (${i}, ${j}): ${grid[i][j]}`);
  }
}
```

This code will iterate through each element in the 2D array and print its value along with its position.

I hope this helps! Let me know if you have any further questions.


To create an interactive movie theater seating arrangement using HTML, CSS, and JavaScript, you can follow these steps:

1. HTML Structure:
   - Create a `<div>` element with a class name, such as "seating-chart", to serve as the container for the seating arrangement.
   - Within the seating chart `<div>`, create individual seats as `<div>` elements with a class name, such as "seat".
   - Assign static labels to each seat, such as A1, A2, B1, B2, and so on.

2. CSS Styling:
   - Style the seating chart container using CSS grid to create a grid layout with the desired number of columns and rows.
   - Style the individual seats using CSS to set their width, height, text alignment, border, and cursor style.
   - Define different CSS classes for booked seats, available seats, and any other desired styles.

3. JavaScript Functionality:
   - Define a 2D array to represent the theater seating arrangement. Use 'X' to indicate booked seats and 'O' to indicate available seats.
   - Write a JavaScript function, such as `bookSeat(row, col)`, that is triggered when a seat is clicked. This function should check if the selected seat is available, book it by changing its class to "booked", and display an alert message.
   - Write another JavaScript function, such as `bookRandomSeat()`, that is triggered when a "Select Random Seat" button is clicked. This function should find all available seats, randomly select one, book it, and display an alert message. If all seats are already booked, it should alert that all seats are taken.

4. Event Listeners:
   - Attach event listeners to the seat `<div>` elements to trigger the `bookSeat()` function when a seat is clicked.
   - Attach an event listener to the "Select Random Seat" button to trigger the `bookRandomSeat()` function when clicked.

By combining HTML, CSS, and JavaScript, you can create an interactive movie theater seating arrangement where users can click on seats to book them or use a button to automatically book a random available seat.

Please note that the specific implementation details may vary depending on your requirements and design preferences.
