import { Phone } from "../constant/Constant";
import { MObileNumberDetail } from "../Models/MobileNumDetails";
import { initialPattern } from "./ValidatePattern";


/**
 * @param {phone} string - contain only main number
 * @param {countryCode} string - contain contry Code
 * @returns {string} - return one of the accepted format  // +91-1234567890
 */
const transformPattern1 = (phone: string ): string => {
    const regex = new RegExp(/(-| )/g);
    const res =  phone.replace(regex, '');
    return res;
};

/**
 * @param {phone} string - contain only main number
 * @param {separator} string - contain - or space
 * @param {index} string - contain index where to put the separator
 * @returns {string} - return one of the accepted format  // +91-123-4567890
 */
 const transformPattern2 = (phone: string, separator= Phone.Separator, index= Phone.Index): string => {
    const res =  phone.substring(0, index) + separator + phone.substring(index);
    return res;
};

/**
 * @param {MObileNumberDetail} request - All detail of mobile number
 * @returns {string} - return the transformed number // +91-123-4567890
 */
export const transformPattern = async(request: MObileNumberDetail): Promise<string> => {
    let countryCode = request.countryCodeIncluded? initialPattern(request.phone) : '';
    const main_number = request.phone.replace(countryCode, '');
    countryCode = request.countryCode != undefined ? 
                                request.countryCode : (countryCode.length >= 2 ? countryCode : Phone.CountryCode);
    let res = '';
    const type = Number(request.type);
    switch(type){
        case 1: 
            res = transformPattern1(main_number);
            break;
        case 2:
            res = transformPattern2(main_number, request.separator, request.index);
            break;
    }
    res = countryCode + res;
    return res;
};