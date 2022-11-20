define("index", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Person = void 0;
    var Person = /** @class */ (function () {
        function Person(name, age) {
            Object.defineProperty(this, "name", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: name
            });
            Object.defineProperty(this, "age", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: age
            });
            if (age < 0)
                throw new Error('Age cant be negative');
        }
        return Person;
    }());
    exports.Person = Person;
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
