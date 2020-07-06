"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrency = void 0;
const openexCall_1 = require("../services/openexCall");
const httpStatus_1 = __importDefault(require("../utils/httpStatus"));
const validations_1 = require("../utils/validations");
const errors_1 = require("../utils/helpers/errors");
exports.getCurrency = (req, res, next) => {
    let payload = req.body;
    if (!payload.email || validations_1.validateCurrency(payload.to, payload.from)) {
        next(new errors_1.HttpException(httpStatus_1.default.INVALID_CURRENCY.CODE, httpStatus_1.default.INVALID_CURRENCY.MSG));
    }
    else if (!payload.amount || validations_1.validateAmount(payload.amount)) {
        next(new errors_1.HttpException(httpStatus_1.default.INVALID_AMOUNT.CODE, httpStatus_1.default.INVALID_AMOUNT.MSG));
    }
    else if (!payload.email || validations_1.validateEmail(payload.email)) {
        next(new errors_1.HttpException(httpStatus_1.default.INVALID_EMAIL.CODE, httpStatus_1.default.INVALID_EMAIL.MSG));
    }
    else {
        openexCall_1.openexCall(payload.amount, payload.from, payload.to, payload.email);
        res.status(httpStatus_1.default.OK.CODE).json({ msg: httpStatus_1.default.OK.MSG });
    }
};
