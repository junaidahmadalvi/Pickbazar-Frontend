import { Modal, Button, Form, Input, Radio } from "antd";
import { useState } from "react";
import "./style.css";
const JoinModel = ({ showModalProp, closeModalProp }) => {
  const onFinish = (values) => {
    console.log("Success:", values);
    closeModalProp();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Modal open={showModalProp} footer={null} onCancel={closeModalProp}>
        <div className="model-header">
          <img
            src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F860%2FPickBazar.png&w=1920&q=75"
            alt="Logo"
          />
          <p>Login with your email & password</p>
        </div>
        <Form
          name="basic"
          layout="vertical"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 24,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ span: 24 }}>
            <Button htmlType="submit" className="model-btn">
              Login
            </Button>
          </Form.Item>

          <center>
            <p>Or</p>
          </center>

          <Form.Item wrapperCol={{ span: 24 }}>
            <Button htmlType="submit" className="model-btn">
              Login with Google
            </Button>
          </Form.Item>

          <Form.Item wrapperCol={{ span: 24 }}>
            <Button htmlType="submit" className="model-btn">
              Login with Mobile number
            </Button>
          </Form.Item>

          <center>
            <p>Don't have any account? Register</p>
          </center>
        </Form>
      </Modal>
    </>
  );
};
export default JoinModel;
