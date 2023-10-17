import React from "react";
import { Menu } from "antd";

const MenuItem = ({ item, selectedKey, handleMenuItemClick }) => (
  <Menu.Item
    key={item.key}
    icon={item.icon}
    onClick={() => handleMenuItemClick(item.key)}
    selectedKeys={item.name}
  >
    {item.name}
  </Menu.Item>
);

export default MenuItem;
