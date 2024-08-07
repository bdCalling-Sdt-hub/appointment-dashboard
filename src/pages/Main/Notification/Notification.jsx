import { Pagination } from "antd";
// import NotificationCart from "../../../Components/NotificationCart";
// import { useGetAdminNotificationQuery } from "../../../redux/Features/getAdminNotificationApi";
import { useState } from "react";
import NotificationCart from "../../../Components/NotificationCart";
import { useGetNotificationQuery } from "../../../redux/Features/get/getNotificationApi";
import Loading from "../../../Components/Loading";
// import Loading from "../../../Components/Loading";


const Notification = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const {data,isSuccess,isLoading} = useGetNotificationQuery(currentPage);
  if(isLoading){
    return <Loading/>
  }
  console.log(data);
  const result = data?.data?.attributes;
  console.log(data?.pagination?.totalUsers);
  
  const onChange = (values) => {
    // console.log(values);
    setCurrentPage(values);
  };
    return (
        <div>
        <div className="pl-[24px] ">
          <div className="rounded-xl overflow-hidden">
            <div className="">
              <h1 className="text-[24px] text-black  font-semibold pb-3">
                Notification
              </h1>
            </div>
            <div className="flex flex-col">
              {
                result?.map((item,index)=>(
                  <NotificationCart key={item?._id} item={item}/>
                ))
              }
                {/* <NotificationCart />
                <NotificationCart />
                <NotificationCart />
                <NotificationCart />
             */}
            </div>
            <div className="flex justify-center my-10">
              <Pagination
                onChange={onChange}
                defaultCurrent={1}
                total={data?.pagination?.totalUsers}
                pageSize={10}
                // total={20}
              />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Notification;
