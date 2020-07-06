import config from "../config";

export const validateEmail = (email: string) => {
  return !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};

export const validateCurrency = (to: string, from: string) => {
  return !config.CURRENCIES.includes(to) || !config.CURRENCIES.includes(from);
};

export const validateAmount = (amount: number) => {
    return typeof amount !== "number"
};
