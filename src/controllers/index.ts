import { Request, Response, NextFunction } from "express";

import { getConversionRequest } from "../interfaces";
import { openexCall } from "../services/openexCall";
import httpStatus from "../utils/httpStatus";
import {
  validateAmount,
  validateCurrency,
  validateEmail,
} from "../utils/validations";
import { HttpException } from "../utils/helpers/errors";

export const getCurrency = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let payload: getConversionRequest = req.body;
  if (!payload.email || validateCurrency(payload.to, payload.from)) {
    next(
      new HttpException(
        httpStatus.INVALID_CURRENCY.CODE,
        httpStatus.INVALID_CURRENCY.MSG
      )
    );
  } else if (!payload.amount || validateAmount(payload.amount)) {
    next(
      new HttpException(
        httpStatus.INVALID_AMOUNT.CODE,
        httpStatus.INVALID_AMOUNT.MSG
      )
    );
  } else if (!payload.email || validateEmail(payload.email)) {
    next(
      new HttpException(
        httpStatus.INVALID_EMAIL.CODE,
        httpStatus.INVALID_EMAIL.MSG
      )
    );
  } else {
    openexCall(payload.amount, payload.from, payload.to, payload.email);
    res.status(httpStatus.OK.CODE).json({ msg: httpStatus.OK.MSG });
  }
};
