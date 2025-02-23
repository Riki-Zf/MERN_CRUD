import React, { useState } from "react";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const handleAddProduct = () => {
    console.log(newProduct);
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
    </>
  );
};

export default CreatePage;
