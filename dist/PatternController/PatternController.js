"use strict";var __awaiter=this&&this.__awaiter||function(e,i,c,s){return new(c=c||Promise)(function(n,t){function o(e){try{a(s.next(e))}catch(e){t(e)}}function r(e){try{a(s.throw(e))}catch(e){t(e)}}function a(e){var t;e.done?n(e.value):((t=e.value)instanceof c?t:new c(function(e){e(t)})).then(o,r)}a((s=s.apply(e,i||[])).next())})};Object.defineProperty(exports,"__esModule",{value:!0}),exports.transformSinglePattern=exports.checkAllIndianPatterns=exports.checkOnePattern=exports.phonePatternInfo=void 0;const TransformPattern_1=require("./TransformPattern"),ValidatePattern_1=require("./ValidatePattern"),phonePatternInfo=(e,t)=>__awaiter(void 0,void 0,void 0,function*(){t.send("Mobile Number Format: [+][country code][area code][local phone number]\nCountry Code: 91\nArea Code: Between 2 to 4\nLocal Phone Number: 6 to 8\nExample: 9760064000, +91-9760064000, 919760064000, +91-(976)0064000, +91-(976)006-4000")}),checkAllIndianPatterns=(exports.phonePatternInfo=phonePatternInfo,(n,o)=>__awaiter(void 0,void 0,void 0,function*(){const e=[];for(const t of n.body)e.push(yield(0,ValidatePattern_1.checkPattern)(t.phone,!0));o.send(e)})),checkOnePattern=(exports.checkAllIndianPatterns=checkAllIndianPatterns,(n,o)=>__awaiter(void 0,void 0,void 0,function*(){const e=[];for(const t of[n.body])e.push(yield(0,ValidatePattern_1.checkPattern)(t.phone,!0));o.send(e)})),transformSinglePattern=(exports.checkOnePattern=checkOnePattern,(n,o)=>__awaiter(void 0,void 0,void 0,function*(){const e=[];for(const t of[n.body])e.push(yield(0,TransformPattern_1.transformPattern)(t.phone,t.type,t.countryCode,t.separator,t.index));o.send(e)}));exports.transformSinglePattern=transformSinglePattern;