import { ConfigProvider, DatePicker, Modal, Space, Table } from "antd";
import { Link } from "react-router-dom";
import { BsInfoCircle } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { useRef, useState } from "react";
import { useGetAllUserListQuery } from "../../../redux/Features/get/getAllUsersListApi";
import Loading from "../../../Components/Loading";
import { baseUrl } from "../../../utils/constant";
import moment from "moment";
import Search from "antd/es/input/Search";
import { useReactToPrint } from "react-to-print";

const AllUser = () => {
    const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const componentRef = useRef();
  const [user, setUser] = useState();
  const {data,isLoading} = useGetAllUserListQuery(currentPage);
  if(isLoading){
    return <Loading/>
  }




  const dataSource = [
    {
      key: '1',
      email: 'ahad.aiman@gmail.com',
      name:"Ahad",
      phoneNumber:"0123456787",
      age: 32,
      address: "2715 Ash Dr. San Jose, South Dakota 83475",
      date:"2022-12-12",

    },
    {
      key: '2',
      email: 'ahad.aiman@gmail.com',
      name:"Ahad",
      phoneNumber:"0123456787",
      age: 32,
      address: "2715 Ash Dr. San Jose, South Dakota 83475",
      date:"2022-12-12",

    },
    {
      key: '3',
      email: 'ahad.aiman@gmail.com',
      name:"Ahad",
      phoneNumber:"0123456787",
      age: 32,
      address: "2715 Ash Dr. San Jose, South Dakota 83475",
      date:"2022-12-12",

    },
    {
      key: '4',
      email: 'ahad.aiman@gmail.com',
      name:"Ahad",
      phoneNumber:"0123456787",
      age: 32,
      address: "2715 Ash Dr. San Jose, South Dakota 83475",
      date:"2022-12-12",

    },
    {
      key: '5',
      email: 'ahad.aiman@gmail.com',
      name:"Ahad",
      phoneNumber:"0123456787",
      age: 32,
      address: "2715 Ash Dr. San Jose, South Dakota 83475",
      date:"2022-12-12",

    },
    {
        key: '6',
        email: 'ahad.aiman@gmail.com',
      name:"Ahad",
      phoneNumber:"0123456787",
      age: 32,
      address: "2715 Ash Dr. San Jose, South Dakota 83475",
      date:"2022-12-12",

      },
      {
        key: '7',
        email: 'ahad.aiman@gmail.com',
        name:"Ahad",
        phoneNumber:"0123456787",
        age: 32,
        address: "2715 Ash Dr. San Jose, South Dakota 83475",
        date:"2022-12-12",
  
      },
      {
        key: '8',
        email: 'ahad.aiman@gmail.com',
        name:"Ahad",
        phoneNumber:"0123456787",
        age: 32,
        address: "2715 Ash Dr. San Jose, South Dakota 83475",
        date:"2022-12-12",
  
      },
      {
        key: '9',
        email: 'ahad.aiman@gmail.com',
      name:"Ahad",
      phoneNumber:"0123456787",
      age: 32,
      address: "2715 Ash Dr. San Jose, South Dakota 83475",
      date:"2022-12-12",

      },
      {
        key: '10',
        email: 'ahad.aiman@gmail.com',
      name:"Ahad",
      phoneNumber:"0123456787",
      age: 32,
      address: "2715 Ash Dr. San Jose, South Dakota 83475",
      date:"2022-12-12",

      },
  ];

  console.log(data);

  console.log(data?.data?.attributes);

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  const handleView = (record) => {
    setUser(record);
    setIsModalOpen(true);
  }

  const columns = [
    {
      title: "#SI",
      dataIndex: "",
      key: "",
      render: (text,_,index) => (currentPage - 1) * 10 + index + 1,
    },
    {
      title: "User Name",
      dataIndex: "name",
      key: "name",
      render: (_, record) => (
        <div className="flex items-center gap-3">
        <img  className="w-10 h-10 rounded-full" src={`${baseUrl}${record?.image?.publicFileURL}`} alt="" />
          <div>
            <p>{record?.firstName + " " + record?.lastName}</p>
          </div>
        </div>
      ),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'providerName',
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
      render:(_,record)=>{
        return <p>{record?.phone || "N/A"}</p>
      }
    },
    {
      title: "Role",
      dataIndex: "phone",
      key: "phone",
      render:(_,record)=>{
        
          if(record?.role === "doctor"){
            return <p className="capitalize font-bold text-blue-500  "> <span className="p-2 border-2 rounded-full border-blue-500">Doctor</span></p>
            
          }else if(record?.role === "user"){
           return <p className="capitalize font-bold text-green-500  "> <span className="p-2 border-2 rounded-full border-green-500">Patient</span></p>
          }else if(record?.role === "admin"){
            return <p className="capitalize font-bold text-red-500  "> <span className="p-2 border-2 rounded-full border-red-500">Admin</span></p>
          }
          
        
      }
    },
    {
      title: "Join Date",
      dataIndex: "date",
      key: "date",
      render:(_,record)=>{
        return <p>{moment(record?.createdAt).format("DD-MM-YYYY")}</p>
      }
      
    },
    
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
         
            <BsInfoCircle  onClick={() => handleView(record)}  size={18} className="text-primary cursor-pointer" />
          
          {/* <a><RxCross2 size={18} className='text-[red]'/></a> */}
        </Space>
      ),
    },
  ];

  const onChange = (date, dateString) => {
    console.log(dateString);
  }

  const onSearch = (value) => {
    console.log(value);
  };
    return (
        <div>
        <div className="flex justify-between items-center">
          
        </div>
        <div className="bg-secondary w-full  border-2 rounded-t-lg mt-[24px]">
          <div className="flex py-[22px] mx-[20px] justify-between items-center">
            <p className=" test-[24px] font-bold">User List</p>
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
        headerColor:"white",
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
          dataSource={data?.data?.attributes}

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
        <div  className="flex justify-center items-center gap-2 flex-col border-b border-b-gray-300">
          
          <p className=" text-[26px] font-bold mb-[16px] my-10">User Details</p>
        </div>
        <div  className="p-[20px] ">
        <div className="flex justify-between border-b py-[16px]">
            <p>User Name: </p>
            <p>
              {user ? `${user?.firstName} ${user?.lastName}` : "N/A"}
            </p>
          </div>
          <div className="flex justify-between border-b py-[16px]">
            <p>Email:</p>
            <p>
              {user?.email ? user?.email : "N/A"}
            </p>
          </div>
          <div className="flex justify-between border-b py-[16px] ">
            <p>Phone Number:</p>
            <p>
              {user?.phone ? user?.phone : "N/A"}
            </p>
          </div>
          <div className="flex justify-between border-b py-[16px] ">
            <p>Address:</p>
            <p>
              {user?.address ? user?.address : "N/A"}
            </p>
          </div>
          <div className="flex justify-between border-b py-[16px]">
            <p>Joining Date :</p>
            <p>
              {user ? moment(user?.createdAt).format("DD-MM-YYYY") : "N/A"}
            </p>
          </div>
          <div className="flex justify-between border-b py-[16px]">
  <p>Insurance:</p>
  {user?.isInsurance ? (
    <a
      href={`${baseUrl}${user?.insurance?.publicFileURL}`}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 font-bold cursor-pointer"
    >
      Click Here
    </a>
  ) : (
    "N/A"
  )}
</div>
          {/* <div className="flex justify-between border-b py-[16px]">
            <p>Driving license:</p>
            <p className="text-secondary font-bold cursor-pointer">
             Click Here
            </p>
          </div> */}
          
         

        </div>
      </div>
      </Modal>
        </div>
    );
}

export default AllUser;
