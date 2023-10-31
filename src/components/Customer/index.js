import React, { useState } from "react";

import { Button, Space, Input, Row } from "antd";
import { SearchOutlined, FilterOutlined } from "@ant-design/icons";
import "./index.css";
import ProductCard from "./ProductCard";
import ProductDetail from "./ProductDetailModal";
import CategoryFilter from "./FiltersModal";

const { Search } = Input;
function CustomerPortal() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [productModal, setProductModal] = useState(false);
  const [filterModal, setFilterModal] = useState(false);

  const DUMMY_PRODUCTS = [
    {
      id: 1,
      img: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F579%2FBluberries-2.png&w=640&q=75",
      price: 19.99,
      name: "Blueberries",
    },
    {
      id: 2,
      img: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F579%2FBluberries-2.png&w=640&q=75",
      price: 29.99,
      name: "Strawberries",
    },
    {
      id: 3,
      img: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F579%2FBluberries-2.png&w=640&q=75",
      price: 9.99,
      name: "Bananas",
    },
    {
      id: 4,
      img: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F579%2FBluberries-2.png&w=640&q=75",
      price: 24.99,
      name: "Oranges",
    },
    {
      id: 5,
      img: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F579%2FBluberries-2.png&w=640&q=75",
      price: 14.99,
      name: "Apples",
    },
    {
      id: 6,
      img: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F579%2FBluberries-2.png&w=640&q=75",
      price: 7.99,
      name: "Pears",
    },
    {
      id: 7,
      img: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F579%2FBluberries-2.png&w=640&q=75",
      price: 39.99,
      name: "Grapes",
    },
    {
      id: 8,
      img: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F579%2FBluberries-2.png&w=640&q=75",
      price: 12.99,
      name: "Kiwi",
    },
    {
      id: 9,
      img: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F579%2FBluberries-2.png&w=640&q=75",
      price: 4.99,
      name: "Cherries",
    },
    {
      id: 10,
      img: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F579%2FBluberries-2.png&w=640&q=75",
      price: 49.99,
      name: "Mangoes",
    },
  ];

  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setProductModal(true);
    console.log("selectedProduct", selectedProduct);
  };

  const handleFilterClick = (product) => {
    // setSelectedProduct(product);
    setFilterModal(true);
    // console.log("selectedProduct", selectedProduct);
  };

  const closeProductDetail = () => {
    setProductModal(false);
  };
  const closeFilterDetail = () => {
    setFilterModal(false);
  };

  return (
    <>
      <header>
        <p className="header-title-1">Groceries Delivered in 90 Minute</p>
        <p className="header-title-2">
          Get your healthy foods & snacks delivered at your doorsteps all day
          everyday
        </p>

        <Space className="cus-nav-search">
          <Search
            className="cus-search"
            placeholder="Search Your Products from here"
            enterButton={<Button icon={<SearchOutlined />}>Search</Button>}
          />
        </Space>
      </header>

      <section className="cus-cards">
        <div className="card-img">
          <img
            src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F902%2Foffer-5.png&w=640&q=75"
            alt="Card Img"
          />
        </div>

        <div className="card-img">
          <img
            src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F903%2Foffer-4.png&w=640&q=75"
            alt="Card Img"
          />
        </div>

        <div className="card-img">
          <img
            src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F904%2Foffer-3.png&w=640&q=75"
            alt="Card Img"
          />
        </div>
      </section>

      <div className="filters">
        <Button
          type="text"
          size="large"
          onClick={handleFilterClick}
          icon={<FilterOutlined />}
        >
          Filters
        </Button>
      </div>

      {filterModal && (
        <CategoryFilter
          // group={}
          showModalProp={filterModal}
          closeModalProp={closeFilterDetail}
        />
      )}

      {/* <Row className="cus-prdt-con">
        <Col span={5} className="cus-prdt-item">
          <img
            src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F579%2FBluberries-2.png&w=640&q=75"
            alt="Product Img"
          />
          <div className="prdt-title">
            <p className="prd-price">Rs: Price</p>
            <p className="prd-name">Name</p>
          </div>
          <Button type="text" size="large" block icon={<MinusOutlined />}>
            Add {<PlusOutlined />}
          </Button>
        </Col>
        <Col span={5} className="cus-prdt-item">
          <img
            src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F579%2FBluberries-2.png&w=640&q=75"
            alt="Product Img"
          />
          <div className="prdt-title">
            <p className="prd-price">Rs: Price</p>
            <p className="prd-name">Name</p>
          </div>
          <Button type="text" size="large" icon={<MinusOutlined />}>
            Add {<PlusOutlined />}
          </Button>
        </Col>
        <Col span={5} className="cus-prdt-item">
          <img
            src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F579%2FBluberries-2.png&w=640&q=75"
            alt="Product Img"
          />
          <div className="prdt-title">
            <p className="prd-price">Rs: Price</p>
            <p className="prd-name">Name</p>
          </div>
          <Button type="text" size="large" icon={<MinusOutlined />}>
            Add {<PlusOutlined />}
          </Button>
        </Col>
        <Col span={5} className="cus-prdt-item">
          <img
            src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F579%2FBluberries-2.png&w=640&q=75"
            alt="Product Img"
          />
          <div className="prdt-title">
            <p className="prd-price">Rs: Price</p>
            <p className="prd-name">Name</p>
          </div>
          <Button type="text" size="large" icon={<MinusOutlined />}>
            Add {<PlusOutlined />}
          </Button>
        </Col>
        <Col span={5} className="cus-prdt-item">
          <img
            src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F579%2FBluberries-2.png&w=640&q=75"
            alt="Product Img"
          />
          <div className="prdt-title">
            <p className="prd-price">Rs: Price</p>
            <p className="prd-name">Name</p>
          </div>
          <Button type="text" size="large" icon={<MinusOutlined />}>
            Add {<PlusOutlined />}
          </Button>
        </Col>
        <Col span={5} className="cus-prdt-item">
          <img
            src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F579%2FBluberries-2.png&w=640&q=75"
            alt="Product Img"
          />
          <div className="prdt-title">
            <p className="prd-price">Rs: Price</p>
            <p className="prd-name">Name</p>
          </div>
          <Button type="text" size="large" icon={<MinusOutlined />}>
            Add {<PlusOutlined />}
          </Button>
        </Col>
        <Col span={5} className="cus-prdt-item">
          <img
            src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F579%2FBluberries-2.png&w=640&q=75"
            alt="Product Img"
          />
          <div className="prdt-title">
            <p className="prd-price">Rs: Price</p>
            <p className="prd-name">Name</p>
          </div>
          <Button type="text" size="large" icon={<MinusOutlined />}>
            Add {<PlusOutlined />}
          </Button>
        </Col>
        <Col span={5} className="cus-prdt-item">
          <img
            src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F579%2FBluberries-2.png&w=640&q=75"
            alt="Product Img"
          />
          <div className="prdt-title">
            <p className="prd-price">Rs: Price</p>
            <p className="prd-name">Name</p>
          </div>
          <Button type="text" size="large" icon={<MinusOutlined />}>
            Add {<PlusOutlined />}
          </Button>
        </Col>
        <Col span={5} className="cus-prdt-item">
          <img
            src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F579%2FBluberries-2.png&w=640&q=75"
            alt="Product Img"
          />
          <div className="prdt-title">
            <p className="prd-price">Rs: Price</p>
            <p className="prd-name">Name</p>
          </div>
          <Button type="text" size="large" icon={<MinusOutlined />}>
            Add {<PlusOutlined />}
          </Button>
        </Col>
        <Col span={5} className="cus-prdt-item">
          <img
            src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F579%2FBluberries-2.png&w=640&q=75"
            alt="Product Img"
          />
          <div className="prdt-title">
            <p className="prd-price">Rs: Price</p>
            <p className="prd-name">Name</p>
          </div>
          <Button type="text" size="large" icon={<MinusOutlined />}>
            Add {<PlusOutlined />}
          </Button>
        </Col>
      </Row> */}

      <Row className="cus-prdt-con">
        {DUMMY_PRODUCTS.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            clickFunc={handleCardClick}
          />
        ))}
      </Row>
      {productModal && (
        <ProductDetail
          product={selectedProduct}
          showModalProp={productModal}
          closeModalProp={closeProductDetail}
        />
      )}
    </>
  );
}

export default CustomerPortal;
