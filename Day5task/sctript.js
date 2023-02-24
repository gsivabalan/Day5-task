//Print odd numbers in an array in anonymous function & IIFE
// Using an anonymous function
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
(function(arr) {
  for (let i=0; i<arr.length; i++) {
    if (arr[i]%2 !== 0) {
      console.log(arr[i]);
    }
  }
})(numbers);
//Using IIFE 
(function(arr) {
    for (var i=0; i<arr.length; i++) {
      if (arr[i]%2 !== 0) {
        console.log(arr[i]);
      }
    }
  })([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  //Sum of all numbers in an array in anonymous function & IIFE
  // Using an anonymous function
  let add=function(a,b){
    return a+b;  
  }
  console.log(add(10,20));
  //Using IIFE
  (function add(a,b,c,d){
    console.log(a+b+c+d);
})(10,20,30,40);

//Return all the palindromes in an array in anonymous function & IIFE
// Using an anonymous function
let aa = ["appa", "siva","did"];
let pp = function(arr) {
  return arr.filter(function(str) {
    return str === str.split('').reverse().join('');
  });
}(aa);

console.log(pp);
//Using IIFE


//Return all the prime numbers in an array in anonymous function & IIFE
// Using an anonymous function
let a = [2, 3, 5, 7, 10, 13, 15, 17, 20];
let p = function(arr) {
let result = [];

  for (let i= 0; i<arr.length; i++) {
    let cc = 0;
    for (let j = 2; j<arr[i]; j++) {
      if (arr[i]%j=== 0) {
      cc=cc+1;
      }
    }
    if (cc===0) {
      result.push(arr[i]);
    }
  }
  return result;
}(a);

console.log(p); 
//Using IIFE


//Remove duplicates from an array in anonymous function & IIFE
//using an anonymous function
var arr = ["apple", "mango", "apple", 
"orange", "mango", "mango"];
function rd(arr) {
return arr.filter((item, index) => arr.indexOf(item) === index);
}
console.log(rd(arr));
//Using IIFE





//Print odd numbers in an array in arrow function 
let arr = [1,2,3,4,5,6,7,8,9,10,11,12]
let odds = arr.filter(n=>n%2)
console.log(odds)
//Convert all the strings to title caps in a string array in arrow function
let str = "guvi student";
let newStr = str.split(' ').map(w => w[0].toUpperCase() + w.substring(1).toLowerCase()).join(' ');
console.log(newStr);
//Sum of all numbers in an array in arrow function
let sum = (a, b) => {
    return(a+b)
  }
    x= sum(34,87)
    console.log(x)
//Return all the prime numbers in an array in arrow function
let a = [1, 3, 2, 5, 10];
let b = a.filter(num => {
  for (let i=2; i<num; i++) {
    if (num%i === 0) ;
  }
  return num !== 1;
});
console.log(b);
//Return all the palindromes in an array in arrow function
let gp = (words) => words.filter((word) => word.split("").reverse().join("") === word);

console.log(gp(["appa", "siva","did"]));

