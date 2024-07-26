import { Spin } from "antd";
import gif from "../assets/loading-loading-forever.gif";

const Loading = ({size='large'}) => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <img src={gif} alt="" />
    </div>
  );
};

export default Loading;