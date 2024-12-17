const http = require("http");
const url = require("url");
const fs = require("fs");
const fileName = "./common.js";
const file = require(fileName);
const server = http.createServer((req, res) => {
  const requesturl = req.url;

  const id = requesturl.split("/")[2];

  const requrl = url.parse(req.url);

  if (requrl.pathname === "/addStudent" && req.method === "POST") {
    let data = {
      id: 3,
      name: "vishva",
      age: 30,
      secretIdentity: "cheewtyVishva",
    };
    const existingData = JSON.parse(
      fs.readFileSync("common.js", "utf-8") || []
    );
    console.log("existingData", existingData);

    fs.readFile("common.js", (err, data) => {
      if (err) {
        console.log("err", err);
      } else {
        console.log("data", JSON.parse(data));
      }
    });

    const newData = [...existingData, data];
    fs.writeFileSync("common.js", JSON.stringify(newData));
  } else if (requrl.pathname === "/getStudent" && req.method === "GET") {
    fs.readFile(fileName, function (err, data) {
      res.writeHead(200, { "content-type": "application/json" });
      return res.end(data);
    });
  } else if (
    requrl.pathname === `/getStudentById/${id}` &&
    req.method === "GET"
  ) {
    fs.readFile(fileName, function (err, data) {
      const parseData = JSON.parse(data);
      const resultData = parseData.filter((data) => {
        return data.id === Number(id);
      });
      res.writeHead(200, { "content-type": "application/json" });
      res.write(JSON.stringify(resultData));
      return res.end();
    });
  } else if (
    requrl.pathname === `/updateStudentById/${id}` &&
    req.method === "PATCH"
  ) {
    let data = {
      id: 5,
      name: "surya",
      age: 30,
      secretIdentity: "surya123",
    };
    const existingData = JSON.parse(
      fs.readFileSync("common.js", "utf-8") || []
    );
    const index = existingData.findIndex((data) => data.id === Number(id));
    existingData.splice(index, 1, data);
    fs.writeFileSync("common.js", JSON.stringify(existingData));
  } else if (
    requrl.path === `/deleteStudentById/${id}` &&
    req.method === "DELETE"
  ) {
    const existingData = JSON.parse(
      fs.readFileSync("common.js", "utf-8") || []
    );
    const index = existingData.findIndex((data) => data.id === Number(id));
    existingData.splice(index, 1);
    fs.writeFileSync("common.js", JSON.stringify(existingData));
  } else {
    console.log("no api matched");
  }
});

const port = 5000;
const hostname = "localhost";
server.listen(port, hostname, () => {
  console.log("server is running");
});

console.log("Program ended");
