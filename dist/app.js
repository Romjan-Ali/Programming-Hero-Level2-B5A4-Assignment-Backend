"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const book_routes_1 = __importDefault(require("./routes/book.routes"));
const borrow_routes_1 = __importDefault(require("./routes/borrow.routes"));
const globalErrorHandler_1 = __importDefault(require("./middlewares/globalErrorHandler"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
/* app.use(
  cors({ origin: 'https://programming-hero-level2-b5-a4-assig-phi.vercel.app' })
) */
app.use((0, cors_1.default)({ origin: '*' }));
app.use('/api/books', book_routes_1.default);
app.use('/api/borrow', borrow_routes_1.default);
app.use(globalErrorHandler_1.default);
app.get('/api', (req, res) => {
    res.status(200).send(`Welcome to Library Management API`);
});
exports.default = app;
