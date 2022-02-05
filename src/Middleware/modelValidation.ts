import { MObileNumberDetail } from "../Models/MobileNumDetails";
import express, { request } from 'express';
import { ErrorModel, Prop } from "../Models/ErrorModel";
import { ErrorMessage, Phone } from "../constant/Constant";

const validateObjectSchema = (requestBody: MObileNumberDetail[]) => {
   const validationErrors: Array<ErrorModel> = [];
    requestBody.forEach(requestData => {        
        if(!(requestData.type && !isNaN(requestData.type) && (requestData.type >= 1 && requestData.type <= 2))){
                validationErrors.push(new ErrorModel(ErrorMessage.INVALID_TYPE_VALUE, Prop.TYPE));
        }
        if(!(requestData.phone && requestData.phone.length >= Phone.MinLength && requestData.phone.length <= Phone.MaxLength)){
                validationErrors.push(new ErrorModel(ErrorMessage.INVALID_PHONE, Prop.PHONE));
        }
        if(requestData.separator && requestData.separator.length > 1){
                validationErrors.push(new ErrorModel(ErrorMessage.INVALID_SEPARATOR, Prop.SEPARATOR));
        }
        if(requestData.index && !isNaN(requestData.index) &&  (requestData.index < 1  || requestData.index > 5)){
                validationErrors.push(new ErrorModel(ErrorMessage.INVALID_INDEX, Prop.INDEX));
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