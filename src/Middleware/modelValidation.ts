import { MObileNumberDetail } from "../Models/MobileNumDetails";
import express, { request } from 'express';
import { ErrorModel } from "../Models/ErrorModel";
import { ErrorMessage, Phone } from "../constant/Constant";

const validateObjectSchema = (requestBody: MObileNumberDetail[]) => {
   const validationErrors: Array<ErrorModel> = [];
    requestBody.forEach(requestData => {        
        if(!(requestData.country && requestData.country.length >= 2)){
                validationErrors.push(new ErrorModel(ErrorMessage.INVALID_CC, requestData.country));
        }
        if(!(requestData.phone && requestData.phone.length >= Phone.MinLength && requestData.phone.length <= Phone.MaxLength)){
                validationErrors.push(new ErrorModel(ErrorMessage.INVALID_PHONE, requestData.phone));
        }
    });
    return validationErrors;
};
 
const validateBody = (req: express.Request, res: express.Response, next: express.NextFunction ) => {
   const requestBody = req.body instanceof Array ? req.body : [req.body];
    const validationErrors = validateObjectSchema(requestBody);
    //check for validation errors and return immediately
    if(validationErrors.length > 0){
            res.status(500).send(validationErrors);    
            return; 
    }
    next();
};

export {validateBody};