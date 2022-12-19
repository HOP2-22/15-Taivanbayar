const express = require("express");

const port = 8888;
const myarr = [
  {
    name: "tavnaa",
    age: 15,
  },
  {
    name: "khuse",
    age: 16,
  },
  {
    name: "gana",
    age: 15,
  },
];

const app = express();

app.get("/", (req, res) => {
  res.send(myarr);
});

app.post("/post", (req, res) => {
  myarr.push({ something: true });
  res.send(myarr);
}); 

app.put("/put", (req, res) => {
  myarr.map((arr)=>{
    arr.age += 4
  })
  res.send(myarr);
});

app.delete("/delete", (req, res) => {
  myarr.pop();  
  res.send(myarr);
});



app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
