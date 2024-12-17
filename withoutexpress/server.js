const http = require("http");
const url = require("url");
const port = 5000;

const server = http.createServer((req, res) => {
  let service = {
    getProductRequest: function (req, res) {
      let name = "get all product";
      let response = {
        "products": name,
      };
      res.statusCode = 200;
      // res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(response));
    },
    addProductRequest: function (req, res) {
      body = "products added successfully";
      let response = { "products": body };
      res.statusCode = 200;
      res.setHeader("content-type", "application/json");
      res.end(JSON.stringify(response));
    },
    getOneProductRequest: function (req, res) {
      const reqUrl = url.parse(req.url, true);
      let response = { "product": "get one product" };
      if (reqUrl.query.id) {
        res.statusCode = 200;
        res.setHeader("content-type", "application/json");
        res.end(JSON.stringify(response));
      } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ "products": "no product id match to get " }));
      }
    },
    updateProductRequest: function (req, res) {
        const reqUrl = url.parse(req.url, true);
        console.log(reqUrl.query.id);
        let response = { "product": "Updated product successfully" };
        if (reqUrl.query.id) {
          res.statusCode = 200;
          res.setHeader("content-type", "application/json");
          res.end(JSON.stringify(response));
        } else {
          res.statusCode = 404;
          res.end(JSON.stringify({ "products": "No product id match to update" }));
        }
      },
      deleteProductRequest:function(req,res){
        const reqUrl=url.parse(req.url,true)
        let response={"product":"Deleted product successfully"}
        if(reqUrl.query.id){
            res.statusCode=200;
            res.setHeader('content-type',"application/json");
            res.end(JSON.stringify(response))
        }
        else{
            res.statusCode=404;
            res.end(JSON.stringify({"products":"no products identified to delete"}))
        }
    }
  };

  const reqUrl = url.parse(req.url, true);
       
  if (reqUrl.pathname == "/getProducts" && req.method === "GET") {
    service.getProductRequest;
  } else if (reqUrl.pathname == "/addProducts" && req.method === "POST") {
    service.addProductRequest;
  } else if (
    reqUrl.pathname == "/getProductsById" &&
    req.method === "GET"
  ) {
    service.getOneProductRequest;
  }
  else if (
    reqUrl.pathname == "/updateProductById" &&
    req.method === "PATCH"
  ) {
    service.updateProductRequest;
  }
  else if (
    reqUrl.pathname == "/deleteProductById" &&
    req.method === "DELETE"
  ) {
    service.deleteProductRequest;
  }
});

server.listen(port, () => {
  console.log("server running");
});
