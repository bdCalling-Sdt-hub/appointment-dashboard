import { Input } from "antd";
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
// import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";
import { useNavigate } from "react-router-dom";
import { useGetLoginUserQuery } from "../../../redux/Features/get/getLoginUserApi";
import Loading from "../../../Components/Loading";
import {baseUrl} from "../../../utils/constant";

const ProfileInformation = () => {
    const [currentUser,setCurrentUser] = useState();
    const navigate = useNavigate();
    const {data,isSuccess,isLoading,isError} = useGetLoginUserQuery();

    if(isLoading){
      return <Loading/>
    }

    console.log(data?.data?.attributes);
    const result = data?.data?.attributes;
    
  // const navigate = useNavigate();
  // const baseUrl = ;
  // useEffect(()=>{
  //   const storedUser = localStorage.getItem('user-update');
  //   const user = JSON.parse(storedUser);
  //   console.log(user);
  //   setCurrentUser(user);
  // },[])
  console.log("uuuuuser",currentUser);
    return (
        <div>
      <div className="flex justify-between items-center ml-[14px] mt-[20px] mb-[33px]">
        <h1 className="text-[30px] font-medium">Profile Information</h1>
        <div
            onClick={(e) =>navigate(`/edit-profile/${result?._id}`)}
          className="flex gap-2 items-center py-[15px]
                 px-[40px]
                  bg-primary
                  rounded-lg
                  text-white
                  cursor-pointer
                  "
        >
          <FaEdit size={17} />
          <p>Edit Profile</p>
        </div>
      </div>
      <div className="lg:flex ml-[14px] p-[36px] rounded-xl gap-5">
        <div className="w-[33%] bg-secondary rounded-xl ml-[24px] flex flex-col justify-center items-center gap-[30px] p-10">
          <img
            className="w-[242px] h-[242px] rounded-full"
            src={`${baseUrl}${result?.image?.publicFileURL}`}
            // src="https://i.ibb.co/VBcnsLy/download.jpg"
            alt=""
          />
          <div className="flex flex-col justify-center items-center">
            <p className="text-[20px] ">{result?.role?.toUpperCase() || "Admin"}</p>
            <h1 className="text-[30px] font-medium">
             {result?.firstName + " " + result?.lastName  || "Ahad Hossain Aiman"}
            </h1>
          </div>
        </div>

        <div className="flex-1 w-[66%]">
          <div className="flex flex-col gap-[24px]">
            <div className="flex gap-[25px]">
              <div className="flex-1">
                <label
                  htmlFor=""
                  className=" text-[18px] font-medium"
                >
                  Name
                </label>
                <Input
              
                  placeholder="First name"
                  value={result?.firstName + " " + result?.lastName}
                  className="p-4 bg-secondary
                  rounded w-full 
                  justify-start 
                  border-2 
                  border-primary
                  mt-[12px]
                  items-center
                  gap-4 inline-flex  focus:bg-secondary hover:bg-secondary hover:border-primary"
                  type="text"
                  readOnly
                />
              </div>
              
            </div>
            <div className="flex-1">
              <label
                htmlFor=""
                className="  text-[18px] font-medium mb-[12px]"
              >
                Email
              </label>
              <Input
          
                placeholder="Email"
                value={result?.email}
                className="p-4 bg-secondary
                rounded w-full 
                justify-start 
                border-2 
                border-primary
                mt-[12px]
                items-center
                gap-4 inline-flex  focus:bg-secondary hover:bg-secondary hover:border-primary"
                type="text"
                readOnly
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor=""
                className="  text-[18px] font-medium mb-[12px]"
              >
                Phone Number
              </label>
              <Input
                placeholder="Phone"
                value={result?.phone || "Not Provided"}
                className="p-4 bg-secondary
                rounded w-full 
                justify-start 
                border-2 
                border-primary
                mt-[12px]
                items-center
                gap-4 inline-flex  focus:bg-secondary hover:bg-secondary hover:border-primary"
                type="text"
                readOnly
              />
            </div>
            {/* <div className="flex-1">
              <label
                htmlFor=""
                className="text-white  text-[18px] font-medium mb-[12px]"
              >
                Date Of Birth
              </label>
              <Input
                // onChange={(e) => setDateOfBirth(e.target.value)}
                placeholder="Date Of Birth"
                value={currentUser?.dateOfBirth?.split("T")[0]}
                className="p-4 bg-[#706768]
               rounded w-full 
               justify-start 
               border-none
               mt-[12px]
               text-white
               items-center 
               gap-4 inline-flex outline-none focus:border-none focus:bg-[#706768] hover:bg-[#706768]"
                prefix={<CiCalendarDate color="white" size={20} />}
               
              />
            </div> */}
          </div>
        </div>
      </div>
        </div>
    );
}

export default ProfileInformation;