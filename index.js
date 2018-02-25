import express from "express";
const app = express();
import routes from "./src/routes";

let port = 2000;

app.listen(port, ()=> {
    console.log(" server is started and listen on port [" + port + "]");
});

//all the requests will be handled by routes middleware
app.use("/", routes);


