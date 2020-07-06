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

const raml2html = require("raml2html");
const ramlFile = path.join(__dirname, "../src/utils/documentation/index.raml");
const configWithDefaultTheme = raml2html.getConfigForTheme();
app.get("/documentation", (req, res) => {
  raml2html.render(ramlFile, configWithDefaultTheme).then((result:any) => {
    res.send(result)
  });
});

//helmet
app.use(helmet());
app.use(helmet.xssFilter());
app.use(helmet.noSniff());
app.use(helmet.frameguard({ action: "deny" }));
app.use(helmet.hidePoweredBy());
app.use(helmet.referrerPolicy({ policy: "same-origin" }));

//Application metrics
app.use(require("express-status-monitor")());

app.set("port", config.PORT);

app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(routes);

app.use(
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    next(new HttpException(404, "Not found"));
  }
);

app.use(
  (
    err: HttpException,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    handleError(err, req, res);
  }
);

export = app;
