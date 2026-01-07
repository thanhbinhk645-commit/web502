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
