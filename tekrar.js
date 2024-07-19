/* ---------------------------------- */
/*            FONKSİYONLAR            */
/* ---------------------------------- */
//! Fonksiyon tanımlama yöntemleri
// Function Declaration (Fonksiyon Bildirimi):
// Function Expression (Fonksiyon İfadesi):
// Arrow Function (Ok Fonksiyonları):
// Function Constructor (Fonksiyon Oluşturucusu):

   /* ---------------------------------- */
   /* 1.YÖNTEM  : FUNCTION DECLARATION   */
   /* ---------------------------------- */

//? Bir fonksiyon belirli bir görevi gerçekleştirmek için tasarlanmış,
//? yeniden kullanılabilir, (tek bir görev için tek fonksiyon olması daha iyidir)
//? test etmesi kolaydır

//! * --------Function-Declaration----------------------------*/
// 1-Fonksiyonlar   function anahtar kelimesi ile tanımlanır
// 2-Function kelimesini ardından fonksiyonun ismi verilir.
// 3-Sonra da bir parantez açılıp kapatılır.
//? fonksiyonun çalışması için çağırmak gereklidir.Çağırılmadığında işleme alınmaz.Bu çağırma işlemine invoke yada call denir.


function yazdir (){
    console.log("Merhaba");
}

console.log("İstanbul");
yazdir()

/** Hoisting özelliği sadece function decleration yöntemi için geçerlidir */

selamla()
function selamla() {
    console.log("merhaba nasılsınız");
}

selamla()
selamla()

// Parametreli Fonksiyon

function adYazdir(ad){
    console.log("merhaba", ad);
}
adYazdir("Melih")

let isim= "Yavuz"
adYazdir(isim)

let sayi=500
adYazdir(sayi)

function adYazdir(ad,soyad,yas){
    console.log("merhaba",ad,soyad,yas);
}
//soyad ve yas tanımlamaınca undefined oldu.

function adYazdir(ad,soyad,yas){
    console.log("merhaba",ad,soyad,yas);
}

//* Fonksiyon çağrılırken gönderilen değere parametre denir. */
adYazdir("Burak","Baydar","6 aylık")

//* Fonksiyon tanımlanırken verilen değerlere arguments denir
function adYazdir(ad,soyad="Baydar",yas="10"){
    console.log("merhaba",ad,soyad,yas);
}
let unvan = "Melih"
adYazdir(unvan)

// unvan ile değer göndermedik ve geri kalanını fonksiyon içine ne tanımlamışsak o geldi. Bu şekilde adYazdir("Burak","Baydar","6 aylık") değer gönderince gönderdiğimizi aldı.

adYazdir()

function degerler(){
    console.log(arguments)
}

degerler(12,2,67,89,98,986,658,745,34,23,14,89)

function deneme(ad,yas,renk,kitap){
    console.log(ad)
    ad="Mehmet"
    console.log(ad)
    console.log(yas)
    console.log(renk)
    console.log(kitap)
}

const adi="Ali"
deneme("Ali",34,"sarı","tarih")

//Return BUNU SOR ?????********

function yasHesapla(isim,tarih){
    console.log("Benim adım",isim,"ben",(2024-tarih),"yaşındayım");
    let yas = 2024-tarih
    return yas
}
const yas=yasHesapla("Ali",1980)
const yasÖmer = yasHesapla("Ömer",1984)
const yasAhmet = yasHesapla("Ahmet",1987)

if (yas >30) {
    console.log("Yasınız uygun");
}

console.log(yas)
console.log(yasÖmer)
console.log(yasAhmet)

////
function yasHesapla(isim,tarih){
    console.log("Benim adım",isim,"ben",(2024-tarih),"yaşındayım");
    let yas = 2024-tarih
    
    if (yas>40){
        return "yas 40tan büyük"
    }
    else{
        return"yas 40tan küçük"
    }
}
const yas1=yasHesapla("Ali",1980)
const yas_Ömer = yasHesapla("Ömer",1984)
const yas_Ahmet = yasHesapla("Ahmet",1987)


console.log(yas)
console.log(yas_Ömer)
console.log(yas_Ahmet)

//dairenin çevresi

// function daire_cevre(r){
//     // console.log("dairenin cevresi" 2*pi*r);
//     let pi = Math.PI
//     let r =5
//     return cevre
// }

// const cevre = daire_cevre(pi,r)

// let pi = Math.PI
// function dairenincevresi(r){
//     const sonuc = 2*pi*r
//     return sonuc
    
// }


// const sonuc=dairenincevresi(5)
// console.log(dairenincevresi(5));

function dairecevre(yarıcap){
    const pi = Math.PI
    const cevre = 2*pi*yarıcap
    return cevre;
}
let yarıcap = 10
let cevre = dairecevre(yarıcap);
console.log("dairenin cevresi: ", cevre.toFixed(2));

// dairenin alanı:

function dairealanı(r){
    let pi = Math.PI
    const alan = pi*r*r
    return cevre
}

let r = 10
let alan = dairealanı(r);
console.log("alan", alan);