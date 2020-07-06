import axios from "axios";
import config from "../utils/config";
import sendMail from "./sendMail";
require("dotenv").config();

export const openexCall = (amount: number, from: string, to: string, email: string) => {
  axios
    .get(config.OPENEX_URL + process.env.OPENEX_ID)
    .then((response) => {
      sendMail((amount / response.data.rates[from]) * response.data.rates[to]);
    })
    .catch((err) => {
      console.log("Something failed", err);
    });
};
