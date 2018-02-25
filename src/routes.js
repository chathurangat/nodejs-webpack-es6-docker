import {RequestHandlerService} from "./service/RequestHandlerService";
const express = require('express');
const router = express.Router();


router.all('/*', function (request, response, next) {
    console.log(" this will be applied to all routes ");
    next();
});


router.get("/", async (request, response)=> {

    let message = await RequestHandlerService.handleHttpRequest(request.method, request.path);

    response.status(200).json({
        "message": message
    });
});


router.get("/products", (request, response)=> {

    response.status(200).json({
        "message": "HTTP " + request.method + " Request with URL Pattern " + request.path
    });
});


router.get("/products/:id", (request, response)=> {

    response.status(200).json({
        "message": "HTTP " + request.method + " Request with URL Pattern " + request.path
    });
});


router.post("/products", (request, response)=> {

    response.status(200).json({
        "message": "HTTP " + request.method + " Request with URL Pattern " + request.path
    });
});


module.exports = router;