function tinh(dai, rong) {
    var chuvi = (dai + rong) * 2;
    var dientich = dai * rong;
    return {
        chuvi: chuvi,
        dientich: dientich
    };
}
var chunhat = tinh(5, 3);
console.log("Chu vi:", chunhat.chuvi);
console.log("dien tich:", chunhat.dientich);
function tingTong() {
    var number = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        number[_i] = arguments[_i];
    }
    var sum = 0;
    for (var _a = 0, number_1 = number; _a < number_1.length; _a++) {
        var num = number_1[_a];
        sum = sum + num;
    }
    return sum;
}
console.log("Tong la:", tingTong(1, 1));
function demKitu(text, char) {
    var count = 0;
    for (var _i = 0, text_1 = text; _i < text_1.length; _i++) {
        var c = text_1[_i];
        if (c == char) {
            count++;
        }
    }
    return count;
}
console.log("So lan xuat hien:", demKitu("Binhgold", "i"));
function ktSnt(a) {
    if (a < 2) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(a); i++) {
        if (a % i === 0) {
            return false;
        }
    }
    return true;
}
console.log("7 co la so nguyen to khong", ktSnt(7));
