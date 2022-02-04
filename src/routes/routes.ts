import express from "express";
import { validateBody } from "../Middleware/modelValidation";
import { checkAllIndianPatterns, checkOnePattern, phonePatternInfo, transformSinglePattern } from "../PatternController/PatternController";

const router = express.Router();

router.get('/getInfo', phonePatternInfo);
router.post('/checkOne', validateBody, checkOnePattern);
router.post('/checkAll', validateBody,  checkAllIndianPatterns);

router.post('/transformOne', validateBody,  transformSinglePattern);

export {router};
