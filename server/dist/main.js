var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define("index", ["require", "exports", "express"], function (require, exports, express_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    express_1 = __importDefault(express_1);
    var app = (0, express_1.default)();
    app.listen(3000);
    console.log('Server started on port 3000!');
});
// this file contains the calculator functions add, subtract, multiply, divide, and clear
define("components/calculator", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.divide = exports.multiply = exports.subtract = exports.add = void 0;
    var add = function (a, b) { return a + b; };
    exports.add = add;
    var subtract = function (a, b) { return a - b; };
    exports.subtract = subtract;
    var multiply = function (a, b) { return a * b; };
    exports.multiply = multiply;
    var divide = function (a, b) { return a / b; };
    exports.divide = divide;
});
