"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_errors_1 = __importDefault(require("http-errors"));
const path_1 = __importDefault(require("path"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const db_1 = __importDefault(require("../config/db"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
(0, db_1.default)().catch((err) => {
    console.error(err);
    process.exit(1);
});
const FRONTEND_URL = process.env.FRONTEND_URL;
app.use((0, cors_1.default)({
    origin: FRONTEND_URL,
    credentials: true
}));
// Middleware setup
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
// Serve static files from the React app
app.use(express_1.default.static(path_1.default.join(__dirname, 'client', 'build')));
// Routes
const index_1 = __importDefault(require("./routes/index"));
const users_1 = __importDefault(require("./routes/users"));
// Use your routes
app.use('/', index_1.default);
app.use('/users', users_1.default);
// Catch 404 and forward to error handler
app.use(function (req, res, next) {
    next((0, http_errors_1.default)(404));
});
// Error handler
app.use(function (err, req, res, next) {
    // Log the error
    console.error(err);
    // Send an error response
    res.status(err.status || 500).json({
        message: err.message || 'Internal Server Error'
    });
});
// Serve the React app for any other route
app.get('*', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, 'client', 'build', 'index.html'));
});
exports.default = app;
