"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrency = void 0;
const openexCall_1 = require("../services/openexCall");
const httpStatus_1 = __importDefault(require("../utils/httpStatus"));
const config_1 = __importDefault(require("../utils/config"));
const errors_1 = require("../utils/helpers/errors");
exports.getCurrency = (req, res) => {
    let payload = req.body;
    if (!config_1.default.CURRENCIES.includes(payload.to)) {
        throw new errors_1.HttpException(httpStatus_1.default.INVALID_CURRENCY.CODE, httpStatus_1.default.INVALID_CURRENCY.MSG);
    }
    openexCall_1.openexCall(payload.amount, payload.to);
    res.status(httpStatus_1.default.OK.CODE).json({ msg: httpStatus_1.default.OK.MSG });
};
