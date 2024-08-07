import React from 'react';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { useGetTermsAndConditionsQuery } from '../../../redux/Features/get/getTermsAndConditionsApi';

const TermsAndConditions = () => {
    const navigate = useNavigate();
    const {data,isLoading,isSuccess} = useGetTermsAndConditionsQuery()
    console.log(data);
    // if(isLoading){  
    //     return <Loading/>;
    // }
    // console.log(data);
    const content = data?.data?.attributes?.content;
    return (
        <div className="relative ml-[24px] ">
        <div className=" mt-[44px] cursor-pointer flex items-center pb-3 gap-2">
       <MdOutlineKeyboardArrowLeft
        className=""
      onClick={() => navigate("/settings")}
      size={34}
    />
        <h1 className="text-[24px] font-semibold ">
          Terms & Conditions
        </h1>
      </div>
      <div className=" text-justify bg-secondary  mt-[24px] h-[60vh] overflow-y-auto border-2 border-primary rounded-md p-2 font-bold" dangerouslySetInnerHTML={{__html: content}}>
        
      </div>
    <Link to={`/settings/edit-terms-conditions`} className="absolute text-center bottom-[-60px] bg-primary
        text-white mt-5 py-3 rounded-lg w-full text-[18px] font-medium  duration-200">Edit Terms & Conditions</Link>
        </div>
    );
}

export default TermsAndConditions;
