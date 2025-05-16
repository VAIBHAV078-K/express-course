// const express =  require(`express`);
// const { send } = require("vite");
// const app = express();
// let port = 5699;
// app.listen(  port ,  ()=>{
//   console.log(`i am listening the port ${port}`);

// }

// );

// app.get("/apple", (req,res) =>{

//   res.send("i am working on apple port ! ")

// });

// app.get("/orange", (req,res) =>{

//   res.send("i am working on backend ! ")

// });
// app.get("*", (req,res) =>{

//   res.send("404 eroor will not come! ")

// });

// const express = require("express");
// const app = express();

const port = 3000;

// app.listen(3000, () => {
//   console.log(`server is live on the port ${port}`);
// });

// app.get(`/users /:userId`, (req, res) => {
//   const userId = req.params.userId;

//   res.send(`hello ! i am : ${userId}`);
// });

const express = require("express");
const app = express();

// Define a route with a path parameter
app.get("/users/:userId ", (req, res) => {
  const userId  = req.params; // Extract path parameter
  res.send(`User ID is: ${userId}`);
  

});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
