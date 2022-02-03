import express from "express";
import { validateBody } from "../Middleware/modelValidation";
import { checkAllIndianPatterns, checkOnePattern, phonePatternInfo } from "../PatternController/PatternController";

const router = express.Router();

router.get('/getInfo', phonePatternInfo);
router.post('/checkOne', checkOnePattern);
router.post('/checkAll',  checkAllIndianPatterns);

export {router};
