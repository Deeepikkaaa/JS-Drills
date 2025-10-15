//average age of peoples

const people=[
    {
        name:"Deepika ",
        age:18
    },
    {
        name:"Kalika ",
        age:38
    },
    {
        name:"Krishna Prasad   ",
        age:39
    },
    {
        name:"Rahul",
        age:14
    }
]

const totalAge=people.reduce((acc,cur)=>acc+cur.age,0);
console.log(totalAge);
const avgAge=totalAge/people.length;
console.log(avgAge);


