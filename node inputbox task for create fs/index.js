// const readline = require("readline");
// const fs = require("fs");

// const rl = readline.createInterface(process.stdin, process.stdout);

// rl.question("Enter the file name : ", function (file) {
//   rl.setPrompt("Do you want enter data in the file : ");
//   rl.prompt();

//   rl.on("line", function (answer) {
//     if (answer.toLocaleLowerCase() === "yes") {
//       rl.setPrompt("enter the content : ");
//       rl.prompt();

//       rl.on("line", function (content) {
//         fs.writeFile(
//           `${file}.js`,
//           JSON.stringify([{ content }]),
//           function (err, data) {
//             // console.log(data);
//           }
//         );
//       });
//     } else {
//       fs.writeFile(`${file}.js`, "", function (err, data) {
//         // console.log(data);
//       });
//     }
//   });
// });


const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the file name: ", function (file) {
  rl.question("Do you want to enter data in the file (yes/no)? ", function (answer) {
    if (answer.toLowerCase() === "yes") {
      rl.question("Enter the content: ", function (content) {
        fs.writeFile(`${file}.js`, JSON.stringify([{ content }]), function (err) {
          if (err) {
            console.error("Error writing to file:", err);
          } else {
            console.log("Content written to file successfully.");
          }
          rl.close();
        });
      });
    } else {
      fs.writeFile(`${file}.js`, "", function (err) {
        if (err) {
          console.error("Error creating empty file:", err);
        } else {
          console.log("Empty file created successfully.");
        }
        rl.close();
      });
    }
  });
});
