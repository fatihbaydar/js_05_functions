// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// !3.YÖNTEM  : ARROW FUNCTIONS
// !-----------------------------------------------------------

console.log("****** 3- ARROW FUNCTIONS ******");

// //!Funct expression ve arrow func yontemlerinde
// //! Once fonks tanimlanmalidir sonra cagrilmalidir. Hoisting desteklenmez
// //! Aksi takdirde hata alırsiniz.



let a= 5
let b = 6
const topla =(a,b)=> a +b

//Örnek2: silindirin hacmini hesapla (pi*r**2*h)


const hacim = (r,h)=>Math.PI*r*r*h 
console.log(hacim(6,7));

const buyuk = (a,b) => a>b ? "a buyuktur" :"b buyuktur"
console.log(buyuk(8**2,2**3));

const fibonacci = (n) => {
    if (n <= 2) {
      return 1;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  };
  
  console.log(fibonacci(9)); 

  (function(a,b){
    let us = a ** b
    console.log(us);
  })(5,2)