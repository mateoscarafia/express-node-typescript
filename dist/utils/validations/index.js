"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAmount = exports.validateCurrency = exports.validateEmail = void 0;
const config_1 = __importDefault(require("../config"));
exports.validateEmail = (email) => {
    return !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
};
exports.validateCurrency = (to, from) => {
    return !config_1.default.CURRENCIES.includes(to) || !config_1.default.CURRENCIES.includes(from);
};
exports.validateAmount = (amount) => {
    return typeof amount !== "number";
};
