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
        id: 1,
        img: blackTees,
        title: "Black Tee",
        price: 80000,
        disc: 70000,
        isDisc: true,
        category: "all gender",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam obcaecati veniam labore in iusto omnis consequatur cum ad adipisci porro.",
    },
    {
        id: 2,
        img: whiteTees,
        title: "White Tee",
        price: 80000,
        disc: 60000,
        isDisc: true,
        category: "all gender",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam obcaecati veniam labore in iusto omnis consequatur cum ad adipisci porro.",
    },
    {
        id: 3,
        img: VestGuard,
        title: "Vest Guard",
        price: 80000,
        disc: 50000,
        isDisc: true,
        category: "man",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam obcaecati veniam labore in iusto omnis consequatur cum ad adipisci porro.",
    },
    {
        id: 4,
        img: navyTees,
        title: "Navy Tee",
        price: 80000,
        disc: 75000,
        isDisc: true,
        category: "man",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam obcaecati veniam labore in iusto omnis consequatur cum ad adipisci porro.",
    },
    {
        id: 5,
        img: batikblue,
        title: "Batik Blue",
        price: 120000,
        disc: 100000,
        isDisc: true,
        category: "man",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam obcaecati veniam labore in iusto omnis consequatur cum ad adipisci porro.",
    },
    {
        id: 6,
        img: tshirtNavy,
        title: "T-Shirt Navy",
        price: 150000,
        disc: 120000,
        isDisc: true,
        category: "man",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam obcaecati veniam labore in iusto omnis consequatur cum ad adipisci porro.",
    },
    {
        id: 7,
        img: tshirtJet,
        title: "T-Shirt Black",
        price: 125000,
        disc: 110000,
        isDisc: true,
        category: "man",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam obcaecati veniam labore in iusto omnis consequatur cum ad adipisci porro.",
    },
    {
        id: 8,
        img: glyphy,
        title: "Glyphy",
        price: 120000,
        disc: 100000,
        isDisc: false,
        category: "man",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam obcaecati veniam labore in iusto omnis consequatur cum ad adipisci porro.",
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

const dataPopulerProduct = [
    {
        img: [
            blackTees,
            "https://i.ibb.co/crd7sT1/Size-Chart-16.jpg",
            "https://i.ibb.co/GQxspRw/Home-Black-Tees-3.jpg",
            "https://i.ibb.co/y86KdX6/Home-Black-Tees-4.jpg",
            "https://i.ibb.co/mqw3G48/AH0-A6633-scaled.jpg",
            "https://i.ibb.co/wgrBcNc/IMG-8579-2.jpg",
        ],
        title: "Black Tee",
        price: 80000,
        disc: 70000,
        isDisc: true,
        isReady: true,
    },
    {
        img: [
            whiteTees,
            "https://i.ibb.co/wgrBcNc/IMG-8579-2.jpg",
            "https://i.ibb.co/H7Fkz7s/SC-ORTSHIRT-01-897x1435.jpg",
            "https://i.ibb.co/KFF7vyx/White-Basic-Slub-Organic-T-shirt-2.jpg",
            "https://i.ibb.co/RpzdZ6P/White-Basic-Slub-Organic-T-shirt-3.jpg",
        ],
        title: "White Tee",
        price: 80000,
        disc: 60000,
        isDisc: true,
        isReady: true,
    },
    {
        img: [
            VestGuard,
            "https://i.ibb.co/RbQrT9T/Batik-Bandana-Leisure-Shirt-3.jpg",
            "https://i.ibb.co/0rL69BZ/all-batik-35-scaled.jpg",
            "https://i.ibb.co/7pScsLj/Batik-Bandana-Leisure-Shirt-4.jpg",
            "https://i.ibb.co/WPS2JhX/Size-Chart-12.jpg",
        ],
        title: "Vest Guard",
        price: 80000,
        disc: 50000,
        isDisc: true,
        isReady: true,
    },
    {
        img: [
            navyTees,
            "https://i.ibb.co/5M60TDv/Terra-Firma-Navy-Tees-3.jpg",
            "https://i.ibb.co/gmtzmY4/Terra-Firma-Navy-Tees-4.jpg",
            "https://i.ibb.co/hc107Cn/Basic-Navy-Tees-3.jpg",
            "https://i.ibb.co/crd7sT1/Size-Chart-16.jpg",
            "https://i.ibb.co/PGfYSJd/AH0-A6548-scaled.jpg",
            "https://i.ibb.co/d2zkfhy/AH0-A6565-scaled.jpg",
        ],
        title: "Navy Tee",
        price: 80000,
        disc: 75000,
        isDisc: true,
        isReady: false,
    },
];

export { dataBestProduct, dataNewProduct, dataPopulerProduct };
