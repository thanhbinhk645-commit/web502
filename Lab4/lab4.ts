type Student = {
  id: number;
  name: string;
  score: number;
};

interface User {
  id: number;
  email: string;
  phone?: string;
}

type Calculate = (a: number, b: number) => number;

const add: Calculate = (a, b) => {
  return a + b;
};

const multiply: Calculate = (a, b) => {
  return a * b;
};

type ApiStatus = "idle" | "loading" | "success" | "error";

function logStatus(status: ApiStatus): void {
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