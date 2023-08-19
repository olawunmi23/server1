"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRouter = express_1.default.Router();
userRouter.post('/signup', (req, res) => {
    res.status(200).send('Signup successful');
});
userRouter.post('/login/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User with ID ${userId} just logged in`);
});
exports.default = userRouter;
