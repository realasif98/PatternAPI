import { transformPattern } from "../PatternController/TransformPattern";

import { expect } from 'chai';
import 'mocha';
import { checkPattern } from '../PatternController/ValidatePattern';
import { TestData } from './TestData.spec';

let testData: any ;

describe('Check All types of Pattern1', 
  () => {
    testData = TestData.testDataP1;
    for(let index in testData){
      it(`testing phone number at index ${index} `, async () => {
        const result = await transformPattern(testData);
        expect(result).to.equal(true) ;
      });
    }
});