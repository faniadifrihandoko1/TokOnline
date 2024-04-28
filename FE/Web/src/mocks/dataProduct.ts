import blackTees from "../assets/imageProduct/Home-Black-Tees-1-433x514.jpg";
import whiteTees from "../assets/imageProduct/White-Basic-Slub-Organic-T-shirt-1-433x514.png";
import VestGuard from "../assets/imageProduct/Navy-HBT-Guard-Vest-1-433x514.jpg";
import navyTees from "../assets/imageProduct/Terra-Firma-Navy-Tees-1-433x514.jpg";
import batikblue from "../assets/imageProduct/batik-blue.jpg";
import tshirtNavy from "../assets/imageProduct/tshirt-navy.jpg";
import tshirtJet from "../assets/imageProduct/tshirt-jet-black.jpg";
import glyphy from "../assets/imageProduct/Glyph-Navy-Tshirt-1-433x514.jpg";

const dataBestProduct = [
  {
    img: blackTees,
    title: "Black Tee",
    price: 80000,
    disc: 70000,
    isDisc: true,
  },
  {
    img: whiteTees,
    title: "White Tee",
    price: 80000,
    disc: 60000,
    isDisc: true,
  },
  {
    img: VestGuard,
    title: "Vest Guard",
    price: 80000,
    disc: 50000,
    isDisc: true,
  },
  {
    img: navyTees,
    title: "Navy Tee",
    price: 80000,
    disc: 75000,
    isDisc: true,
  },
  {
    img: batikblue,
    title: "Batik Blue",
    price: 120000,
    disc: 100000,
    isDisc: true,
  },
  {
    img: tshirtNavy,
    title: "T-Shirt Navy",
    price: 150000,
    disc: 120000,
    isDisc: true,
  },
  {
    img: tshirtJet,
    title: "T-Shirt Jet Black",
    price: 125000,
    disc: 110000,
    isDisc: true,
  },
  {
    img: glyphy,
    title: "Glyphy",
    price: 120000,
    disc: 100000,
    isDisc: true,
  },
];

const dataNewProduct = [
  {
    img: blackTees,
    title: "Black Tee",
    price: 80000,
    disc: 70000,
    isDisc: true,
    isReady: true,
  },
  {
    img: whiteTees,
    title: "White Tee",
    price: 80000,
    disc: 60000,
    isDisc: true,
    isReady: true,
  },
  {
    img: navyTees,
    title: "Navy Tee",
    price: 80000,
    disc: 75000,
    isReady: false,
  },
  {
    img: glyphy,
    title: "Glyphy",
    price: 120000,
    disc: 100000,
    isDisc: true,
    isReady: true,
  },
];

export { dataBestProduct, dataNewProduct };
