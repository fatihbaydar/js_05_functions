/* ---------------------------------- */
/*  2.YÖNTEM  : FUNCTION EXPRESSION   */
/* ---------------------------------- */

//**********************************************************/
//! * --------Function-Expression----------------------------*/
// 1-Fonksiyon bir değişkene tanımlanır.
// 2-Function kelimesini ardından fonksiyonun ismi verilir.
// 3-Sonra da bir parantez açılıp kapatılır.

//önce fonksiyon oluştrmak şart, hoisting olmaz.aşağıda önce adYazdır("yavuz") yazsak konsola yazmaz

// parametresiz function exp
const adYazdir = function (ad) {
  console.log(ad);
};
adYazdir("Yavuz");

//değişkenlerde hoisting var ile yapınca hata vermiyor undefined
console.log(x);
var x = 7;
console.log(x);

// let ve const ile yapınca hata veriyor. bu ikisinde hoisting yok
// console.log(y)
// let y = 9

//Parametreli function exp

const isevenodd = function (num) {
  let result = num % 2 === 0 ? "sayı çifttir" : "sayı tektir";
  console.log(result);
  return result;
};

console.log(isevenodd(67));

// verilen 3 sayının en büyüğünü bul

// let a = 5
// let b = 7
// let c = 9

const enbuyuk = function (a, b, c) {
  let sonuc =
    a > b && a > c
      ? "a en buyuk"
      : b > a && b > c
      ? "b en buyuk"
      : "c en buyuk";
  console.log(sonuc);
  return sonuc;
};

console.log(enbuyuk(9, 81, 98));
//
const greatestNum = function (num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else {
    return num3;
  }
};
console.log(greatestNum(26, 37, 49));

//Bir ülkedeki ortalama yaşam ömrü 95 yıl olduğuna göre,
// doğum yılı girilen kişinin yaşını hesaplattıran
// yaşına göre ortalama ... ömrünüz kaldı yazıp önerilerde bulunan program
// 0-10 : " Sen bu değerleri önemseme hayatın tadını çıkar"
// 10-20 : " Gezmek görmek istediğin yerler varsa yola çıkma zamanı.. "
 
let omur = 95
let dogum = 2009
let yas = 2024-dogum


const yasam = function sure(){
    if(yas< omur){
        return "oh ne güzel"
    }
    else{
        return "dikkat et"
    }
}

console.log(sure(2008));

// const ortalama = yasam (1980) ;

//   if (omur - yas <= 10 && omur - yas > 0) {
//     console.log("hayat güzeldir");
//   } else if (omur - yas <= 20 && omur - yas >= 0) {
//     console.log("iyi yaşamışsın"); 
//   }
//   function yasam(y){
//     let omur = 95
//     let dogum = 2009
//     let yas = 2024 - dogum; 
//     }

// console.log(ortalama(yas))
