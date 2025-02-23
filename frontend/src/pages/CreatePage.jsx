import React, { useState } from "react";
import { useProductStore } from "../../store/product";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  //api
  const { createProduct } = useProductStore();
  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    if (success) {
      setToastMessage(message);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }
  };
  return (
    <>
      <h1 className="flex justify-center text-3xl font-medium m-5">create new product</h1>
      <div className="w-full flex justify-center items-center">
        <div className="box w-1/2 flex flex-col gap-2 items-center">
          <label className="input input-bordered flex items-center gap-2 w-full">
            Name :
            <input
              type="text"
              className="grow"
              placeholder="Enter Name"
              value={newProduct.name}
              onChange={(e) => {
                setNewProduct({ ...newProduct, name: e.target.value });
              }}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 w-full">
            Price :
            <input
              type="text"
              className="grow"
              placeholder="Enter price"
              value={newProduct.price}
              onChange={(e) => {
                setNewProduct({ ...newProduct, price: e.target.value });
              }}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 w-full">
            Image :
            <input
              type="text"
              className="grow"
              placeholder="Enter image URL"
              value={newProduct.image}
              onChange={(e) => {
                setNewProduct({ ...newProduct, image: e.target.value });
              }}
            />
          </label>
          <button className="btn btn-wide" onClick={handleAddProduct}>
            Submit
          </button>
        </div>
      </div>

      {showToast && (
        <div className="toast fixed z-50">
          <div className="alert alert-info">
            <span>{toastMessage}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default CreatePage;
