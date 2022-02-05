// Teman teman buatlah sebuah variabel array dengan
// 4 buah nama buah buahan pisang , jeruk , apel dan mangga
// Setelah itu teman teman tampilkan nilai awal array tersebut, lakukan perintah
 // pop dan shift sehingga hasilnya akan seperti ini

 function macamBuah(){
   var buah = ["pisang","jeruk","apel","mangga"];
   console.log("Array semula:")
   console.log(buah);

   var buah2 = buah.shift();
   console.log("Array hapus depan:")
   console.log(buah2); 
   console.log(buah);

   var buah3 = buah.pop();
   console.log("Array hapus belakang:")
   console.log(buah3);
   return buah

 }

 console.log(macamBuah());
