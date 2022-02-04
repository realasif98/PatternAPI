import express from 'express';
import { MObileNumberDetail } from '../Models/MobileNumDetails';
import { transformPattern } from './TransformPattern';
import { checkPattern, } from './ValidatePattern';


/**
 * @param {express.Request} req
 * @param {express.Response} res => a string format info about the phone number format
 */
const phonePatternInfo = async(req : express.Request, res: express.Response) => {
    const str = 'Mobile Number Format: [+][country code][area code][local phone number]\nCountry Code: 91\nArea Code: Between 2 to 4\nLocal Phone Number: 6 to 8\nExample: 9760064000, +91-9760064000, 919760064000, +91-(976)0064000, +91-(976)006-4000';
    res.send(str);
};

/**
 * @param {express.Request} req
 * @param {express.Response} res => A list of boolean values
 */
const checkAllIndianPatterns = async(req: express.Request, res: express.Response) => {
    const requestBody = req.body as MObileNumberDetail[];
    const result : boolean[] = [];
    for(const data of requestBody){
            result.push(await checkPattern(data.phone, true));
    }
    res.send(result);
};

/**
 * @param {express.Request} req
 * @param {express.Response} res => A single boolean value
 */
const checkOnePattern = async(req: express.Request, res: express.Response) => {
    const requestBody = [req.body as MObileNumberDetail];
    const result : boolean[] = [];
    for(const data of requestBody){
            result.push(await checkPattern(data.phone, true));
    }
    res.send(result);
};

/**
 * @param {express.Request} req
 * @param {express.Response} res => A single formatted number
 */
 const transformSinglePattern = async(req: express.Request, res: express.Response) => {
    const requestBody = [req.body as MObileNumberDetail]; 
    const result : string[] = [];
    for(const data of requestBody){
            result.push(await transformPattern(data.phone, data.type, data.countryCode, data.separator, data.index));
    }
    res.send(result);
};

export {phonePatternInfo, checkOnePattern, checkAllIndianPatterns, transformSinglePattern};