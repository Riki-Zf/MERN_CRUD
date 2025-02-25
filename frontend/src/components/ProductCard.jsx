import React, { useState } from "react";
import { useProductStore } from "../../store/product";

const ProductCard = ({ product }) => {
  const [showToastDel, setShowToastDel] = useState(false);
  const [toastMessageDel, setToastMessageDel] = useState("");

  const { deleteProduct } = useProductStore();

  const handleDelete = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    if (!success) {
      setToastMessageDel(message);
      setShowToastDel(true);
    } else {
      setToastMessageDel(message);
      setShowToastDel(true);
    }
  };

  return (
    <>
      <div className="product-card flex justify-center">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={product.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.name}</h2>
            <p>Rp: {product.price}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
              <button className="btn btn-secondary" onClick={() => handleDelete(product._id)}>
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        </div>

        {showToastDel && (
          <div className="toast toast-top toast-end fixed z-50">
            <div className="alert alert-info">
              <span>{toastMessageDel}</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductCard;
