import express from 'express'
import { ErrorMessage, Phone } from '../constant/Constant';
import { MObileNumberDetail } from "../Models/MobileNumDetails";

let validationResult = (requestBody: MObileNumberDetail[]) : Array<string> => { 
    let validationErrors: Array<string> = [];
    requestBody.forEach(requestData => {        
        if(!(requestData.country && requestData.country.length >= 2)){
                validationErrors.push(ErrorMessage.INVALID_CC);
        }
        if(!(requestData.phone && requestData.phone.length >= Phone.MinLength && requestData.phone.length <= Phone.MaxLength)){
                validationErrors.push(ErrorMessage.INVALID_PHONE);
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
        let str = 'Mobile Number Format: [+][country code][area code][local phone number]\nCountry Code: 91\nArea Code: Between 2 to 4\nLocal Phone Number: 6 to 8\nExample: 9760064000, +91-9760064000, 919760064000, +91-(976)0064000, +91-(976)006-4000';
        res.send(str);
}

// possible patterns 91, +91, 91-, +91-
let initialPattern = (phone: string):string => {       
        let initialPattern = new RegExp(/^[+]?((91-)|(91))?(-| |)?/);
        let res = phone.match(initialPattern);
        return  res != null ? res[0] : '' ;  
}

// check for basic pattern
let pattern1 = (phone: string): boolean => {
        return new RegExp(/^[\d]{10}$/).test(phone); 
}

//check for more advance pattern (2 + 8), (3 + 7), (4 + 6), (5 + 5) 
let pattern2 = (phone: string): boolean => {
        let firstIndex = phone.search(/(-| )/)
        let remainingLen = Phone.NomralLength - firstIndex;
        if(firstIndex >= 2 && firstIndex <= 5){
                let regExp = "[\\d]{" + firstIndex  + "}(-| )[\\d]{" + remainingLen + "}$"
                return new RegExp("\\b" + regExp + "\\b").test(phone);
        }
        return false;     
}


//check for more advance pattern 3 + 3 + 4
let pattern5 = (phone: string): boolean => {
        return new RegExp(/[\d]{3}(-| )[\d]{3}(-| )[\d]{4}$/).test(phone);
}

let checkPattern = async (phone: string, checkInitial: boolean = false): Promise<boolean> => {
        //len of string must be in between 
        if(phone.length < 8){
                return false;
        }
        //check and return the initial of number 
        let initial = checkInitial ? initialPattern(phone) : '';
        //remove the initial from the phone number and then verify the remaining
        return  pattern1(phone.replace(initial, ''));
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
                result.push(await checkPattern(data.phone, true));
        }
        res.send(result);
}




export {checkOnePattern, checkAllIndianPatterns, indianPatternInfo, pattern1}