const Phone = {

    MinLength : 7,
    MaxLength : 16,
    NomralLength : 10,
    CountryCode : "+91-",
    Separator:"-",
    Index: 2,
    BasicInfo:'Mobile Number Format: [+][country code][area code][local phone number]\n' +
              'Country Code: 91\nArea Code: Between 2 to 4\nLocal Phone Number: 6 to 8\n' + 
              'Example: 9760064000, +91-9760064000, 919760064000, +91-(976)0064000, +91-(976)006-4000'
};

const ErrorMessage = { 
    INVALID_PHONE : "Phone Number length is not in allowed range.",
    INVALID_CC : "Country Name length is not in allowed range.",
    INVALID_TYPE_VALUE: "Value of type must be in between 1 to 3.",
    INVALID_SEPARATOR: "Separator Can not be more than 1 character.",
    INVALID_INDEX: "Index must be in range between 2 to 5."
};

const ErrorMessageStatus = {
    NOT_VALID_PATTERN: "Phone number Pattern is not valid. Cannot be transformed.",
    INVALID_NUMBER: "Not a Valid Pattern"
};


export {Phone, ErrorMessage, ErrorMessageStatus};