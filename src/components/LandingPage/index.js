import React from "react";
import { Button, Form, Input } from "antd";
import "./style.css";

import { useMutation } from "react-query";
import { AUTH } from "../../Api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
  const mutation = useMutation(AUTH.postUser, {
    onSuccess: (response) => {
      const userType = response?.data?.userType;
      console.log("userType", userType);
      if (userType) {
        toast.success(`${userType} Login Successfully`);

        userType === "customer"
          ? navigate(`/${userType}/portal`)
          : navigate(`/${userType}/dashboard`);
      }
    },
    onError: (error) => {
      console.log("--mutation error---", error);
      if (error?.response?.status === 400) {
        const errorMessage = error?.response?.data?.error;
        toast.error(errorMessage); // Display the error message using React-Toastify
      }
    },
  });
  const onFinish = (values) => {
    console.log("Success:", values);
    mutation.mutate(values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <div className="login-container">
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
            minWidth: "100%",
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
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

          {/* <center>
            <p>Or</p>
          </center> */}

          {/* <center>
            <p>Don't have any account? Register</p>
          </center> */}
        </Form>
      </div>
    </>
  );
}

export default LandingPage;
