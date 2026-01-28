var add = function (a, b) {
    return a + b;
};
var multiply = function (a, b) {
    return a * b;
};
function logStatus(status) {
    switch (status) {
        case "loading":
            console.log("Đang tải...");
            break;
        case "success":
            console.log("Thành công");
            break;
        case "error":
            console.log("Có lỗi xảy ra");
            break;
    }
}
add(2, 3);
multiply(4, 5);
logStatus("loading");
logStatus("success");
logStatus("error");
