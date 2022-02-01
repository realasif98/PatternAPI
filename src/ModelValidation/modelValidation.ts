import { MObileNumberDetail } from "../Models/MobileNumDetails";
import express from 'express';

const validateObjectSchema = (received: any, actual: MObileNumberDetail) => {
    return JSON.stringify(received) === JSON.stringify(actual);
};
 
const validateBody = (actualSchema: any) => {
      return (req: express.Request, res: express.Response, next: express.NextFunction ) => {
        const result = validateObjectSchema(req.body, actualSchema);
         if(!result){
            return res.status(501).send("Invalid body");
         }
         return next();
      };
};

export {validateBody};