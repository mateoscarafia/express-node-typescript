import { Response } from "express";

export class HttpException extends Error {
  status: number;
  message: string;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.message = message;
  }
}

export const handleError = (err: HttpException, res: Response) => {
    const { status, message } = err;
    res.status(status).json({
      message
    });
};