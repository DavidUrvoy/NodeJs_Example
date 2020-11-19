"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var express_1 = __importDefault(require("express"));
var http_errors_1 = __importDefault(require("http-errors"));
var morgan_1 = __importDefault(require("morgan"));
var path_1 = __importDefault(require("path"));
var index_1 = __importDefault(require("./routes/index"));
var users_1 = __importDefault(require("./routes/users"));
var app = express_1.default();
var port = 3000;
// view engine setup
app.set('views', path_1.default.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cookie_parser_1.default());
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use('/', index_1.default);
app.use('/users', users_1.default);
// catch 404 and forward to error handler
app.use(function (_request, _response, next) { return next(http_errors_1.default(404)); });
// error handler
app.use(function (err, request, response) {
    // set locals, only providing error in development
    response.locals.message = err.message;
    response.locals.error = request.app.get('env') === 'development' ? err : {};
    // render the error page
    response.status(err.status || 500);
    response.render('error');
});
app.listen(port, function () { return console.log("Node service listening at http://localhost:" + port); });
exports.default = app;
