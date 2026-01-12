
const averageScore = (...scores: number[]): number => {
  
  const total = scores.reduce((sum, score) => sum + score, 0);
  return total / scores.length;
};

console.log(averageScore(8, 9, 10));      // 9
console.log(averageScore(5, 6, 7, 8));    // 6.5

type CheckNumber = (n: number) => string;

const checkNumber: CheckNumber = (n) => {
  return n % 2 === 0 ? "even" : "odd";
};

console.log(checkNumber(4)); // even
console.log(checkNumber(7)); // odd

const createUser = (
  name: string,
  age?: number,
  role: string = "user"
): string => {
  if (age !== undefined) {
    return `Name: ${name}, Age: ${age}, Role: ${role}`;
  }
  return `Name: ${name}, Role: ${role}`;
};


console.log(createUser("Bình"));

console.log(createUser("Nam", 25, "admin"));

const mergeProducts = (arr1: string[], arr2: string[]): string[] => {
  return [...arr1, ...arr2];
};
const printProducts = (...products: string[]): void => {
  console.log("Danh sách sản phẩm:");
  products.forEach((product, index) => {
    console.log(`${index + 1}. ${product}`);
  });
};

const a = ["iPhone", "Samsung"];
const b = ["Xiaomi", "Oppo"];

const merged = mergeProducts(a, b);
console.log(merged);

printProducts(...merged);
