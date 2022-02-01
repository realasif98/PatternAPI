import { expect } from 'chai';
import 'mocha';
import { checkOnePattern, checkPattern, indianPatternInfo, pattern1, pattern3 } from '../PatternController/NumberPattern';
import { TestData } from './TestData';

let testData: Array<string> ;

describe('Check All types of Pattern1', 
  () => {
    let testData: Array<string> = TestData.testDataP1;
    for(let index in testData){
      it(`testing phone number at index ${index} `, async () => {
        const result = await checkPattern(testData[index], true);
        expect(result).to.equal(true) ;
      });
    }
});

describe('Check All types of Pattern2', 
  () => {
    let testData: Array<string> = TestData.testDataP2;
    for(let index in testData){
      it(`testing phone number at index ${index} `, async () => {
        const result = await checkPattern(testData[index], true);
        expect(result).to.equal(true) ;
      });
    } 
});

describe('Check All types of Pattern3', 
  () => {
    let testData: Array<string> = TestData.testDataP3;
    for(let index in testData){
      it(`testing phone number at index ${index} `, async () => { 
        const result = await checkPattern(testData[index], true);
        expect(result).to.equal(true) ; 
    });
  } 
});

describe('Check All types of Pattern4', 
  () => {
    let testData: Array<string> = TestData.testDataP4;
    for(let index in testData){
      it(`testing phone number at index ${index} `, async() => { 
        const result = await checkPattern(testData[index], true);
        expect(result).to.equal(true) ; 
    });
  } 
});

describe('Check All types of Pattern5', 
  () => {
    let testData: Array<string> = TestData.testDataP5;
    for(let index in testData){
      it(`testing phone number at index ${index} `, async() => { 
        const result = await checkPattern(testData[index], true);
        expect(result).to.equal(true) ; 
    });
  } 
});

describe('Check All types of Pattern6', 
  () => {
    let testData: Array<string> = TestData.testDataP6;
    for(let index in testData){
      it(`testing phone number at index ${index} `, async () => { 
        const result = await checkPattern(testData[index], true);
        expect(result).to.equal(true) ; 
    });
  } 
});
