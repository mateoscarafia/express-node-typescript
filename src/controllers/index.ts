import { Request, Response } from "express";
import { getConversionRequest } from "../interfaces";
import { openexCall } from "../services/openexCall";
import httpStatus from "../utils/httpStatus";
import config from "../utils/config";
import { HttpException } from "../utils/helpers/errors";

export const getCurrency = (req: Request, res: Response) => {
  let payload: getConversionRequest = req.body;
  if (!config.CURRENCIES.includes(payload.to)) {
    throw new HttpException(
      httpStatus.INVALID_CURRENCY.CODE,
      httpStatus.INVALID_CURRENCY.MSG
    );
  }
  openexCall(payload.amount, payload.to);
  res.status(httpStatus.OK.CODE).json({ msg: httpStatus.OK.MSG });
};
