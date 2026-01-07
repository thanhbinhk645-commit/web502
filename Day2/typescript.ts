console.log("typescript");

//1.Core Types: number,string,boolean
let myName: string="ntbgon";//chuoi ky tu
const age: number=36;
const isMarried: boolean=true;

console.log(myName);

//2.Type Inference suy dien ra kieu du lieu
let count=10;
//count="20"-->loi
//3. Core Types: onject
let product:{id:number;title:string;price:number;isActive:boolean}={
    id:1,
    title:"Iphone 14",
    price: 2000,
    isActive: true
};
//4.Core Types:array number[] or Array<number>
let numbers: number[]=[1,2,3,4,5];
let names: string[]=["Alice","Bob","Charlie"];

//6.Special Types:any
let randomValue: any=10;//Gan tam cho chay code
randomValue="Hello";
//7.Type: Union ( | )
let multiType: number|string|boolean;
multiType=20;
multiType="Twenty";
multiType=true;
//8. Literal Type
let statu: "success" | "error" | "loading";
statu = "success"; // Hợp lệ
//statu = "failed"; loi

//9.Null vaf Undefined
const data:{
    id:number;
    title:string;
    description: string|null;
    timeLearn?: number|undefined;
}={
    id:1,
    title: "Learn Typescript",
    description: null,
    //timeLearn: undefinded;
}