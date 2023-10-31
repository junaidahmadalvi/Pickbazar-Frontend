import React, { useState } from "react";
import "./style.css";

import { Menu, Dropdown, Input, Button, Space } from "antd";
import {
  DownOutlined,
  UserOutlined,
  EnvironmentOutlined,
  QuestionCircleOutlined,
  PhoneOutlined,
  AppleOutlined,
} from "@ant-design/icons";
import JoinModel from "./JoinModel";
import SellerModel from "./SellerModel";
import {
  getItemFromLocalStorage,
  removeItemFromLocalStorage,
} from "../../../helper";
import { useNavigate } from "react-router-dom";

const { Search } = Input;

const menu = (
  <Menu>
    <Menu.Item key="1" icon={<UserOutlined />}>
      Grocery
    </Menu.Item>
    <Menu.Item key="2" icon={<EnvironmentOutlined />}>
      Bakery
    </Menu.Item>
    <Menu.Item key="3" icon={<QuestionCircleOutlined />}>
      Bag
    </Menu.Item>
    <Menu.Item key="4" icon={<PhoneOutlined />}>
      Clothing
    </Menu.Item>
  </Menu>
);

const CustomerNavbar = () => {
  const navigate = useNavigate();
  const [showJoinModel, setShowJoinModel] = useState(false);
  const [showSellerModel, setShowSellerModel] = useState(false);
  const handleJoinModal = () => setShowJoinModel(true);

  const [customerToken, setCustomerToken] = useState(
    getItemFromLocalStorage("token")
  );
  const [userType, setuserType] = useState(getItemFromLocalStorage("userType"));

  // const customerToken = getItemFromLocalStorage("token");
  // const userType = getItemFromLocalStorage("userType");

  const handleSellerModal = () => {
    setShowSellerModel(true);
  };
  const userMenu = (
    <Menu>
      <Menu.Item key="1" onClick={() => navigate("./profile")}>
        Profile
      </Menu.Item>
      <Menu.Item key="2" onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );
  function handleLogout() {
    setCustomerToken(removeItemFromLocalStorage("token"));
    setuserType(removeItemFromLocalStorage("userType"));
  }
  const closeJoinModel = () => setShowJoinModel(false);
  const closeSellerModel = () => setShowSellerModel(false);

  return (
    <>
      <div className="cus-navbar">
        <div className="cus-nav-part-1">
          <div className="cus-logo">
            <img
              src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F860%2FPickBazar.png&w=1920&q=75"
              alt="Logo"
              onClick={() => navigate("./portal")}
            />
          </div>
          <Dropdown overlay={menu} trigger={["click"]}>
            <Button className="cus-nav-dropdown">
              <AppleOutlined />
              Menu <DownOutlined />
            </Button>
          </Dropdown>
          <Space className="cus-nav-search">
            <Search
              placeholder="Search location..."
              enterButton={
                <Button className="loc-icon" icon={<EnvironmentOutlined />} />
              }
            />
          </Space>
        </div>

        <div className="cus-nav-part-2">
          <Menu mode="horizontal" defaultSelectedKeys={[]}>
            <Menu.Item key="shops" onClick={() => navigate("./shops")}>
              Shops
            </Menu.Item>
            <Menu.Item key="offers" onClick={() => navigate("./offers")}>
              Offers
            </Menu.Item>
            <Menu.Item key="faq" onClick={() => navigate("./faq")}>
              FAQ
            </Menu.Item>
            <Menu.Item key="contacts" onClick={() => navigate("./contacts")}>
              Contacts
            </Menu.Item>
          </Menu>
          <Button className="cus-nav-btn" onClick={handleSellerModal}>
            Become Seller
          </Button>
          {showSellerModel && (
            <SellerModel
              showModalProp={showSellerModel}
              closeModalProp={closeSellerModel}
            />
          )}

          {customerToken && userType === "customer" ? (
            <Dropdown overlay={userMenu} trigger={["click"]}>
              <div className="cus-user-icon ">
                <UserOutlined />
              </div>
            </Dropdown>
          ) : (
            <Button className="cus-nav-btn" onClick={handleJoinModal}>
              Join
            </Button>
          )}

          {showJoinModel && (
            <JoinModel
              showModalProp={showJoinModel}
              closeModalProp={closeJoinModel}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default CustomerNavbar;
