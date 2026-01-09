//1.Function co Return,params
function add(a:number,b:number): number{
    return a+b;
}

const addResult=(a:number,b:number):number=>a+b;

add(2,3);//5
addResult(4,5);//9
//add(undefined,null);//error

//2.Function khong co return
function logMessage(message:string):void{
    console.log("Message",message);
}
//props trong react sang cpmponent: onClick:()=>void
//props trong react sang cpmponent: onSearch:(keyword:string)=>string

//3.tham so mac dinh (Default Parameter)
function greetUser(name:string,greeting:string|number="hello"):string{
    return `${greeting},${name}!`;
}
greetUser("Alice");//"hello,Alice!"
greetUser("Alice","Xin chao");//"Xin chao,Alice!"

//4.tham so tuy chon(Optional Parameter)
function describePerson(name:string,age?:number):string{
    if(age){
        return `${name} is ${age} years old.`;
    }
    return `${name} has no age specified.`;
}
//5.Toan tu rest(rest Parameter)
function sum(...numbers:number[]):number{
    return numbers.reduce((total,num)=>total+num,0);
}
sum(1,2,3);
sum(1,2,3,4,5);

//6.Spread Operator
const arr1: number[]=[1,2,3];
const arr2: number[]=[4,5];

const combinedArray=[...arr1,...arr2];
console.log(combinedArray);


