import express from 'express';
import { ErrorMessage, Phone } from '../constant/Constant';
import { ErrorModel } from '../Models/ErrorModel';
import { MObileNumberDetail } from "../Models/MobileNumDetails";

const validationResult = (requestBody: MObileNumberDetail[]) : Array<ErrorModel> => { 
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

const phonePatternInfo = async(req : express.Request, res: express.Response) => {
        const str = 'Mobile Number Format: [+][country code][area code][local phone number]\nCountry Code: 91\nArea Code: Between 2 to 4\nLocal Phone Number: 6 to 8\nExample: 9760064000, +91-9760064000, 919760064000, +91-(976)0064000, +91-(976)006-4000';
        res.send(str);
};

// possible patterns 91, +91, 91-, +91-
const initialPattern = (phone: string):string => {       
        const initialPattern = new RegExp(/^[+]?((91-)|(91))?(-| |)?/);
        const res = phone.match(initialPattern);
        return  res != null ? res[0] : '' ;  
};

// check for basic pattern
const pattern1 = (phone: string): boolean => {
        return new RegExp(/^[\d]{10}$/).test(phone); 
};

//check for advance pattern (2 + 8), (3 + 7), (4 + 6), (5 + 5) 
const pattern2 = (phone: string): boolean => {
        const firstIndex = phone.search(/(-| )/);
        const remainingLen = Phone.NomralLength - firstIndex;
        if(firstIndex >= 2 && firstIndex <= 5){
                const regExp = "^[\\d]{" + firstIndex  + "}(-| )[\\d]{" + remainingLen + "}$";
                return new RegExp("\\b" + regExp + "\\b").test(phone);
        }
        return false;     
};

//check for more advance pattern 3 + 3 + 4
const pattern3 = (phone: string): boolean => {
        return new RegExp(/^[\d]{3}(-| )[\d]{3}(-| )[\d]{4}$/).test(phone);
};

const checkPattern = async (phone: string, checkInitial = false): Promise<boolean> => {
        //check and return the initial of number 
        const initial = checkInitial ? initialPattern(phone) : '';
        //remove the initial from number
        const main_number = phone.replace(initial, '');
        //remove the initial from the phone number and then verify the remaining
        return  pattern1(main_number) || pattern2(main_number) || pattern3(main_number);
};


const checkAllIndianPatterns = async(req: express.Request, res: express.Response) => {
        const requestBody = req.body as MObileNumberDetail[];
        const validationErrors = validationResult(requestBody);
        //check for validation errors and return immediately
        if(validationErrors.length > 0){
                res.status(500).send(validationErrors);    
                return; 
        }
        const result : boolean[] = [];
        for(const data of requestBody){
                result.push(await checkPattern(data.phone, true));
        }
        res.send(result);
};

const checkOnePattern = async(req: express.Request, res: express.Response) => {
        const requestBody = [req.body as MObileNumberDetail];
        const validationErrors = validationResult(requestBody);
        //check for validation errors and return immediately
        if(validationErrors.length > 0){
                res.status(500).send(validationErrors);    
                return; 
        }
        const result : boolean[] = [];
        for(const data of requestBody){
                result.push(await checkPattern(data.phone, true));
        }
        res.send(result);
};

export {checkOnePattern, checkAllIndianPatterns, phonePatternInfo, checkPattern};