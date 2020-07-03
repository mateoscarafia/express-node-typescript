"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.openexCall = void 0;
const axios_1 = __importDefault(require("axios"));
const config_1 = __importDefault(require("../utils/config"));
const sendMail_1 = __importDefault(require("./sendMail"));
exports.openexCall = (amount, currency) => {
    axios_1.default.get(config_1.default.OPENEX_URL + config_1.default.OPENEX_ID).then((response) => {
        sendMail_1.default(response.data.rates[currency] * amount);
    });
};
