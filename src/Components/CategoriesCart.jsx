import React from "react";
import cartImg from "../assets/Group-1.png";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../utils/constant";
import { usePostDeleteCategoryMutation } from "../redux/Features/post/postDeleteCategoryApi";
import Swal from "sweetalert2";

const CategoriesCart = ({ item }) => {
  const { name, image, _id } = item;
  // console.log({name, image,_id});
  const navigate = useNavigate();
  const [setData, { data: deleteData, error }] =
    usePostDeleteCategoryMutation();

  const handleDeleteCategory = async (id) => {
    // const categoryId = {}
    console.log(id);
    console.log(error);
    try {
      const response = await setData(id);
      console.log(response);
      if (response?.data?.statusCode == 200) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: response?.data?.message,
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: response?.error?.data?.message,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error?.data?.message,
      });
    }
  };
  return (
    <div className="bg-secondary   rounded-lg w-[200px] p-5">
      <img
        className="w-[84px] mx-auto"
        src={`${baseUrl}${image?.publicFileURL}`}
        alt=""
      />
      <p className="text-textColor text-[18px] text-center my-2 font-semibold">
        {name}
      </p>
      <div className="flex gap-2 justify-center">
        <p
          onClick={() => handleDeleteCategory(_id)}
          className="text-primary font-normal cursor-pointer bg-white border-2 border-primary py-2 px-5 rounded-lg text-[12px]"
        >
          Delete
        </p>
        <p
          onClick={() => navigate(`/categories/edit-categories/${_id}`)}
          className="text-white cursor-pointer bg-primary py-2 px-7 rounded-lg text-[12px]"
        >
          Edit
        </p>
      </div>
    </div>
  );
};

export default CategoriesCart;
