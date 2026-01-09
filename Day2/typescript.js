console.log("typescript");
//1.Core Types: number,string,boolean
var myName = "ntbgon"; //chuoi ky tu
var age = 36;
var isMarried = true;
console.log(myName);
//2.Type Inference suy dien ra kieu du lieu
var count = 10;
//count="20"-->loi
//3. Core Types: onject
var product = {
    id: 1,
    title: "Iphone 14",
    price: 2000,
    isActive: true
};
//4.Core Types:array number[] or Array<number>
var numbers = [1, 2, 3, 4, 5];
var names = ["Alice", "Bob", "Charlie"];
//6.Special Types:any
var randomValue = 10; //Gan tam cho chay code
randomValue = "Hello";
//7.Type: Union ( | )
var multiType;
multiType = 20;
multiType = "Twenty";
multiType = true;
//8. Literal Type
var statu;
statu = "success"; // Hợp lệ
//statu = "failed"; loi
//9.Null vaf Undefined
var data = {
    id: 1,
    title: "Learn Typescript",
    description: null,
    //timeLearn: undefinded;
};
data.timeLearn; //undefined
data.description; //null
//9.Unknown vaf Any
var input = "hello";
//input.toLowerCase();//error
//hay gap try catch axios=>cacth(error:unknown){as AxiosError}:message
input.toLowerCase(); //Casting
input.toLowerCase(); //casting
