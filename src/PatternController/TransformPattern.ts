import { Phone } from "../constant/Constant";


/**
 * @param {phone} string - contain only main number
 * @param {countryCode} string - contain contry Code
 * @param {string} - return one of the accepted format  //1234567890
 */
 const transformPattern1 = (phone: string): string => {
    const regex = new RegExp(/(-| )/g);
    const res =  phone.replace(regex, '');
    return res;
};

/**
 * @param {phone} string - contain only main number
 * @param {countryCode} string - contain contry Code
 * @param {string} - return one of the accepted format  // +91-1234567890
 */
const transformPattern2 = (phone: string, countryCode = Phone.CountryCode ): string => {
    const regex = new RegExp(/(-| )/g);
    const res = countryCode +  phone.replace(regex, '');
    return res;
};

/**
 * @param {phone} string - contain only main number
 * @param {countryCode} string - contain contry Code
 * @param {string} - return one of the accepted format  // +91-1234567890
 */
 const transformPattern3 = (phone: string, countryCode: string, separator:string, index: number): string => {
    const res =  phone.substring(0, index) + separator + phone.substring(index);
    return res;
};


export const transformPattern = async(phone: string, type: number, countryCode = Phone.CountryCode, separator = Phone.Separator, index = Phone.MinIndex): Promise<string> => {
    let res = "";
    switch(type){
        case 1:
           res = transformPattern1(phone);
           break;
        case 2:
            res = transformPattern2(phone, countryCode);
            break;
        case 3:
            res = transformPattern3(transformPattern1(phone), countryCode, separator, index);
            break;
    }
    return res;
};