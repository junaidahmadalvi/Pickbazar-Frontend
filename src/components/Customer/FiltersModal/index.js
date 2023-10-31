import React from "react";
import { Modal } from "antd";
// import "./index.css";
const CategoryFilter = ({ showModalProp, closeModalProp }) => {
  return (
    <>
      <Modal open={showModalProp} footer={null} onCancel={closeModalProp}>
        {/* <div className="product-detail">
          <div className="product-image">
            <img src={product.img} alt={product.name} />
          </div>
          <div className="product-info">
            <h2>{product.name}</h2>
            <p>Price: Rs {product.price}</p>
            <p>Description: Add your product description here.</p>
            <div className="actions">
              <Button icon={<MinusOutlined />} type="text" size="large">
                Remove
              </Button>
              <Button icon={<PlusOutlined />} type="text" size="large">
                Add to Cart
              </Button>
            </div>
          </div>
          <Button type="text" onClick={onClose} className="close-button">
            Close
          </Button>
        </div> */}
        <h1> Group category model </h1>
      </Modal>
    </>
  );
};

export default CategoryFilter;
