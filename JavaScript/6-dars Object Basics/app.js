// Object nima ? 
// key va valuelardan tashkil topgan non primitiv data taype



let ac1 = {
    name: "Webbrain",
    major: "Frontend, Bunker",
    //  
} 
const ac2 = structuredClone(ac1) // structuredClone ac1 copy qilib ac2 ga birlashtiradi 
Object.freeze(ac1) //obyektni toxtatib quyadi
Object.seal(ac1) // bor malumotni yangilasa buladi faqat

ac1.founded = 2020; //yandi qiymat qushish
delete ac1.major; //malumotni uchirish
console.log(ac1);



// console.log(account["full name"]); 
   
// let key = "major";
// console.log(account.major);
// console.log(account[key]);
// console.log(account["major"]);


// let newObj1 = {}
// let newObj2 = new Object()
// console.log(newObj1, newObj2);