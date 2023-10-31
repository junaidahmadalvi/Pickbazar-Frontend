import React from "react";
import { Button, Modal } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
// import "./index.css";
const ProductDetail = ({ product, showModalProp, closeModalProp }) => {
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
        <h1> {product?.name} model </h1>
      </Modal>
    </>
  );
};

export default ProductDetail;
