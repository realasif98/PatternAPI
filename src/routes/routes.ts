import express from "express";
import { validateBody } from "../Middleware/modelValidation";
import { checkAllPatterns, checkOnePattern, phonePatternInfo, transformAllPatterns, transformSinglePattern } from "../PatternController/PatternController";

const router = express.Router();

router.get('/getInfo', phonePatternInfo);

router.post('/checkOne', validateBody, checkOnePattern);
router.post('/checkAll', validateBody,  checkAllPatterns);

router.post('/transformOne', validateBody,  transformSinglePattern);
router.post('/transformAll', validateBody,  transformAllPatterns);

export {router};
