import { expect } from 'chai';
import 'mocha';
import { checkPattern } from '../PatternController/ValidatePattern';
import { TestData } from './TestData';

let testData: Array<string> ;

describe('Check All types of Pattern1', 
  () => {
    testData = TestData.testDataP1;
    for(let index in testData){
      it(`testing phone number at index ${index} `, async () => {
        const result = await checkPattern(testData[index], true);
        expect(result).to.equal(true) ;
      });
    }
});

describe('Check All types of Pattern2', 
  () => {
    testData = TestData.testDataP2;
    for(let index in testData){
      it(`testing phone number at index ${index} `, async () => {
        const result = await checkPattern(testData[index], true);
        expect(result).to.equal(true) ;
      });
    } 
});

describe('Check All types of Pattern3', 
  () => {
    testData = TestData.testDataP3;
    for(let index in testData){
      it(`testing phone number at index ${index} `, async () => { 
        const result = await checkPattern(testData[index], true);
        expect(result).to.equal(true) ; 
    });
  } 
});

describe('Check All types of Pattern4', 
  () => {
    testData = TestData.testDataP4;
    for(let index in testData){
      it(`testing phone number at index ${index} `, async() => { 
        const result = await checkPattern(testData[index], true);
        expect(result).to.equal(true) ; 
    });
  } 
});

describe('Check All types of Pattern5', 
  () => {
    testData = TestData.testDataP5;
    for(let index in testData){
      it(`testing phone number at index ${index} `, async() => { 
        const result = await checkPattern(testData[index], true);
        expect(result).to.equal(true) ; 
    });
  } 
});

describe('Check All types of Pattern6', 
  () => {
    testData = TestData.testDataP6;
    for(let index in testData){
      it(`testing phone number at index ${index} `, async () => { 
        const result = await checkPattern(testData[index], true);
        expect(result).to.equal(true) ; 
    });
  } 
});
