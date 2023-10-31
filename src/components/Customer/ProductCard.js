import React from "react";
import { Col, Button } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import "./index.css";
const ProductCard = ({ product, clickFunc }) => {
  const handleCardClick = () => {
    // Call the onClick function and pass the product as an argument
    clickFunc(product);
  };
  return (
    <Col span={5} className="cus-prdt-item" onClick={handleCardClick}>
      <img src={product.img} alt="Product Img" />
      <div className="prdt-title">
        <p className="prd-price">Rs: {product.price}</p>
        <p className="prd-name">{product.name}</p>
      </div>
      <Button type="text" size="large" block icon={<MinusOutlined />}>
        Add {<PlusOutlined />}
      </Button>
    </Col>
  );
};

export default ProductCard;
