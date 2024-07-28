import { ConfigProvider, DatePicker, Modal, Space, Table } from "antd";
import { Link } from "react-router-dom";
import { BsInfoCircle } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { useGetAllDoctorListQuery } from "../../../redux/Features/get/getAllDoctorListApi";
import { baseUrl } from "../../../utils/constant";
import Search from "antd/es/input/Search";
const Providers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState();
  const { data, isLoading } = useGetAllDoctorListQuery(currentPage);

  const dataSource = [
    {
      key: "1",
      email: "ahad.aiman@gmail.com",
      name: "Ahad",
      phoneNumber: "0123456787",
      age: 32,
      address: "2715 Ash Dr. San Jose, South Dakota 83475",
      date: "2022-12-12",
      specializedIn: "Cardiologist",
      experience: "5 years",
      clinicAddress: "2715 Ash Dr. San Jose, South Dakota 83475",
    },
    {
      key: "2",
      email: "ahad.aiman@gmail.com",
      name: "Ahad",
      phoneNumber: "0123456787",
      age: 32,
      address: "2715 Ash Dr. San Jose, South Dakota 83475",
      date: "2022-12-12",
      specializedIn: "Cardiologist",
      experience: "5 years",
      clinicAddress: "2715 Ash Dr. San Jose, South Dakota 83475",
    },
    {
      key: "3",
      email: "ahad.aiman@gmail.com",
      name: "Ahad",
      phoneNumber: "0123456787",
      age: 32,
      address: "2715 Ash Dr. San Jose, South Dakota 83475",
      date: "2022-12-12",
      specializedIn: "Cardiologist",
      experience: "5 years",
      clinicAddress: "2715 Ash Dr. San Jose, South Dakota 83475",
    },
    {
      key: "4",
      email: "ahad.aiman@gmail.com",
      name: "Ahad",
      phoneNumber: "0123456787",
      age: 32,
      address: "2715 Ash Dr. San Jose, South Dakota 83475",
      date: "2022-12-12",
      specializedIn: "Cardiologist",
      experience: "5 years",
      clinicAddress: "2715 Ash Dr. San Jose, South Dakota 83475",
    },
    {
      key: "5",
      email: "ahad.aiman@gmail.com",
      name: "Ahad",
      phoneNumber: "0123456787",
      age: 32,
      address: "2715 Ash Dr. San Jose, South Dakota 83475",
      date: "2022-12-12",
      specializedIn: "Cardiologist",
      experience: "5 years",
      clinicAddress: "2715 Ash Dr. San Jose, South Dakota 83475",
    },
    {
      key: "6",
      email: "ahad.aiman@gmail.com",
      name: "Ahad",
      phoneNumber: "0123456787",
      age: 32,
      address: "2715 Ash Dr. San Jose, South Dakota 83475",
      date: "2022-12-12",
      specializedIn: "Cardiologist",
      experience: "5 years",
      clinicAddress: "2715 Ash Dr. San Jose, South Dakota 83475",
    },
    {
      key: "7",
      email: "ahad.aiman@gmail.com",
      name: "Ahad",
      phoneNumber: "0123456787",
      age: 32,
      address: "2715 Ash Dr. San Jose, South Dakota 83475",
      date: "2022-12-12",
      specializedIn: "Cardiologist",
      experience: "5 years",
      clinicAddress: "2715 Ash Dr. San Jose, South Dakota 83475",
    },
    {
      key: "8",
      email: "ahad.aiman@gmail.com",
      name: "Ahad",
      phoneNumber: "0123456787",
      age: 32,
      address: "2715 Ash Dr. San Jose, South Dakota 83475",
      date: "2022-12-12",
      specializedIn: "Cardiologist",
      experience: "5 years",
      clinicAddress: "2715 Ash Dr. San Jose, South Dakota 83475",
    },
    {
      key: "9",
      email: "ahad.aiman@gmail.com",
      name: "Ahad",
      phoneNumber: "0123456787",
      age: 32,
      address: "2715 Ash Dr. San Jose, South Dakota 83475",
      date: "2022-12-12",
      specializedIn: "Cardiologist",
      experience: "5 years",
      clinicAddress: "2715 Ash Dr. San Jose, South Dakota 83475",
    },
    {
      key: "10",
      email: "ahad.aiman@gmail.com",
      name: "Ahad",
      phoneNumber: "0123456787",
      age: 32,
      address: "2715 Ash Dr. San Jose, South Dakota 83475",
      date: "2022-12-12",
      specializedIn: "Cardiologist",
      experience: "5 years",
      clinicAddress: "2715 Ash Dr. San Jose, South Dakota 83475",
    },
  ];

  const handleView = (record) => {
    setUser(record);
    setIsModalOpen(true);
  };

  const handleChangePage = (page) => {
    console.log(page);
    setCurrentPage(page);
  };

  const columns = [
    {
      title: "#SI",
      dataIndex: "",
      key: "",
      render: (text, _, index) => (currentPage - 1) * 10 + index + 1,
    },
    {
      title: "Doctor Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div className="flex items-center gap-2">
          <img
            src={`${baseUrl}${record?.doctorId?.image?.publicFileURL}`}
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p>
              {record.doctorId?.firstName} {record.doctorId?.lastName}
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "providerName",
      render: (text, record) => <p>{record.doctorId?.email}</p>,
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      render: (text, record) => <p>{record.doctorId?.phone}</p>,
    },

    {
      title: "Specialist",
      dataIndex: "date",
      key: "date",
      render: (text, record) => <p>{record?.specialist}</p>,
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <BsInfoCircle
            onClick={() => handleView(record)}
            size={18}
            className="text-primary cursor-pointer"
          />

          {/* <a><RxCross2 size={18} className='text-[red]'/></a> */}
        </Space>
      ),
    },
  ];

  console.log(data);
  const result = data?.data?.attributes;
  console.log(result);
  const onChange = (date, dateString) => {
    console.log(dateString);
  }

  const onSearch = (value) => {
    console.log(value);
  };
  return (
    <div>
      <div className="flex justify-between items-center">
        {/* <DatePicker
            className="custom-date-picker"
            onChange={onChange}
            picker="month"
            suffixIcon
          /> */}
      </div>
      <div className="bg-secondary w-full  border-2 rounded-t-lg mt-[24px]">
        <div className="flex py-[22px] mx-[20px] justify-between items-center">
          <p className=" test-[24px] font-bold">Doctor List</p>
          <p className="flex">
            <DatePicker
              className="custom-date-picker"
              onChange={onChange}
              picker="date"
              suffixIcon
            />
              <Search
              placeholder="Search Doctor Name"
              allowClear
              enterButton="Search"
              size="middle"
              onSearch={onSearch}
              className="ml-[10px]"
              accessKey="key"
            />
          </p>
        </div>
        <ConfigProvider
          theme={{
            components: {
              Table: {
                headerBg: "#193664",
                headerColor: "white",
                headerBorderRadius: 2,
                colorBgContainer: "#E8EBF0",
              },
            },
          }}
        >
          <Table
            pagination={{
              position: ["bottomCenter"],
              current: currentPage,
              pageSize:10,
              total:data?.pagination?.totalUsers,
              showSizeChanger: false,
                onChange: handleChangePage,
            }}
            // pagination={false}
            columns={columns}
            // dataSource={usersAll?.data?.attributes}
            dataSource={result}
          />
        </ConfigProvider>
      </div>
      <Modal
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        footer={[]}
        closeIcon
      >
        <div className="text-black bg-secondary w-full  border-2 rounded-t-lg">
          <div className="flex justify-center items-center gap-2 flex-col border-b border-b-gray-300">
            <p className=" text-[26px] font-bold mb-[16px] my-10">
              Doctor Details
            </p>
          </div>
          <div className="p-[20px] ">
            <div className="flex justify-between border-b py-[16px]">
              <p>Doctor Name: </p>
              <p>{user?.doctorId ? user?.doctorId?.firstName + " " + user?.doctorId?.lastName : "N/A"}</p>
            </div>
            <div className="flex justify-between border-b py-[16px]">
              <p>Email:</p>
              <p>{user?.doctorId?.email ? user?.doctorId?.email : "N/A"}</p>
            </div>
            <div className="flex justify-between border-b py-[16px] ">
              <p>Phone Number:</p>
              <p>{user?.doctorId?.phone  ? user?.doctorId?.phone  : "N/A"}</p>
            </div>
            <div className="flex justify-between border-b py-[16px] ">
              <p>Address:</p>
              <p>{user?.doctorId?.address ? user?.doctorId?.address : "N/A"}</p>
            </div>
            <div className="flex justify-between border-b py-[16px]">
              <p>Specialized In:</p>
              <p>{user?.specialist ? user?.specialist : "N/A"}</p>
            </div>
            <div className="flex justify-between border-b py-[16px]">
              <p>Experience:</p>
              <p>{user?.experience ? user?.experience : "N/A"}</p>
            </div>
            <div className="flex justify-between border-b py-[16px]">
              <p>Clinic Address:</p>
              <p>{user?.clinicAddress ? user?.clinicAddress : "N/A"}</p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Providers;
