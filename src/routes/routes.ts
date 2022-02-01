import express from "express";
import {  checkAllIndianPatterns, checkOnePattern, phonePatternInfo } from "../PatternController/NumberPattern";

const router = express.Router();


router.get('/getInfo', phonePatternInfo);
router.post('/checkOne', checkOnePattern);
router.post('/checkAll', checkAllIndianPatterns);



export {router};
