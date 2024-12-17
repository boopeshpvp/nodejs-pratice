// const fs = require("fs");

// const data = ["add.txt", "subtract.txt", "multiply.txt", "divide.txt"];
// let count = 0;

// const result = setInterval(() => {
//   if (count === data.length) {
//     clearInterval(result);
//   } else {
//     fs.createReadStream(`./src/origin/${data[count]}`).pipe(
//       fs.createWriteStream(`./src/destination/${data[count]}`)
//     );
//     const info = {
//       name: data[count],
//       time: new Date(),
//     };

//     fs.appendFile(
//       "./src/log/index.js",
//       JSON.stringify(info),
//       function (err, data) {
//         // console.log(data);
//       }
//     );
//     count = count + 1;
//   }
// }, 3000);


const fs = require('fs');

const path = "./origin"
const pathDestination = "./destinaton"

try {
    if (fs.existsSync(path)) {
        fs.mkdirSync(pathDestination);
        fs.readdirSync(path)
            .map(fileName => {
                setTimeout(()=>{
                let time = fs.readdirSync(pathDestination)
                let valueSrc = path + "/"   + fileName;
                let valueDest = pathDestination + "/" + fileName;
                if (fs.existsSync(valueSrc)) {
                    fs.readFile(valueSrc, 'utf8', function (err, data) {
                        fs.writeFile(valueDest, data, (err) => {
                            if (err) console.log(err);
                            else {
                                console.log("File Created successfully\n");
                            }
                        })
                    });
                }
                },(fs.readdirSync(path).indexOf(fileName)+1)*3000);
            })
    }
} catch (err) {
    console.error(err);
}