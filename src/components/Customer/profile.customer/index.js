import React from "react";
import "./style.css";
import { Layout, Menu, Button, Input, Form } from "antd";
const { Sider } = Layout;

function CustomerProfile() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <div className="profile">
        <Layout hasSider className="sid">
          <Sider style={{ height: "auto" }}>
            <Menu theme="light" mode="inline" defaultSelectedKeys={"1"}>
              <Menu.Item key="1">Profile</Menu.Item>
              <Menu.Item key="2">Change Password</Menu.Item>
              <Menu.Item key="3">My Orders</Menu.Item>
              <Menu.Item key="4">Logout</Menu.Item>
            </Menu>
          </Sider>
        </Layout>

        <div className="profile-forms">
          <div className="bio">
            <Form
              name="basic"
              layout="vertical"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 24,
              }}
              //   style={{
              //     maxWidth: 600,
              //   }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please input your name!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Bio"
                name="bio"
                rules={[
                  {
                    required: true,
                    message: "Please input your bio!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item wrapperCol={{ span: 24 }}>
                <Button htmlType="submit" style={{ float: "right" }}>
                  Save
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div className="email"></div>
          <div className="contact-number"></div>
          <div className="addresses"></div>
        </div>
      </div>
    </>
  );
}

export default CustomerProfile;
