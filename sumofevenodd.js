// calculating the sum of odd and even numbers separately 

const arr=[10,11,12,13,14,15,16,17,18,19,20];

const sum=arr.reduce((acc,cur)=>cur%2===0?{...acc,even:acc.even+cur}:{...acc,odd:acc.odd+cur},{even:0,odd:0});
 console.log(sum);
