"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.validateBody=void 0;let validateObjectSchema=(e,t)=>JSON.stringify(e)===JSON.stringify(t),validateBody=d=>(e,t,a)=>{return validateObjectSchema(e.body,d)?a():t.status(501).send("Invalid body")};exports.validateBody=validateBody;