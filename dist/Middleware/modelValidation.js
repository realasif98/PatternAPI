"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.validateBody=void 0;const ErrorModel_1=require("../Models/ErrorModel"),Constant_1=require("../constant/Constant"),validateObjectSchema=e=>{const o=[];return e.forEach(e=>{e.country&&2<=e.country.length||o.push(new ErrorModel_1.ErrorModel(Constant_1.ErrorMessage.INVALID_CC,e.country)),e.phone&&e.phone.length>=Constant_1.Phone.MinLength&&e.phone.length<=Constant_1.Phone.MaxLength||o.push(new ErrorModel_1.ErrorModel(Constant_1.ErrorMessage.INVALID_PHONE,e.phone))}),o},validateBody=(e,o,t)=>{e=e.body instanceof Array?e.body:[e.body],e=validateObjectSchema(e);0<e.length?o.status(500).send(e):t()};exports.validateBody=validateBody;