import express from 'express'
import { MObileNumberDetail } from "../Models/MobileNumDetails";

let validationResult = (requestBody: MObileNumberDetail[]) => { 
    let validationErrors: Array<string> = [];

    requestBody.forEach(requestData => {        
        if(!(requestData.country && requestData.country.length >= 2)){
                validationErrors.push("Country Name is invalid.");
        }
        if(!(requestData.phone && requestData.phone.length >= 7)){
                validationErrors.push("Phone number is invalid.");
        }
    });

    return validationErrors;
}

let validateAllTypesPattern = async (phoneNumber: string): Promise<boolean> => {

       let res = await basicPhoneNumberPattern(phoneNumber) || await indianPattern1(phoneNumber) 
                    || await indianPattern2(phoneNumber) || await indianPattern3(phoneNumber)
                    || await indianPattern4(phoneNumber);
       return res;      
}


let indianPatternInfo = async(req : express.Request, res: express.Response) => {

        let str = 'Indian Mobile Number Format: [+][country code][area code][local phone number]\nCountry Code: 91\nArea Code: Between 2 to 4\nLocal Phone Number: 6 to 8\nExample: 9760064000, +91-9760064000, 919760064000, +91-(976)0064000, +91-(976)006-4000';

        res.send(str);
}

let basicPhoneNumberPattern = async (phoneNumber : string): Promise<boolean> => { 
        let matcher = new RegExp(/^([+]?((91)|(91-))?[\d]{10})*$/);
        return matcher.test(phoneNumber);
}


// 2 + 8 (Area Code + phone Number)
let indianPattern1 = async(phoneNumber : string): Promise<boolean> => {
        let matcher = new RegExp(/^([+]?((91)|(91-))?)?[\d]{2}-[\d]{8}$/);
        return matcher.test(phoneNumber);
}

// 3 + 7  (Area Code + phone Number)
let indianPattern2 = async(phoneNumber : string): Promise<boolean> => {
        let matcher = new RegExp(/^([+]?((91)|(91-))?)?[\d]{3}-[\d]{7}$/);
        return matcher.test(phoneNumber);
}

// 4 + 6  (Area Code + phone Number)
let indianPattern3 = async(phoneNumber : string): Promise<boolean> => {
        let matcher = new RegExp(/^([+]?((91)|(91-))?)?[\d]{4}-[\d]{6}$/);
        return matcher.test(phoneNumber);
}

let indianPattern4 = async(phoneNumber: string): Promise<boolean> => {
        let matcher = new RegExp(/^([+]?((91)|(91-))?(-| |)?)?\([\d]{3}\)(-| |)?[\d]{3}(-| |)?[\d]{4}$/);
        return matcher.test(phoneNumber);
}

let checkAllIndianPatterns = async(req: express.Request, res: express.Response) => {
        let requestBody = req.body as MObileNumberDetail[];
        let validationErrors = validationResult(requestBody);
        //check for validation errors and return immediately
        if(validationErrors.length > 0){
                res.status(500).send(validationErrors);    
                return; 
        }
        let result : Boolean[] = [];

        for(let data of requestBody){
                result.push(await validateAllTypesPattern(data.phone));
        }
        res.send(result);
}

let checkOnePattern = async(req: express.Request, res: express.Response) => {
        let requestBody = [req.body as MObileNumberDetail];
        let validationErrors = validationResult(requestBody);
        //check for validation errors and return immediately
        if(validationErrors.length > 0){
                res.status(500).send(validationErrors);    
                return; 
        }
        let result : Boolean[] = [];
        for(let data of requestBody){
                result.push(await validateAllTypesPattern(data.phone));
        }
        res.send(result);
}

export {checkOnePattern, checkAllIndianPatterns, indianPatternInfo}