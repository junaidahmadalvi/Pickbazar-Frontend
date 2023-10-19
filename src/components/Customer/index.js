import React from "react";
import { Button, Space, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./index.css";
import { Height } from "@mui/icons-material";
import { height, width } from "@mui/system";
const { Search } = Input;
function CustomerPortal() {
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
    </>
  );
}

export default CustomerPortal;
