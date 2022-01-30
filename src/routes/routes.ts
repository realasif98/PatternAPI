import express from "express";
import { validateBody } from "../ModelValidation/modelValidation";
import {  checkAllIndianPatterns, checkOnePattern, indianPatternInfo } from "../PatternController/NumberPattern";
import { MObileNumberDetail } from "../Models/MobileNumDetails";

const router = express.Router();


router.get('/getInfo', indianPatternInfo);
router.post('/checkOne', checkOnePattern);
router.post('/checkAll', checkAllIndianPatterns);



export {router}
