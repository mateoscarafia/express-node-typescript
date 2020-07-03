"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const httpStatus = {
    OK: {
        CODE: 200,
        MSG: "OK",
    },
    UNAUTHORIZED: {
        CODE: 401,
        MSG: "Unauthorized",
    },
    BAD_REQUEST: {
        CODE: 400,
        MSG: "Bad Request",
    },
    INVALID_CURRENCY: {
        CODE: 200,
        MSG: "Invalid Currency",
    },
};
exports.default = httpStatus;
