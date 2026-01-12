var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var averageScore = function () {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    var total = scores.reduce(function (sum, score) { return sum + score; }, 0);
    return total / scores.length;
};
console.log(averageScore(8, 9, 10)); // 9
console.log(averageScore(5, 6, 7, 8)); // 6.5
var checkNumber = function (n) {
    return n % 2 === 0 ? "even" : "odd";
};
console.log(checkNumber(4)); // even
console.log(checkNumber(7)); // odd
var createUser = function (name, age, role) {
    if (role === void 0) { role = "user"; }
    if (age !== undefined) {
        return "Name: ".concat(name, ", Age: ").concat(age, ", Role: ").concat(role);
    }
    return "Name: ".concat(name, ", Role: ").concat(role);
};
console.log(createUser("Hòa"));
console.log(createUser("Nam", 25, "admin"));
var mergeProducts = function (arr1, arr2) {
    return __spreadArray(__spreadArray([], arr1, true), arr2, true);
};
var printProducts = function () {
    var products = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        products[_i] = arguments[_i];
    }
    console.log("Danh sách sản phẩm:");
    products.forEach(function (product, index) {
        console.log("".concat(index + 1, ". ").concat(product));
    });
};
var a = ["iPhone", "Samsung"];
var b = ["Xiaomi", "Oppo"];
var merged = mergeProducts(a, b);
console.log(merged);
printProducts.apply(void 0, merged);
