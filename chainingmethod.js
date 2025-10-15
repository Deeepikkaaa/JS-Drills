let staff=[
    {
        name:"Tirtha Raj Bhandari",
        experience:2,
        post:"Backend Developer"
    },
        {
        name:" Raj Bidari",
        experience:3,
        post:"Frontend Developer"
    },
        {
        name:"Tirtha Khadka",
        experience:2,
        post:"Frontend Developer"
    },
        {
        name:"Deepika Bhandari",
        experience:5,
        post:"Full Stack Developer"
    },
        {
        name:"Manjulika Ghodasaini",
        experience:1,
        post:"Intern"
    },

]
//chaining filter-map
const exp5yr=staff.filter(staff=>staff.experience==5).map(staff=>staff.name);
console.log(exp5yr);

//get the name of frontend developer only
const res=staff.filter(staff=>staff.post==="Frontend Developer").map(staff=>staff.name);
console.log(res);