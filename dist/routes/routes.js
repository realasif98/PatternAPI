"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.router=void 0;const express_1=__importDefault(require("express")),NumberPattern_1=require("../PatternController/NumberPattern"),router=express_1.default.Router();exports.router=router,router.get("/getInfo",NumberPattern_1.indianPatternInfo),router.post("/checkOne",NumberPattern_1.checkOnePattern),router.post("/checkAll",NumberPattern_1.checkAllIndianPatterns);