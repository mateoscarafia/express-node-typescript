import express from "express";
import morgan from "morgan";
import cors from "cors";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import path from "path";

import config from "./utils/config";
import routes from "./routes/";
import { handleError, HttpException } from "./utils/helpers/errors";

const app = express();

//limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100, 
});
app.use(limiter);

//helmet
app.use(helmet());
app.use(helmet.xssFilter());
app.use(helmet.noSniff());
app.use(helmet.frameguard({ action: "deny" }));
app.use(helmet.hidePoweredBy());
app.use(helmet.referrerPolicy({ policy: "same-origin" }));

//Application metrics
app.use(require('express-status-monitor')());

app.set("port", config.PORT);

app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(routes);

app.use(
  (
    err: HttpException,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    handleError(err, res);
  }
);

export default app;
