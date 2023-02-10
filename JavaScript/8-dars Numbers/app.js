////// NUmbers 

// Integir -- butun sonlar
// Float -- Kasir sonlar



// let a = 10000000;
// let b = 1_000_0000;


// let fl = 1.356355;
// console.log(fl.toFixed(2));
// console.log(fl.toPrecision(2));
// console.log(Number(fl)); //Number konstraktorda raqamdan boshqa belgi bolsa  NaN chiqadi
// console.log(Number.parseInt(fl)); //Kasir sonni faqatgini butun qismini olib beradi
// console.log(Number.parseFloat(fl)); //Son qanaqa korinishda bolsa sonni olib beradi
// console.log(fl.toPrecision(3)); //Nuqtadan keyin nechta son bor deyishlik uchun iwlatamiz

// let a = "1";
// let b = 3;

// console.log(parseInt(a) + b);
// console.log(+a + b);

// let a = 0.3;
// let b = 0.2;
// let c = 0.1;

// console.log(c + b);


// console.log(parseInt(Math.random() * 100));

function getBinaryValue(num){
    return num.toString(2);
   }

   function checkOnces(binaryValue){
       return binaryValue.toString().replace(/0/g, "").length;
   }