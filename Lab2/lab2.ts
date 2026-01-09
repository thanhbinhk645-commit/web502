
enum Rate {
  low = "Thấp",
  medium = "Trung bình",
  hight = "Cao",
}

type Product = {
  name: string;      
  price: number;    
  sale: boolean;     
  rate: Rate;        
  description?: string; 
};


let listProducts: Product[] = [
  { name: "Máy tính", price: 6, sale: true, rate: Rate.medium },
  { name: "Máy ảnh", price: 10, sale: false, rate: Rate.hight },
  { name: "Tai nghe", price: 4, sale: true, rate: Rate.low },
  { name: "Sạc", price: 12, sale: true, rate: Rate.hight },
  { name: "Bàn phím", price: 5, sale: false, rate: Rate.medium },
];


function addDescription(products: Product[]): Product[] {
  return products.map((product) => {
    return {
      ...product,
      description: product.price > 5 ? "Tốt" : "Bình thường",
    };
  });
}


listProducts = addDescription(listProducts);


function displayProducts(products: Product[]): void {
  products.forEach((product, index) => {
    console.log(`Sản phẩm ${index + 1}:`);
    console.log(`- Tên: ${product.name}`);
    console.log(`- Giá: ${product.price}`);
    console.log(`- Sale: ${product.sale ? "Đang sale" : "Không sale"}`);
    console.log(`- Đánh giá: ${product.rate}`);
    console.log(`- Mô tả: ${product.description}`);
    console.log("-------------------------");
  });
}


displayProducts(listProducts);


function totalPrice(products: Product[]): number {
  return products.reduce((total, product) => {
    return total + product.price;
  }, 0);
}

console.log("Tổng giá bán:", totalPrice(listProducts));


function filterSaleProducts(products: Product[]): Product[] {
  return products.filter((product) => {
    return (
      product.sale === true &&
      (product.rate === Rate.medium || product.rate === Rate.hight)
    );
  });
}


console.log("Sản phẩm sale & đánh giá từ Trung bình trở lên:");
console.log(filterSaleProducts(listProducts));
