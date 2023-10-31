import React from "react";
import { Col, Row } from "antd";
import "./style.css";
import { EnvironmentOutlined } from "@ant-design/icons";
import { useGetCustomerShopApi } from "../../../Api/customer.api";
import Loader from "../../../common/Loader/loaderComponent";
import { toast } from "react-toastify";

const SHOPS = [
  {
    name: "Shop 1",
    description: "Description for Shop 1 Vhdbjdjdjj",
    logo: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F894%2Fconversions%2Ffashion-thumbnail.jpg&w=1200&q=75",
  },
  {
    name: "Shop 2",
    description: "Description for Shop 2.",
    logo: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F894%2Fconversions%2Ffashion-thumbnail.jpg&w=1200&q=75",
  },
  {
    name: "Shop 3",
    description: "Description for Shop 3.",
    logo: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F894%2Fconversions%2Ffashion-thumbnail.jpg&w=1200&q=75",
  },
  {
    name: "Shop 4",
    description: "Description for Shop 4.",
    logo: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F894%2Fconversions%2Ffashion-thumbnail.jpg&w=1200&q=75",
  },
  {
    name: "Shop 5",
    description: "Description for Shop 5.",
    logo: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F894%2Fconversions%2Ffashion-thumbnail.jpg&w=1200&q=75",
  },
  {
    name: "Shop 6",
    description: "Description for Shop 6.",
    logo: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F894%2Fconversions%2Ffashion-thumbnail.jpg&w=1200&q=75",
  },
  {
    name: "Shop 7",
    description: "Description for Shop 7.",
    logo: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F894%2Fconversions%2Ffashion-thumbnail.jpg&w=1200&q=75",
  },
  {
    name: "Shop 8",
    description: "Description for Shop 8.",
    logo: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F894%2Fconversions%2Ffashion-thumbnail.jpg&w=1200&q=75",
  },
  {
    name: "Shop 9",
    description: "Description for Shop 9.",
    logo: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F894%2Fconversions%2Ffashion-thumbnail.jpg&w=1200&q=75",
  },
];

function CustomerShops() {
  const { list, isLoading, error } = useGetCustomerShopApi();
  // error && ;
  const CUSTOMER_SHOPS = list?.data;
  // console.log("customer shops", CUSTOMER_SHOPS.length);
  return (
    <>
      <div>
        {isLoading && <Loader />}
        {!isLoading && error && toast.error("Shops could not be load")}
        <Row className="cus-shops-con">
          {CUSTOMER_SHOPS &&
            CUSTOMER_SHOPS.length > 0 &&
            CUSTOMER_SHOPS.map((index) => (
              <Col
                span={7}
                key={index}
                className="shop-item"
                style={{ minWidth: CUSTOMER_SHOPS.length === 1 ? "60%" : null }}
              >
                <div className="shop-logo">
                  <img
                    src={
                      index?.logo ||
                      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F894%2Fconversions%2Ffashion-thumbnail.jpg&w=1200&q=75"
                    }
                    alt="logo"
                  />
                </div>
                <div className="shop-data">
                  <h3>{index?.name}</h3>
                  <p>
                    <EnvironmentOutlined /> &nbsp; {index?.description}
                  </p>
                </div>
              </Col>
            ))}
        </Row>
      </div>
    </>
  );
}

export default CustomerShops;
