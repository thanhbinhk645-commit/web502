function tinh(
    dai:number,
    rong:number
):{chuvi:number;dientich:number}{
    const chuvi=(dai+rong)*2;
    const dientich=dai*rong;
    return{
        chuvi: chuvi,
        dientich: dientich
    };
}
const chunhat=tinh(5,3);
console.log("Chu vi:",chunhat.chuvi);
console.log("dien tich:",chunhat.dientich);

function tingTong(...number:number[]):number{
    let sum: number=0;
    for(let num of number){
        sum=sum+num;
    }
    return sum;
}
console.log("Tong la:",tingTong(1,1));

function demKitu(text:string,char:string):number{
    let count: number=0;
    for (let c of text){
        if(c==char){
            count++;
        }
    }
    return count;
}
console.log("So lan xuat hien:",demKitu("Binhgold","i"));

function ktSnt(a:number): boolean{
    if(a<2){
        return false;
    }
    for(let i=2;i<=Math.sqrt(a);i++){
        if(a%i===0){
            return false;
        }
    }
    return true;
}
console.log("7 co la so nguyen to khong",ktSnt(7));