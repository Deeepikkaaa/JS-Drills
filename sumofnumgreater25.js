//finding the sum of number greater than 25

const arr=[40,10,23,26,25,28,50,78,99,165];
const result=arr.reduce((acc,curr)=>curr>25?acc+curr:0);
console.log(result);


//finding the odd numbers
const oddres=arr.reduce((acc,curr)=>(curr %2!=0?[...acc,curr]:acc),[]);
console.log(oddres);