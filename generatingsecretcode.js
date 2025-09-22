 //Generate secret code from a given string
 //eg input ==> deepika
 //encode by chars 2
 // output ==>fggrkmc

 const inputstr="deepika";
 const shiftbypos=2;
 const getEncodedstr=(str,shiftbypos)=>{
    let encoderstr='';

 let currentPostition=0,newPosition=0;
 for (let i=0;i<str.length;i++){
    currentPostition=str.charCodeAt(i);
       newPosition=currentPostition+2;
       encoderstr += String.fromCharCode(newPosition);
 }
 return encoderstr;
 }
 console.log(getEncodedstr(inputstr,shiftbypos));