import express from 'express';
import { ErrorMessage, Phone } from '../constant/Constant';
import { ErrorModel } from '../Models/ErrorModel';
import { MObileNumberDetail } from "../Models/MobileNumDetails";

// /**
//  * Validate the request data
//  * @constructor
//  * @param {MObileNumberDetail[]} requestBody - contain the req body send in request.
//  * @return {ErrorModel} - returns the list of invalid requestData
//  */
// const validationResult = (requestBody: MObileNumberDetail[]) : Array<ErrorModel> => { 
//     const validationErrors: Array<ErrorModel> = [];
//     requestBody.forEach(requestData => {        
//         if(!(requestData.country && requestData.country.length >= 2)){
//                 validationErrors.push(new ErrorModel(ErrorMessage.INVALID_CC, requestData.country));
//         }
//         if(!(requestData.phone && requestData.phone.length >= Phone.MinLength && requestData.phone.length <= Phone.MaxLength)){
//                 validationErrors.push(new ErrorModel(ErrorMessage.INVALID_PHONE, requestData.phone));
//         }
//     });
//     return validationErrors;
// };


/**
 * Validate the Country Code: 91, +91, 91-, +91-
 * @constructor
 * @param {string} phone - phone number send in request.
 * @return {string} - returns the country code
 */
const initialPattern = (phone: string):string => {       
        const initialPattern = new RegExp(/^[+]?((91-)|(91))?(-| |)?/);
        const res = phone.match(initialPattern);
        return  res != null ? res[0] : '' ;  
};

/**
 * Validate the Basic Pattern
 * @constructor
 * @param {string} phone - phone number send in request.
 * @return {boolean} - returns true if validation successful
 */
const pattern1 = (phone: string): boolean => {
        return new RegExp(/^[\d]{10}$/).test(phone); 
};

/**
 * Validate the Advanced Pattern
 * @constructor
 * @param {string} phone - phone number send in request.
 * @return {boolean} - returns true if validation successful
 */
const pattern2 = (phone: string): boolean => {
        const firstIndex = phone.search(/(-| )/);
        const remainingLen = Phone.NomralLength - firstIndex;
        if(firstIndex >= 2 && firstIndex <= 5){
                const regExp = "^[\\d]{" + firstIndex  + "}(-| )[\\d]{" + remainingLen + "}$";
                return new RegExp("\\b" + regExp + "\\b").test(phone);
        }
        return false;     
};

/**
 * Validate the More Advanced Pattern
 * @constructor
 * @param {string} phone - phone number send in request.
 * @return {boolean} - returns true if validation successful
 */
const pattern3 = (phone: string): boolean => {
        return new RegExp(/^[\d]{3}(-| )[\d]{3}(-| )[\d]{4}$/).test(phone);
};


/**
 * Validate the Basic Pattern
 * @constructor
 * @param {string} phone - phone number send in request.
 * @param {boolean} checkInitial - true if country-code send in request.
 * @return {boolean} - returns true if validation successful
 */
const checkPattern = async (phone: string, checkInitial = false): Promise<boolean> => {
        //check and return the initial of number 
        const initial = checkInitial ? initialPattern(phone) : '';
        //remove the initial from number
        const main_number = phone.replace(initial, '');
        //remove the initial from the phone number and then verify the remaining
        return  pattern1(main_number) || pattern2(main_number) || pattern3(main_number);
};


export { checkPattern};