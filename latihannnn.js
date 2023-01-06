// writeFile
import { rmSync } from "node:fs";
import {writeFile,readFile,unlink,mkdir,readdir,rmdir,rename} from "node:fs/promises";

const data=("Selamat malam juga");

// try{
//     await writeFile("data.txt",data,"binary");
//     console.log("Selamat malam ");
// }catch(err){
//     console.error(`Tidur sana!${err.massage}.`);
// }

// //readFile

// try{
//     const read = await readFile("data.txt","utf-8");
//     console.log(data);
// }catch(err){
//     console.error(`maaf ini bukan untuk kamu ${err.massage}`);
// }

// //unlik

// try{
//     await unlink("data.txt");
//     console.log("Selamat kamu sudah Moveon");
// }catch(err){
//     console.err(`kamu gagal moveon ${err.massage}`);
// }

// //mkdir

// try{
//     await mkdir("./folder");
//     console.log("masa depan mu sudah menantimu");
// }catch(err){
//     console.error(`ternyata dia tidak memihakmu`);
// }

// //readdir

// try{
//     const files = await readdir("./folder");
//     for(const file of files){
//         console.log(files);
//     }
// }catch(err){
//       console.error(`coba lain kali`);
// }


// //rmdir


// try{
//     await rmdir("./folder");
//     console.log("congratulation!!");
// }catch(err){
//     console.error(`entahlah`);
// }

// //rename
// try{
//     await rename("latihan-fs.js", "latihann.js");
//     console.log("berhasil dirubah");
// }catch(err){
//     console.error(`hemmm gak bisa dipercaya`)
// }



//latihan soal
//     async function persegi (s){
//     let Luas;
//     Luas = s*s;
//     try{
//         await writeFile("./folder/data.txt",Luas.toString(),"utf-8")
//         console.log(`berhasil`);
//     }catch(err){
//         console.error(`perhitungan anda salah ${err.massage}`);
//     }

//     luas();
  
// }

// persegi("5");

//  async function luas(){
//     try{
//         const read = await readFile("./folder/data.txt","utf-8");
//         console.log(read);
//     }catch(err){
//         console.error(`tidak dapat diakses ${err.massage}`);
//     }

//     hapus();
//  }


//  async function hapus(){
//     try{
//         await unlink("./folder/data.txt");
//         console.log("berhasil dihapus");
//     }catch(err){
//         console.error("tidak dapat dihapus");
//     }
//  }


//  try{
//     await mkdir("")
//  }
  

//mkdir (membuat folder)
// try{
//     await mkdir("./folder");
// }catch(err){
//     console.error("maaf folder belum bisa di akses");
// }



//readdir
// try{
//     const files = await readdir("./folderr");
//         for(const file of files){
//             console.log(files); 
//         }
// }catch(err){
//     console.error(`tidak berhasil`);
// }

//write
async function persegi(s){
    let luas;
    luas = s*s;
    try{
        await writeFile("./folder/data.txt",luas.toString(),"utf-8");
        console.log(`berhasil ${luas}`);
    }catch(err){
        console.error(`maaf saat ini kami sednag sibuk`);
    }
}

// persegi(5);

///rename
// try{
//     await rename("latihann.js" ,"latihannnn.js");
// }catch(err){
//     console.error(`tidak bisa diubah`);
// }


//rmdir


try{
    await rmdir("./folderr");
        console.log("berhasil!!!");
}catch(err){
 console.error("hsj");
}


try{
    await unlink("./folderr/data.txt");
    console.log("berhasil");
}catch(err){
    console.error(`teliti lagi`);
}

