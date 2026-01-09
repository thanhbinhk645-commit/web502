var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Rate;
(function (Rate) {
    Rate["low"] = "Th\u1EA5p";
    Rate["medium"] = "Trung b\u00ECnh";
    Rate["hight"] = "Cao";
})(Rate || (Rate = {}));
var listProducts = [
    { name: "Máy tính", price: 6, sale: true, rate: Rate.medium },
    { name: "Máy ảnh", price: 10, sale: false, rate: Rate.hight },
    { name: "Tai nghe", price: 4, sale: true, rate: Rate.low },
    { name: "Sạc", price: 12, sale: true, rate: Rate.hight },
    { name: "Bàn phím", price: 5, sale: false, rate: Rate.medium },
];
function addDescription(products) {
    return products.map(function (product) {
        return __assign(__assign({}, product), { description: product.price > 5 ? "Tốt" : "Bình thường" });
    });
}
listProducts = addDescription(listProducts);
function displayProducts(products) {
    products.forEach(function (product, index) {
        console.log("S\u1EA3n ph\u1EA9m ".concat(index + 1, ":"));
        console.log("- T\u00EAn: ".concat(product.name));
        console.log("- Gi\u00E1: ".concat(product.price));
        console.log("- Sale: ".concat(product.sale ? "Đang sale" : "Không sale"));
        console.log("- \u0110\u00E1nh gi\u00E1: ".concat(product.rate));
        console.log("- M\u00F4 t\u1EA3: ".concat(product.description));
        console.log("-------------------------");
    });
}
displayProducts(listProducts);
function totalPrice(products) {
    return products.reduce(function (total, product) {
        return total + product.price;
    }, 0);
}
console.log("Tổng giá bán:", totalPrice(listProducts));
function filterSaleProducts(products) {
    return products.filter(function (product) {
        return (product.sale === true &&
            (product.rate === Rate.medium || product.rate === Rate.hight));
    });
}
console.log("Sản phẩm sale & đánh giá từ Trung bình trở lên:");
console.log(filterSaleProducts(listProducts));
