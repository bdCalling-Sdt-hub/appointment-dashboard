import { useGetEarningStatusQuery } from "../redux/Features/get/getEarningStatusApi";


const Status = () => {
    const {data,isSuccess,isError,isLoading} = useGetEarningStatusQuery();
    // if(isLoading){
    //     return <Loading/>
    // }
    // console.log(data?.data?.attributes);
    const result = data?.data?.attributes;
    console.log(result);
    return (
        <div className="grid grid-cols-3 gap-[24px] mt-[24px]">
            <div className="bg-secondary px-[20px] py-[32px] flex justify-between items-center rounded-lg border-2 ">
                {/* <LuBadgeDollarSign size={81} color="white" className="bg-[#FA1131] p-[10px] rounded-full"/> */}
                <div className="">
                    <p className=" font-medium text-[20px] text-textColor">Total Earnings</p>
                    <h1 className="text-primary text-[44px] font-medium">$ {result?.totalAmount}</h1>
                </div>
            </div>
            <div className="bg-secondary px-[20px] py-[32px] flex justify-between items-center rounded-lg border-2 ">
                {/* <MdEmojiEvents size={81} color="white" className="bg-[#FA1131] p-[10px] rounded-full"/> */}
                <div className="">
                    <p className="text-textColor font-medium  text-[20px]">Total Patients</p>
                    <h1 className="text-primary text-[44px] font-medium">{result?.totalUser}</h1>
                </div>
            </div>
            <div className="bg-secondary px-[20px] py-[32px] flex justify-between items-center rounded-lg border-2">
                {/* <FaUsers size={81} color="white" className="bg-[#FA1131] p-[10px] rounded-full"/> */}
                <div className="">
                    <p className="text-textColor font-medium text-[20px]">Total Doctors</p>
                    <h1 className="text-primary text-[44px] font-medium">{result?.totalDoctor}</h1>
                </div>
            </div>
           
        </div>
    );
}

export default Status;
