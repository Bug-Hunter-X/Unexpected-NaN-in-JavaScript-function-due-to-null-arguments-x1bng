function foo(a, b) {
  a = a || 0; // Use 0 as default if a is null or undefined
  b = b || 0; // Use 0 as default if b is null or undefined
  return a + b; 
}

function bar(a, b) {
  return foo(a, b) * 2;
}

console.log(bar(2, 3)); // Output: 10
console.log(bar(null, 3)); // Output: 6
console.log(bar(2, null)); // Output: 4