const yargs = require("yargs");
const { string, number } = require("yargs");
const {
  getListProduct,
  updateListProduct,
} = require("./services/product.services");

//Lấy
// node src/app.js get-all
yargs.command({
  command: "get-all",
  handler: () => {
    let listProduct = getListProduct();
    console.log(listProduct);
  },
});

//Thêm
// node src/app.js add --name="Ipad" --price=5000000 --amount=3 --description="New 100%"
yargs.command({
  command: "add",
  builder: {
    name: {
      type: string,
    },
    price: {
      type: number,
    },
    amount: {
      type: number,
    },
    description: {
      type: string,
    },
  },
  handler: (args) => {
    const { name, price, amount, description } = args;
    let listProduct = getListProduct();
    listProduct = [
      ...listProduct,
      { id: Math.random().toString(), name, price, amount, description },
    ];
    updateListProduct(listProduct);
    console.log("them thanh cong");
  },
});

// xoa
// node src/app.js add remove --id="dasdas"
yargs.command({
  command: "remove",
  builder: {
    id: {
      type: string,
    },
  },
  handler: (args) => {
    const { id } = args;
    let listProduct = getListProduct();
    listProduct = listProduct.filter((prd) => prd.id !== id);
    updateListProduct(listProduct);
    console.log("Xoa thanh cong");
  },
});

//update
//node src/app.js update --id="0.03142799765911852" --name="Sam sung Note 9 plus" --price=12000000 --amount=2 --description="New 100%"
yargs.command({
  command: "update",
  builder: {
    id: {
      type: string,
    },
    name: {
      type: string,
    },
    price: {
      type: number,
    },
    amount: {
      type: number,
    },
    description: {
      type: string,
    },
  },
  handler: (args) => {
    const { id, name, price, amount, description } = args;
    let listProduct = getListProduct();
    const index = listProduct.findIndex((prd) => prd.id == id);
    if (index !== -1) {
      let product = listProduct[index];
      product = { ...product, name, price, amount, description };
      listProduct[index] = product;
      updateListProduct(listProduct);
      console.log("update thanh cong");
    } else {
      console.log("id khong hop le");
    }
  },
});

//nhap kho

yargs.command({
  command: "input",
  builder: {
    id: {
      type: string,
    },
    name: {
      type: string,
    },
    price: {
      type: number,
    },
    amount: {
      type: number,
    },
    description: {
      type: string,
    },
  },
  handler: (args) => {
    const { id, amount } = args;
    let listProduct = getListProduct();
    const tongSoLuong = listProduct.reduce((tong, prd) => {
      return (tong = prd.amount + 50);
    }, 0);

    const index = listProduct.findIndex((prd) => prd.id == id);
    if (index !== -1) {
      let product = listProduct[index];
      product = { ...product, tongSoLuong };
      listProduct[index] = product;
      updateListProduct(listProduct);
      console.log("cap nhap so luong thanh cong");
    } else {
      console.log("id khong hop le");
    }
  },
});

yargs.parse();
