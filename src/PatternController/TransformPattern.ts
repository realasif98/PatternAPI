import { Phone } from "../constant/Constant";
import { MObileNumberDetail } from "../Models/MobileNumDetails";


/**
 * @param {phone} string - contain only main number
 * @param {countryCode} string - contain contry Code
 * @returns {string} - return one of the accepted format  // +91-1234567890
 */
const transformPattern1 = (phone: string, countryCode = Phone.CountryCode ): string => {
    const regex = new RegExp(/(-| )/g);
    const res = countryCode +  phone.replace(regex, '');
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
    let res = transformPattern1(request.phone, request.countryCode);
    const type = Number(request.type);
    switch(type){
        case 1: 
            break;
        case 2:
            res = transformPattern2(res, request.separator, request.index);
            break;
    }
    return res;
};