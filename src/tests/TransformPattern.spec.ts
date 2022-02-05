import { transformPattern } from "../PatternController/TransformPattern";
import { expect } from 'chai';
import 'mocha'; 

let testData: any ;

describe('Check All types of Pattern1', 
    () => { 
      beforeEach(function(){
        testData = {
          countryCode:'+91',
          type:1,
          countryCodeIncluded:false,
          phone:'1234567890',
          separator:'-',
          index:3

        };
      }),    
      it(`testing and transforming phone pattern`, async () => {
        const expected = "+911234567890"
        const actual = await transformPattern(testData);
        expect(actual).to.equal(expected);
        expect(actual).to.be.a("string")
      });
});

describe('Check All types of Pattern2', 
    () => { 
      beforeEach(function(){
        testData = {
          countryCode:'+91',
          type:2,
          countryCodeIncluded:false,
          phone:'1234567890',
          separator:'-',
          index:3

        };
      }),    
      it(`testing and transforming phone pattern when countryCode is defined`, async () => {
        const expected = "+91123-4567890"
        const actual = await transformPattern(testData);
        expect(actual).to.equal(expected);
        expect(actual).to.be.a("string")
      });
});

describe('Check All types of Pattern2', 
    () => { 
      beforeEach(function(){
        testData = {
          type:2,
          countryCodeIncluded:true,
          phone:'+91-1234567890',
          separator:'-',
          index:3

        };
      }),    
      it(`testing and transforming phone pattern when countryCode is undefined`, async () => {
        const expected = "+91-123-4567890"
        const actual = await transformPattern(testData);
        expect(actual).to.equal(expected);
        expect(actual).to.be.a("string")
      });
});