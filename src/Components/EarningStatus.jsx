import { useGetEarningStatusQuery } from "../redux/Features/get/getEarningStatusApi";


const EarningStatus = () => {
    const {data,isLoading,isSuccess} = useGetEarningStatusQuery();
    console.log(data?.data?.attributes);
    const result = data?.data?.attributes;
    console.log(result);
    return (
        <div className="grid grid-cols-3 gap-[24px] mt-[24px]">
            <div className="bg-secondary px-[20px] py-[32px] flex justify-between items-center rounded-lg border-2 ">
                {/* <LuBadgeDollarSign size={81} color="white" className="bg-[#FA1131] p-[10px] rounded-full"/> */}
                <div className="">
                    <p className=" font-medium text-[20px] text-textColor">Total Admin Earnings</p>
                    <h1 className="text-primary text-[44px] font-medium">$ {result?.totalAdminAmount}</h1>
                </div>
            </div>
            <div className="bg-secondary px-[20px] py-[32px] flex justify-between items-center rounded-lg border-2 ">
                {/* <MdEmojiEvents size={81} color="white" className="bg-[#FA1131] p-[10px] rounded-full"/> */}
                <div className="">
                    <p className="text-textColor font-medium  text-[20px]">Total Transaction Amount</p>
                    <h1 className="text-primary text-[44px] font-medium">$ {result?.totalAmount}  </h1>
                </div>
            </div>
            <div className="bg-secondary px-[20px] py-[32px] flex justify-between items-center rounded-lg border-2">
                {/* <FaUsers size={81} color="white" className="bg-[#FA1131] p-[10px] rounded-full"/> */}
                <div className="">
                    <p className="text-textColor font-medium text-[20px]">Total Bookings</p>
                    <h1 className="text-primary text-[44px] font-medium">{result?.paymentCount}</h1>
                </div>
            </div>
           
        </div>
    );
}

export default EarningStatus;
