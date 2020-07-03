"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = exports.HttpException = void 0;
class HttpException extends Error {
    constructor(status, message) {
        super(message);
        this.status = status;
        this.message = message;
    }
}
exports.HttpException = HttpException;
exports.handleError = (err, res) => {
    const { status, message } = err;
    res.status(status).json({
        message
    });
};
