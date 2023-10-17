import React, { useState } from "react";
import "./style.css";
import { Layout, Menu } from "antd";
import MenuItem from "./MenuItem"; // Import the MenuItem component
import {
  AppstoreOutlined,
  GroupOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  DashboardOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Sider } = Layout;

const menuItems = [
  { key: "Dashboard", name: "Dashboard", icon: <DashboardOutlined /> },
  { key: "Shops", name: "Shops", icon: <ShopOutlined /> },
  { key: "Products", name: "Products", icon: <UploadOutlined /> },
  { key: "Groups", name: "Groups", icon: <GroupOutlined /> },
  { key: "Categories", name: "Categories", icon: <CloudOutlined /> },
  { key: "Orders", name: "Orders", icon: <AppstoreOutlined /> },
  { key: "Users", name: "Users", icon: <TeamOutlined /> },
  { key: "Manufacturers", name: "Manufacturers", icon: <ShopOutlined /> },
  { key: "Authors", name: "Authors", icon: <ShopOutlined /> },
];

function AdminSidebar() {
  const navigate = useNavigate();
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  const handleMenuItemClick = (itemKey) => {
    itemKey = itemKey.toLowerCase(); // Update itemKey to lowercase
    setSelectedMenuItem(itemKey);
    console.log("selectedMenuItem", itemKey);
    if (itemKey === "dashboard") {
      navigate("/admin/dashboard");
    } else navigate(`/admin/${itemKey}`);
    // return MenuItem;
  };

  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: "scroll",
          height: "inherit",
          left: 0,
          top: 0,
          bottom: 0,
          border: "1px solid gray",
        }}
      >
        <div className="demo-logo-vertical" />

        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["dashboard"]}
          selectedKeys={selectedMenuItem ? [selectedMenuItem] : []}
        >
          {menuItems.map((item) => (
            <MenuItem
              key={item.key}
              item={item}
              selectedKey={selectedMenuItem}
              handleMenuItemClick={handleMenuItemClick}
            />
          ))}
        </Menu>
      </Sider>
    </Layout>
  );
}

export default AdminSidebar;
