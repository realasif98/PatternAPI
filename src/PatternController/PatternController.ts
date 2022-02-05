import express from 'express';
import { ErrorMessage, ErrorMessageStatus, Phone } from '../constant/Constant';
import { MObileNumberDetail } from '../Models/MobileNumDetails';
import { transformPattern } from './TransformPattern';
import { checkPattern, } from './ValidatePattern';


/**
 * @param {express.Request} req
 * @param {express.Response} res => a string format info about the phone number format
 */
const phonePatternInfo = async(req : express.Request, res: express.Response) => {
    res.send(Phone.BasicInfo);
};

/**
 * @param {express.Request} req
 * @param {express.Response} res => A single boolean value
 */
 const checkOnePattern = async(req: express.Request, res: express.Response) => {
    const requestBody = req.body as MObileNumberDetail;
    const isValidNumber = await checkPattern(requestBody.phone, true);
    const result = isValidNumber ? true : ErrorMessageStatus.INVALID_NUMBER;
    res.send(result);
};

/**
 * @param {express.Request} req
 * @param {express.Response} res => A list of boolean values
 */
const checkAllPatterns = async(req: express.Request, res: express.Response) => {
    const requestBody = req.body as MObileNumberDetail[];
    const response : (boolean|string)[] = [];
    for(const data of requestBody){
            const result = await checkPattern(data.phone, true)? true: ErrorMessageStatus.INVALID_NUMBER;
            response.push(result);
    }
    res.send(response);
};

/**
 * @param {express.Request} req
 * @param {express.Response} res => A single formatted number
 */
 const transformSinglePattern = async(req: express.Request, res: express.Response) => {
    const requestBody = req.body as MObileNumberDetail; 
    const isValidNumber = await checkPattern(requestBody.phone, requestBody.countryCodeIncluded);
    const result = isValidNumber ? await transformPattern(requestBody) : ErrorMessageStatus.INVALID_NUMBER;
    res.send(result);
};

/**
 * @param {express.Request} req
 * @param {express.Response} res => A single formatted number
 */
 const transformAllPatterns = async(req: express.Request, res: express.Response) => {
    const requestBody = req.body as MObileNumberDetail[]; 
    const response : string[] = [];
    for(const data of requestBody){
            const isValidNumber = await checkPattern(data.phone, data.countryCodeIncluded);
            const result = isValidNumber ? await transformPattern(data) : ErrorMessageStatus.INVALID_NUMBER;
            response.push(result);
    }
    res.send(response);
};

export {phonePatternInfo, checkOnePattern, checkAllPatterns, transformSinglePattern, transformAllPatterns};