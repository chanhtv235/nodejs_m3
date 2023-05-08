let students = [
    {
        name: "Ha",
        gender: 'female',
        poin: 8
    },
    {
        name: "Huy",
        gender: 'male',
        poin: 9
    },
    {
        name: "Hung",
        gender: 'male',
        poin: 7
    },
    {
        name: "Phuong",
        gender: 'female',
        poin: 6
    },
    {
        name: "Huyen",
        gender: 'female',
        poin: 10
    },
    {
        name: "Long",
        gender: 'male',
        poin: 5
    },
    {
        name: "Luan",
        gender: 'male',
        poin: 10
    },
    {
        name: "Linh",
        gender: 'female',
        poin: 8
    }

];
let maleStudents = students.filter(e=>e.gender==="male");
let femaleStudents = students.filter(e=>e.gender==="female");
let maleSum =0;
let femaleSum =0;
 maleStudents.forEach(e=>{
    maleSum += e.poin;
});
femaleStudents.forEach(e=>{
    femaleSum += e.poin;
});
console.log(`điểm trung bình nam ${maleSum/maleStudents.length}`);
console.log(`điểm trung bình nữ ${femaleSum/femaleStudents.length}`);