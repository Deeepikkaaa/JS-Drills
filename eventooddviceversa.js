//Even number to odd and vice versa

const num=[2,4,6,8,1,3,5,9];
//using ternary operator and arrow function
const result =num.map(num=>num%2===0?num-1:num+1);
console.log(result);