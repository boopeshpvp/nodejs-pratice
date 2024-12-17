// const fs = require("fs");
// const data = ["add.txt", "subtract.txt", "multiply.txt", "divide.txt"];
// let count = 0;
// const interval = setInterval(() => {
//   if (count === data.length) {
//     clearInterval(interval);
//   } else {
//     console.log("count", count);
//     fs.createReadStream(`./src/origin/${data[count]}`).pipe(
//       fs.createWriteStream(`./src/destination/${data[count]}`)
//     );
//     if(count>0){
//     fs.unlink(`./src/origin/${data[count-1]}`, function (err, data) {
//       if (err) {
//         console.log("err", err);
//       }
//       console.log("file deleted");
//     });
// }
//     count = count + 1;
//   }
// }, 3000);

const fs=require('fs')
const data=['add.txt','subtract.txt','multiply.txt','divide.txt']
let count=0

const result=setInterval(()=>{
    if(count===data.length){
        clearInterval(result)
    }
    else{
    fs.writeFileSync(`./src/destination/${data[count]}`,"",function(err){
        console.log("err",err);
    })
    fs.rename(`./src/origin/${data[count]}`,`./src/destination/${data[count]}`,function(err){
        if(err){
            console.log("error",err);
        }  
    })
    count=count+1
}
},3000)


