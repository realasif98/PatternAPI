"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.startServer=void 0;const cors_1=__importDefault(require("cors")),express_1=__importDefault(require("express")),serverConfig_1=require("./config/serverConfig"),modelValidation_1=require("./Middleware/modelValidation"),routes_1=require("./routes/routes");function startServer(){const e=(0,express_1.default)();e.use((0,cors_1.default)()),e.use(express_1.default.json()),e.use(modelValidation_1.validateBody),e.use(function(e,r,t,s){console.log(e),t.status(500).send({msg:e.message,status:500,body:{}})}),e.use("/api/v1/pattern",routes_1.router),e.listen(serverConfig_1.config.port,()=>{console.log("app listening on port "+serverConfig_1.config.port)})}(exports.startServer=startServer)();