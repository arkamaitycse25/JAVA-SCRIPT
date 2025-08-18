 // for loop

for(let i=1;i<=5;i++){
    console.log("Hello World!");
}

// while loop

let i=1
while(i<=5){
    console.log("Hello World!");
    i++;
}

// do while loop

// let i=1;
do{
    console.log("Hello World!");
    i++;
}while(i<=5);

// for of loop(using in array & string iteration)

let str="ArkaMaity";
for(let val of str){
    console.log("val=",val);
}

// for of loop-->return keys of an object.(used in array and objects)

let student={
    name:"Arka Maity",
    age:23,
    cgpa:7.83,
    isPass:true
};

for(let key in student){
    console.log("key=",key, "values=",student[key]);
}