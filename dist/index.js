"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = __importDefault(require("./routes/user_route"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    res.status(200).json({
        'homepage': '/home',
        'login': '/users/login/{userId}',
        'signup': '/users/signup'
    });
});
app.use(express_1.default.json());
// Use the userRouter for routes starting with /users
app.use('/users', user_route_1.default);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
