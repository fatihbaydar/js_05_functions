function greet() {
   console.log("Merhaba");  
}
greet();
greet();
greet();

//named function // hoisting tanımlamadan önce çağırdık. 
merhabaDe()
function merhabaDe(){
    console.log("günaydın");
}

//return: return anahtar sözcüğü, işlevin yürütülmesinin sonunda sonucu iletmek için kullanılır. Reddedilirse veya hemen ardından herhangi bir değer geçilmezse, undefined döndürülür.
//return anahtar sözcükleri, işlev kodunun daha fazla yürütülmesini sonlandırır.

function görüşürüzDe(){
    return "görüşürüz";
}
function görüşmek(){
    console.log("Görüşmek üzere");
}
görüşürüzDe(); // consola bişey yansımaz
console.log(typeof görüşürüzDe);
console.log(typeof görüşürüzDe ());

görüşmek(); // Görüşmek üzere
console.log(typeof görüşmek);
console.log(typeof görüşmek());

// function parameters
 function sayHi(username){
    console.log(`Hello ${username}`);
 }
 sayHi("Burak");
 sayHi("Baydar")
console.clear();

 function tanıt(username1, sirket){
    console.log(`Merhaba ben ${username1} of ${sirket}`);
    sirket = "Apple";
    console.log(`Merhaba ben ${username1} of ${sirket}`);
 }

 let username1 = "Yavuz";
 let sirket = "Baydar Holding";
 tanıt(username1, sirket);
 console.log(sirket);
 tanıt("Yavuz")
 console.log(tanıt);

 function sayHi2(userName, company) {
    console.log(`Hello! ${userName} of ${company}`);
    company = 'Apple';
    console.log(`Hello! ${userName} of ${company}`);  
}
let userName= 'Mark';
let company = 'Clarusway';
sayHi2(userName, company);
console.log(company);
sayHi2('Matthew');
