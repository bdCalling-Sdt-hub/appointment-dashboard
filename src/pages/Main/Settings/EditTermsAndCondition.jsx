import { Form, Input, Button } from "antd";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import JoditEditor from "jodit-react";
import { useEffect, useRef, useState } from "react";
// import { useGetAboutUsQuery } from "../../../redux/Features/getAboutUsApi";
// import baseURL from "../../../config";
import Swal from "sweetalert2";
import { usePostPrivacyPolicyMutation } from "../../../redux/Features/post/postPrivacyPolicyApi";
import Loading from "../../../Components/Loading";
import { usePostTermsAndConditionMutation } from "../../../redux/Features/post/postTermsAndConditionApi";
import { useGetTermsAndConditionsQuery } from "../../../redux/Features/get/getTermsAndConditionsApi";

const EditTermsAndCondition = () => {
  const navigate = useNavigate();
  const [serTermsAndCondition, res] =  usePostTermsAndConditionMutation();
  const {data,isLoading,isSuccess} = useGetTermsAndConditionsQuery();
  const [content, setContent] = useState("");
  const editor = useRef(null);
  console.log(data?.data?.attributes?.content);

  console.log(data);
  // const [content, setContent] = useState(data?.data?.attributes?.content);

  useEffect(()=>{
  setContent(data?.data?.attributes?.content);
  },[data])
  if (isLoading) {
    return <Loading />;
  }
  // console.log("data",data);
  console.log(content);
  const handleUpdate = async () => {
    console.log(content);
    try {
      const response = await serTermsAndCondition({content:content});
      console.log(response);
      if (response?.data?.statusCode == 201) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: response?.data?.message,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/settings/terms-conditions");
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: response?.data?.message,
        });
      }
    } catch (error) {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: error?.data?.message,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <div className="relative ml-[24px]">
      <div className=" mt-[44px] cursor-pointer flex items-center pb-3 gap-2">
        <MdOutlineKeyboardArrowLeft
          className=""
          onClick={() => navigate("/settings/terms-conditions")}
          size={34}
        />
        <h1 className="text-[24px] font-semibold">Edit Terms & Condition</h1>
      </div>
      <div className="text-justify  mt-[24px] relative ">
        <JoditEditor
          ref={editor}
          value={content}
          onChange={(newContent) => {
            setContent(newContent);
          }}
          className="text-wrap"
          style={{ width: "100%" }}
        />
        <Button
          onClick={handleUpdate}
          style={{
            backgroundColor: "#193664",
            color: "#fff",
            size: "18px",
            height: "56px",
          }}
          block
          className="mt-[30px] h-[60px] hover:text-white bg-secondary hover:bg-gradient-to-r from-red-500 via-red-600 to-red-800
        text-white py-3 rounded-lg w-full text-[18px] font-medium  duration-200"
        >
          Update
        </Button>
      </div>
    </div>
  );
};

export default EditTermsAndCondition;
