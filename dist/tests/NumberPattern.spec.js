"use strict";var __awaiter=this&&this.__awaiter||function(t,s,o,c){return new(o=o||Promise)(function(a,e){function i(t){try{r(c.next(t))}catch(t){e(t)}}function n(t){try{r(c.throw(t))}catch(t){e(t)}}function r(t){var e;t.done?a(t.value):((e=t.value)instanceof o?e:new o(function(t){t(e)})).then(i,n)}r((c=c.apply(t,s||[])).next())})};Object.defineProperty(exports,"__esModule",{value:!0});const chai_1=require("chai"),ValidatePattern_1=(require("mocha"),require("../PatternController/ValidatePattern")),TestData_1=require("./TestData");let testData;describe("Check All types of Pattern1",()=>{testData=TestData_1.TestData.testDataP1;for(let e in testData)it(`testing phone number at index ${e} `,()=>__awaiter(void 0,void 0,void 0,function*(){var t=yield(0,ValidatePattern_1.checkPattern)(testData[e],!0);(0,chai_1.expect)(t).to.equal(!0)}))}),describe("Check All types of Pattern2",()=>{testData=TestData_1.TestData.testDataP2;for(let e in testData)it(`testing phone number at index ${e} `,()=>__awaiter(void 0,void 0,void 0,function*(){var t=yield(0,ValidatePattern_1.checkPattern)(testData[e],!0);(0,chai_1.expect)(t).to.equal(!0)}))}),describe("Check All types of Pattern3",()=>{testData=TestData_1.TestData.testDataP3;for(let e in testData)it(`testing phone number at index ${e} `,()=>__awaiter(void 0,void 0,void 0,function*(){var t=yield(0,ValidatePattern_1.checkPattern)(testData[e],!0);(0,chai_1.expect)(t).to.equal(!0)}))}),describe("Check All types of Pattern4",()=>{testData=TestData_1.TestData.testDataP4;for(let e in testData)it(`testing phone number at index ${e} `,()=>__awaiter(void 0,void 0,void 0,function*(){var t=yield(0,ValidatePattern_1.checkPattern)(testData[e],!0);(0,chai_1.expect)(t).to.equal(!0)}))}),describe("Check All types of Pattern5",()=>{testData=TestData_1.TestData.testDataP5;for(let e in testData)it(`testing phone number at index ${e} `,()=>__awaiter(void 0,void 0,void 0,function*(){var t=yield(0,ValidatePattern_1.checkPattern)(testData[e],!0);(0,chai_1.expect)(t).to.equal(!0)}))}),describe("Check All types of Pattern6",()=>{testData=TestData_1.TestData.testDataP6;for(let e in testData)it(`testing phone number at index ${e} `,()=>__awaiter(void 0,void 0,void 0,function*(){var t=yield(0,ValidatePattern_1.checkPattern)(testData[e],!0);(0,chai_1.expect)(t).to.equal(!0)}))});