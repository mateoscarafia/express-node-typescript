import axios from "axios";
import config from "../utils/config";
import sendMail from "./sendMail";

export const openexCall = (amount: number, currency: string) => {
  axios.get(config.OPENEX_URL + config.OPENEX_ID).then((response) => {
    sendMail(response.data.rates[currency] * amount);
  });
};
