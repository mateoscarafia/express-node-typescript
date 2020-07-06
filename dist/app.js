"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const helmet_1 = __importDefault(require("helmet"));
const path_1 = __importDefault(require("path"));
const config_1 = __importDefault(require("./utils/config"));
const routes_1 = __importDefault(require("./routes/"));
const errors_1 = require("./utils/helpers/errors");
const app = express_1.default();
//limiter
const limiter = express_rate_limit_1.default({
    windowMs: 15 * 60 * 1000,
    max: 100,
});
app.use(limiter);
const raml2html = require("raml2html");
const ramlFile = path_1.default.join(__dirname, "../src/utils/documentation/index.raml");
const configWithDefaultTheme = raml2html.getConfigForTheme();
app.get("/documentation", (req, res) => {
    raml2html.render(ramlFile, configWithDefaultTheme).then((result) => {
        res.send(result);
    });
});
//helmet
app.use(helmet_1.default());
app.use(helmet_1.default.xssFilter());
app.use(helmet_1.default.noSniff());
app.use(helmet_1.default.frameguard({ action: "deny" }));
app.use(helmet_1.default.hidePoweredBy());
app.use(helmet_1.default.referrerPolicy({ policy: "same-origin" }));
//Application metrics
app.use(require("express-status-monitor")());
app.set("port", config_1.default.PORT);
app.use(morgan_1.default("dev"));
app.use(cors_1.default());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use(routes_1.default);
app.use((req, res, next) => {
    next(new errors_1.HttpException(404, "Not found"));
});
app.use((err, req, res, next) => {
    errors_1.handleError(err, req, res);
});
module.exports = app;
