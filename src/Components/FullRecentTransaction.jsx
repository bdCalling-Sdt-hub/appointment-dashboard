import { ConfigProvider, DatePicker, Modal, Space, Table } from "antd";
import { Link } from "react-router-dom";
import { BsInfoCircle } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { useRef, useState } from "react";
import { useGetAppointmentListQuery } from "../redux/Features/get/getAppointmentListApi";
import { baseUrl } from "../utils/constant";
import { useReactToPrint } from "react-to-print";

const FullRecentTransaction = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = useGetAppointmentListQuery(currentPage);
  console.log(data);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState();
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Transaction Details",
    // onAfterPrint: () => alert("Print success"),
  });

  const result = data?.data?.attributes;
  console.log(data);
  console.log(result);
  console.log(data?.pagination?.totalUsers);



  const handleView = (record) => {
    setUser(record);
    setIsModalOpen(true);
  };

  const columns = [
    {
      title: "#SI",
      dataIndex: "count",
      key: "transactionId",
      render: (text, _, index) => (currentPage - 1) * 10 + index + 1,
    },
    {
      title: "#Tr.ID",
      dataIndex: "transactionId",
      key: "transactionId",
      // render: (text,_,index) => (currentPage - 1) * 10 + index + 1,
    },
    {
      title: "Patient Name",
      dataIndex: "name",
      key: "name",
      render: (_, record) => (
        <div className="flex gap-2 items-center">
          <img
            className="w-[34px] h-[34px] rounded-full"
            src={`${baseUrl}${record?.patientId?.image?.publicFileURL}`}
            alt=""
          />
          <p className="font-medium">{`${record.patientId.firstName} ${record.patientId.lastName}`}</p>
        </div>
      ),
    },
    {
      title: "Doctor Name",
      dataIndex: "providerName",
      key: "providerName",
      render: (_, record) => (
        <div className="flex gap-2 items-center">
          <img
            className="w-[34px] h-[34px] rounded-full"
            src={`${baseUrl}${record?.doctorId?.image?.publicFileURL}`}
            alt=""
          />
          <p className="font-medium">{`${record.doctorId.firstName} ${record.doctorId.lastName}`}</p>
        </div>
      ),
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Date",
      key: "date",
      dataIndex: "date",
      render: (_, record) => (
        <p>
          {record?.createdAt?.split("T")[0]
            ? record?.createdAt?.split("T")[0]
            : "N/A"}
        </p>
      ),
    },
    // {
    //   title: 'Amount',
    //   key: 'amount',
    //   dataIndex: 'amount',

    // },
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
  const handleChangePage = (page) => {
    setCurrentPage(page);
  }
console.log(data?.data?.pagination?.totalUsers);
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
          <p className=" test-[24px] font-bold">Recent Transactions</p>
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
        <div   className="text-black bg-secondary w-full  border-2 rounded-t-lg">
          <div className="flex justify-center items-center gap-2 flex-col border-b border-b-gray-300">
            <p className=" text-[26px] font-bold mb-[16px] my-10">
              Transaction Details
            </p>
          </div>
          <div >
            <div className="p-[20px]" ref={componentRef}>
            <div className="flex justify-between border-b py-[16px]">
              <p>Transaction ID: </p>
              <p>{user?.transactionId ? user?.transactionId : "N/A"}</p>
            </div>
            <div className="flex justify-between border-b py-[16px]">
              <p>Patient Name:</p>
              <p>
                {user?.patientId
                  ? user?.patientId?.firstName + " " + user?.patientId?.lastName
                  : "N/A"}
              </p>
            </div>
            <div className="flex justify-between border-b py-[16px]">
              <p>Patient Email:</p>
              <p>{user?.patientId ? user?.patientId?.email : "N/A"}</p>
            </div>
            <div className="flex justify-between border-b py-[16px]">
              <p>Doctor Name:</p>
              <p>
                {user?.doctorId
                  ? user?.doctorId?.firstName + " " + user?.doctorId?.lastName
                  : "N/A"}
              </p>
            </div>
            <div className="flex justify-between border-b py-[16px]">
              <p>Doctor Email:</p>
              <p>{user?.doctorId ? user?.doctorId?.email : "N/A"}</p>
            </div>
            <div className="flex justify-between border-b py-[16px]">
              <p>Date:</p>
              <p>{user?.date ? user?.date : "N/A"}</p>
            </div>

            <div className="flex justify-between border-b py-[16px]">
              <p> {user?.package ? user?.package?.packageName : "N/A"}:</p>
              <p>{user?.amount ? user?.amount : "N/A"}</p>
            </div>
            {/* <div className="flex justify-between border-b py-[16px]">
            <p>Score:</p>
            <p>
              {user?.score ? user?.score : "N/A"}
            </p>
          </div> */}
</div>
            <div className="flex justify-center gap-4 items-center py-[16px]">
              {/* <p className="px-[35px] cursor-pointer py-[10px] bg-white border-2 border-primary text-primary font-normal rounded-lg">
                Download
              </p> */}
              <p onClick={handlePrint} className="px-[55px] cursor-pointer py-[10px] bg-primary text-white rounded-lg">
                {/* Regular P550 */}
                Print
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default FullRecentTransaction;
