/*Palindrome of String */
//using method
/*const str="madam";
const reversedString=str.split("").reverse().join("");
 
if(str=== reversedString){
    console.log(`${str} is a palindrome string!`);
}
else{
    console.log(`${str} is  not a palindrome string!`)
}
*/

const str="madam";
 function getReverseStr(){
    let ReverseStr="";
    for(let i=str.length-1;i>=0;i--){
        ReverseStr+=str[i];
    }
     return ReverseStr;
 }
 const result=getReverseStr(str);
     if(result === str){
        console.log(`${str} is a palindrome string!`);
    }else {
        console.log(`${str} is not  a palindrome string!`);
    }

 
