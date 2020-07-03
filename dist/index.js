"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("./utils/config"));
app_1.default.listen(app_1.default.get('port'), () => {
    console.log(`Running on ${config_1.default.ENV} PORT: ${config_1.default.PORT}`);
});
