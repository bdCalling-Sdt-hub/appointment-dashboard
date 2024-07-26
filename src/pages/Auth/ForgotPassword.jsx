import { IconLock } from "@tabler/icons-react";
import { Button, Form, Input } from "antd";

import { HiOutlineMailOpen } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/appoinment-logo.jpg";
import { GoArrowLeft } from "react-icons/go";
import baseURL from "../../config";
import Swal from "sweetalert2";
import { usePostForgetPasswordMutation } from "../../redux/Features/post/postForgetPasswordApi";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [setForgetPassword, { isLoading, isError, status, error, data }] =
    usePostForgetPasswordMutation();
  const onFinish = async (values) => {
    console.log(values);
    // navigate(`/auth/verify/${values?.email}`);
    try {
      console.log(values);
      const response = await setForgetPassword(values);

      console.log(response);
      if (response.data.statusCode == 200) {
        navigate(`/auth/verify/${values?.email}`);
      }else{
        Swal.fire({
          icon: "error",
          title: "Try Again...",
          text: response?.error?.data?.message,
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      }
      // console.log(response);
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Try Again...",
        text: error?.response?.data?.message,
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
  };
  return (
    <div className="mx-[310px]  bg-secondary px-[115px] py-[40px] rounded-xl border-2 border-secondary">
      <div>
        <div className="w-[500px]">
          <img src={logo} className="mx-auto w-[50%]" alt="" />
          <div className="flex items-center justify-center gap-2">
            <Link to="/auth">
              {" "}
              <GoArrowLeft className="text-[32px]" />
            </Link>

            <h1 className="text-[24px] font-medium my-[24px]">
              Forgot password
            </h1>
          </div>
          <p className="text-center mx-auto w-[80%] font-medium mb-[24px] text-[#5C5C5C] text-[16px]">
            Please enter your email address to reset your password.
          </p>
          <Form
            name="normal_login"
            // className="login-form"
            labelCol={{ span: 22 }}
            wrapperCol={{ span: 40 }}
            layout="vertical"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            className="space-y-1"
          >
            <Form.Item
              name="email"
              label={
                <span className="text-primary text-[16px] font-medium">
                  Email
                </span>
              }
              rules={[
                {
                  required: true,
                  message: "Please Input Your Email!",
                },
              ]}
            >
              <Input
                size="large"
                placeholder="Enter Your Email"
                name="email"
                prefix={
                  <HiOutlineMailOpen
                    className="mr-2 bg-primary rounded-full p-[6px]"
                    size={28}
                    color="white"
                  />
                }
                style={{
                  border: "2px solid #193664",
                  height: "62px",
                  background: "#E8EBF0",
                  outline: "none",
                  marginBottom: "10px",
                }}
                required
                bordered={false}
              />
            </Form.Item>
            <Form.Item>
              <Button
                // type="primary"

                style={{
                  backgroundColor: "#193664",
                  color: "#fff",
                  size: "18px",
                  height: "56px",
                }}
                htmlType="submit"
                className="block w-[500px] hover:bg-secondary h-[56px] px-2 py-4 mt-2 text-white bg-secondary rounded-lg"
              >
                Send OTP
              </Button>
              {/* <Link to="/dashboard"
        // type="primary"
        // htmlType="submit"
        className="block text-center w-[350px] h-[56px] px-2 py-4 mt-2 hover:text-white text-white bg-[#3BA6F6] rounded-lg"
      >
        Log In
      </Link> */}
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
