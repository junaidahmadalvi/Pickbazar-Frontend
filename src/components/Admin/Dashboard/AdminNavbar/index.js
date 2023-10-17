import "./style.css";

import { Menu, Dropdown, Input, Button, Space } from "antd";
import {
  UserOutlined,
  EnvironmentOutlined,
  QuestionCircleOutlined,
  PhoneOutlined,
  AppleOutlined,
} from "@ant-design/icons";
// import JoinModel from "./JoinModel";

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

const AdminNavbar = () => {
  // const [showModel, setShowModel] = useState(false);
  // const showModelFunc = () => setShowModel(true);
  // const closeModelFunc = () => setShowModel(false);

  return (
    <>
      <div className="navbar">
        <div className="nav-part-1 logo">
          <img
            src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F860%2FPickBazar.png&w=1920&q=75"
            alt="Logo"
          />
        </div>

        <div className="nav-part-2">
          <Button className="nav-btn">Create Shop</Button>
          <div className="user-icon">
            <UserOutlined />
          </div>
          {/* <Button className="nav-btn" onClick={showModelFunc}>
            Join
          </Button>
          {showModel && (
            <JoinModel
              showModalProp={showModel}
              closeModalProp={closeModelFunc}
            />
          )} */}
        </div>
      </div>
    </>
  );
};

export default AdminNavbar;
