import { useEffect, useState } from "react";
// import { dataPopulerProduct } from "../../mocks/dataProduct";
import { useLocation } from "react-router-dom";
import { IProductDetail } from "../../interface/productDetail";
import { MdOutlineStar } from "react-icons/md";

export default function DetailProduct() {
    const location = useLocation();
    const [details, setDetails] = useState<null | IProductDetail>(null);

    useEffect(() => {
        setDetails(location.state.item);
        console.log("location:", location.state.item);
    }, [location]);
    //   const { id } = useParams();

    // const [activeImg, setActiveImg] = React.useState(dataPopulerProduct[0].img[0]);
    return (
        // <div className="flex flex-col py-10   md:flex-row">
        //     {/* left */}
        //     <div className="flex flex-col justify-center md:gap-9 items-center md:w-1/2">
        //         <div className="p-16  md:max-h-[500px] md:h-[500px] ">
        //             <img src={activeImg} alt="fani" className=" h-[300px] md:h-full w-full  object-cover" />
        //         </div>

        //         <div className="flex w-full justify-center">
        //             {dataPopulerProduct[0].img.map((item, index) => (
        //                 <img key={index} src={item} alt="" className="w-16 md:w-24 h-16 md:h-24  cursor-pointer" onClick={() => setActiveImg(item)} />
        //             ))}
        //         </div>
        //     </div>
        //     {/* right */}
        // </div>
        <>
            <div className="flex max-w-screen-xl mx-auto my-10 gap-10">
                <div className="w-2/5 relative">
                    <img className="w-full h-[550px] object-cover" src={details?.img} alt="productImg" />
                    <div className="absolute top-4 right-0">{details?.isDisc && <p className="bg-black text-white font-semibold px-8 py-1 italic">Discount</p>}</div>
                </div>
                <div className="w-3/5 flex flex-col justify-center gap-8">
                    <div>
                        <h2 className="text-4xl font-semibold">{details?.title}</h2>
                        <div className="flex gap-4 items-center mt-3">
                            <p className="line-through font-base text-gray-500">Rp. {details?.price}</p>
                            <p className="text-2xl font-medium text-gray-900">Rp. {details?.disc}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 text-base">
                        <div className="flex">
                            <MdOutlineStar />
                            <MdOutlineStar />
                            <MdOutlineStar />
                            <MdOutlineStar />
                            <MdOutlineStar />
                        </div>
                        <p className="text-xs text-gray-500">(1 review)</p>
                    </div>
                    <p className="text-base text-gray-500 -mt-3">{details?.description}</p>
                    <div className="flex gap-4">
                        <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
                            <p className="text-sm">Quantity</p>
                            <div className="flex items-center gap-4 text-sm font-semibold">
                                <button className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black">-</button>
                                <span>{1}</span>
                                <button className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black">+</button>
                            </div>
                        </div>
                        <button className="bg-black text-white py-3 px-6 active:bg-gray-800">add to cart</button>
                    </div>
                    <p className=" text-gray-500">
                        Category: <span className="font-medium capitalize">{details?.category}</span>
                    </p>
                </div>
            </div>
        </>
    );
}
