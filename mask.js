//mask the last 5 chars with #
const str="123456789111213141516";

const maskChar='#'.repeat(5);
const result=str.slice(0,str.length-5)+maskChar;
console.log(result);

for(let i=0;i<=str.length-5;i--){
    
}