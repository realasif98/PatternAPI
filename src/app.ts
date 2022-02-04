import cors from "cors";
import express, { NextFunction } from "express";
import { config } from './config/serverConfig';
import { validateBody } from "./Middleware/modelValidation";
import { router } from "./routes/routes";


export function startServer(){

    const app = express();

    //enable cors in project 
    app.use(cors());

    //convert the request into json format
    app.use(express.json());   

    //middleware to send a msg on error
    app.use(function (err: Error, req: express.Request, res: express.Response, next: express.NextFunction){
        console.log(err);
        res.status(500).send(
            {
                msg: err.message,
                status: 500,
                body: {}
            });
    }); 
     
    //attach the patternController
    app.use('/api/v1/pattern', router);

    app.use(validateBody);
    
    //start listening on specified port 
    app.listen(config.port, ()=> {
        console.log(`app listening on port ${config.port}`);
    });
}
 
startServer(); 