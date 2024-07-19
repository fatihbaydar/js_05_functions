// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================
//! Fonksiyon tanımlama yöntemleri
// Function Declaration (Fonksiyon Bildirimi):
// Function Expression (Fonksiyon İfadesi):
// Arrow Function (Ok Fonksiyonları):
// Function Constructor (Fonksiyon Oluşturucusu):

// !-----------------------------------------------------------
// ! 1.YÖNTEM  : FUNCTION DECLARATION
// !-----------------------------------------------------------


function yazdir(){
    console.log("hello");
}
yazdir()
    
// Hoisting

selamla()

function selamla(){
    console.log("Merhaba nasılsınız?");
}

// PARAMETRELİ FONKSİYON

function adYazdir(ad){
    console.log("merhaba",ad)
    // console.log("merhaba",ad,soyad,yaş)
}

adYazdir("Ali")
let name1 = "Mustafa"
adYazdir(name1)
let sayi = 100
adYazdir(sayi)

adYazdir("Ahmet", "Yolcu", 45)
adYazdir

const pi = Math.PI
function dairenin_alanı(r){
    return pi*r*r
}

const sonuc=dairenin_alanı(7)
console.log(sonuc)



