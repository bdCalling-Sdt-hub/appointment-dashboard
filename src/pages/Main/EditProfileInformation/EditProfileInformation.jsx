import { Button, DatePicker, Form, Input, Upload } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { LuImagePlus } from "react-icons/lu";
import "react-phone-number-input/style.css";
// import { useGetSingleUserQuery } from "../../../redux/Features/getSingleUserApi";
// import Loading from "../../../Components/Loading";
// import baseURL from "../../../config";
import Swal from "sweetalert2";
import { useGetLoginUserQuery } from "../../../redux/Features/get/getLoginUserApi";
import Loading from "../../../Components/Loading";
import { baseUrl } from "../../../utils/constant";
import { usePostEditProfileMutation } from "../../../redux/Features/post/postEditProfileApi";

const EditProfileInformation = () => {
  const navigate = useNavigate();
  const { data, isError, isLoading } = useGetLoginUserQuery();
  const [setProfile, res] = usePostEditProfileMutation();
  console.log(data?.data?.attributes?.image?.publicFileURL);

  const { id } = useParams();
  // const {data,isError,isLoading} = useGetSingleUserQuery(id);
  // const user = data?.data?.attributes;
  const user = {
    name: "Ahad Hossain",
    email: "jvq5H@example.com",
    phoneNumber: "1234567890",
    image: {
      publicFileURL: "https://i.ibb.co/VBcnsLy/download.jpg",
    },
  };
  const result = data?.data?.attributes;
  console.log(result);

  // const baseUrl = import.meta.env.VITE_BASE_URL;
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState(user?.email);
  const [fileList, setFileList] = useState([]);
  const [imageUrl, setImageUrl] = useState(
    `${baseUrl}${data?.data?.attributes?.image?.publicFileURL}`
  );
  console.log(imageUrl);
  console.log(fileList);

  useEffect(() => {
    setImageUrl(`${baseUrl}${data?.data?.attributes?.image?.publicFileURL}`);
    // setEmail(result?.email);
    setPhoneNumber(result?.phone);
  }, [data]);
  // if (isLoading) {
  //   return <Loading />;
  // }
  console.log(imageUrl);
  const props = {
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    listType: "picture",
    showUploadList: false, // Disable the default upload list
    beforeUpload(file) {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          const img = document.createElement("img");
          img.src = reader.result;
          img.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = img.naturalWidth;
            canvas.height = img.naturalHeight;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);
            ctx.fillStyle = "red";
            ctx.textBaseline = "middle";
            ctx.font = "33px Arial";
            ctx.fillText("", 20, 20);
            canvas.toBlob((result) => {
              console.log(result);

              resolve(result);
              setImageUrl(URL.createObjectURL(result));
              // console.log(result);// Update the image URL
            });
          };
        };
      });
    },
  };

  if (isLoading) {
    return <Loading />;
  }
  const handleUpdateProfile = async (values) => {
    console.log(values);
    const updateProfile = {
      ...values,
      image: fileList[0]?.originFileObj,
      phone: phoneNumber,
    };
    console.log(updateProfile);
    const formData = new FormData();
    formData.append("firstName", updateProfile?.firstName);
    formData.append("lastName", updateProfile?.lastName);
    formData.append("email", updateProfile?.email);
    formData.append("phone", updateProfile?.phone);
    if (fileList[0]?.originFileObj) {
      formData.append("image", updateProfile?.image);
    }

    try {
      const response = await setProfile(formData);
      console.log(response);
      if (response?.data?.statusCode == 200) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: response.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/profile-information");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login Failed , Try Again...",
        text: error?.data?.message,
      });
    }
    console.log(updateProfile);
  };

  return (
    <div>
      <div
        onClick={() => navigate("/profile-information")}
        className="flex cursor-pointer  items-center mt-[40px] mb-[63px]"
      >
        <MdOutlineKeyboardArrowLeft size={30} />
        <h1 className="text-[20px] font-medium"> Edit Profile</h1>
      </div>
      <div className="ml-[24px] p-[36px] rounded-xl">
        <Form
          name="basic"
          labelCol={{ span: 22 }}
          wrapperCol={{ span: 40 }}
          layout="vertical"
          initialValues={{
            firstName: result?.firstName,
            lastName: result?.lastName,
            email: result?.email,
            phoneNumber: result?.phoneNumber,
          }}
          autoComplete="off"
          onFinish={handleUpdateProfile}
          //   onFinishFailed={handleCompanyInformationFailed}
        >
          <div className="flex gap-5  rounded-xl">
            <div className="w-[33%] bg-secondary rounded-xl  ml-[24px] flex flex-col justify-center items-center ">
              <div className="w-[242px] bg-secondary h-[242px] relative rounded-full flex flex-col justify-center items-center">
                {/* <img
              className="w-[242px] h-[242px] rounded-full flex justify-center items-center backdrop-brightness-50"
              src={imageUrl}
              alt=""
            /> */}
                <Upload
                  {...props}
                  name="avatar"
                  listType="picture-circle"
                  // className={styles.avatarUploader}
                  // fileList={fileList}
                  // className={styles.ant-upload}
                  showUploadList={false}
                  action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                  // beforeUpload={beforeUpload}
                  onChange={({ fileList: newFileList }) => {
                    console.log("========>", fileList);
                    console.log("===========>", newFileList);

                    setFileList(newFileList);
                  }}
                >
                  <img
                    className="w-[242px] h-[242px] rounded-full flex justify-center items-center opacity-50"
                    // src={`${baseUrl}${result?.image?.publicFileURL}`}
                    // src="https://i.ibb.co/VBcnsLy/download.jpg"
                    src={imageUrl}
                    alt=""
                  />

                  <Button
                    className="border-none text-[16px] bg-[white] absolute text-primary hover:text-primary"
                    icon={<LuImagePlus size={17} className="text-secondary" />}
                  >
                    Change Picture
                  </Button>
                </Upload>
                <div></div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="text-[20px] ">{user?.role?.toUpperCase()}</p>
                <h1 className=" text-[30px] font-medium">
                  {user?.name?.toUpperCase()}
                </h1>
              </div>
            </div>

            <div className="flex-1 w-[66%]">
              <div className="flex flex-col gap-[4px]">
                <div className="flex-1">
                  <Form.Item
                    label={
                      <span className=" text-[18px] font-medium">
                        First Name
                      </span>
                    }
                    name="firstName"
                    className="flex-1"
                    rules={[
                      {
                        required: true,
                        message: "Please input your First Name!",
                      },
                    ]}
                    // initialValue={user?.name}
                  >
                    <Input
                      placeholder="First Name"
                      className="p-4 bg-secondary
                  rounded w-full 
                  justify-start 
                  border-2 
                  border-primary
                 
                  items-center
                  gap-4 inline-flex  focus:bg-secondary hover:bg-secondary hover:border-primary"
                    />
                  </Form.Item>
                </div>

                <div className="flex-1">
                  <Form.Item
                    label={
                      <span className=" text-[18px] font-medium">
                        Last Name
                      </span>
                    }
                    name="lastName"
                    className="flex-1"
                    rules={[
                      {
                        required: true,
                        message: "Please input your First Name!",
                      },
                    ]}
                    // initialValue={user?.name}
                  >
                    <Input
                      placeholder="Last Name"
                      className="p-4 bg-secondary
                  rounded w-full 
                  justify-start 
                  border-2 
                  border-primary
                  items-center
                  gap-4 inline-flex  focus:bg-secondary hover:bg-secondary hover:border-primary"
                    />
                  </Form.Item>
                </div>
                <div className="flex-1">
                  <Form.Item
                    label={
                      <span className=" text-[18px] font-medium">Email</span>
                    }
                    name="email"
                    className="flex-1"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Email!",
                      },
                    ]}
                    // initialValue={email || user?.email}
                    
                  >
                    <Input
                      placeholder="Email"
                      className="p-4 bg-secondary
                        rounded w-full 
                        justify-start 
                        border-2 
                        border-primary
                        items-center
                        gap-4 inline-flex  focus:bg-secondary hover:bg-secondary hover:border-primary"
                        readOnly
                    />
                  </Form.Item>
                </div>
                <div className="flex-1">
                  <label
                    htmlFor=""
                    className=" text-[18px] font-medium mb-[12px]"
                  >
                    Phone Number
                  </label>

                  <PhoneInput
                    placeholder="Enter phone number"
                    international
                    countryCallingCodeEditable={false}
                    style={{
                      marginTop: "12px",
                    }}
                    defaultCountry="US"
                    value={phoneNumber?.toString()}
                    onChange={setPhoneNumber}
                  />
                </div>
              </div>
            </div>
          </div>
          <Button
            style={{
              marginTop: "30px",
              backgroundColor: "#193664",
              color: "#fff",
              size: "18px",
              height: "56px",
            }}
            htmlType="submit"
            className="text-[18px] w-full mt-[50px] mb-[20px] cursor-pointer h-[60px] bg-secondary text-white"
          >
            Update profile
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default EditProfileInformation;
