import React, { useState } from "react";
import "./style.css";

import { Menu, Dropdown, Input, Button, Space } from "antd";
import {
  DownOutlined,
  UserOutlined,
  EnvironmentOutlined,
  QuestionCircleOutlined,
  PhoneOutlined,
  ShopOutlined,
  AppleOutlined,
} from "@ant-design/icons";
import JoinModel from "./JoinModel";

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
  const [showModel, setShowModel] = useState(false);
  const showModelFunc = () => setShowModel(true);
  const closeModelFunc = () => setShowModel(false);

  return (
    <>
      <div className="navbar">
        <div className="nav-part-1">
          <div className="logo">
            <img
              src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F860%2FPickBazar.png&w=1920&q=75"
              alt="Logo"
            />
          </div>
          <Dropdown overlay={menu} trigger={["click"]}>
            <Button className="nav-dropdown">
              <AppleOutlined />
              Menu <DownOutlined />
            </Button>
          </Dropdown>
          <Space className="nav-search">
            <Search
              placeholder="Search location..."
              enterButton={
                <Button className="loc-icon" icon={<EnvironmentOutlined />} />
              }
            />
          </Space>
        </div>

        <div className="nav-part-2">
          <Menu mode="horizontal" defaultSelectedKeys={["shops"]}>
            <Menu.Item key="shops">Shops</Menu.Item>
            <Menu.Item key="offers">Offers</Menu.Item>
            <Menu.Item key="faq">FAQ</Menu.Item>
            <Menu.Item key="contacts">Contacts</Menu.Item>
          </Menu>
          <Button className="nav-btn">Become Seller</Button>
          <Button className="nav-btn" onClick={showModelFunc}>
            Join
          </Button>
          {showModel && (
            <JoinModel
              showModalProp={showModel}
              closeModalProp={closeModelFunc}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default CustomerNavbar;
