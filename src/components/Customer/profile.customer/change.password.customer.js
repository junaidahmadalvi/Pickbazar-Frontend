import React from "react";
import "./style.css";
import { Layout, Menu, Button, Input, Form } from "antd";
import { useMutation } from "react-query";
import { CUSTOMER } from "../../../Api/customer.api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const { Sider } = Layout;

function ChangePassword() {
  const navigate = useNavigate();
  const mutation = useMutation(CUSTOMER.putCustomerPassword, {
    onSuccess: (error, success) => {
      const successMessage = error?.message;
      toast.success(successMessage || "Customer Added Successfully"); // Display the error message using React-Toastify
    },
    onError: (error) => {
      if (error?.response?.data?.status === "fail") {
        const errorMessage = error?.response?.data?.error;
        toast.error(errorMessage); // Display the error message using React-Toastify
      }
    },
  });

  const handlePasswordUpdate = (values) => {
    console.log("Success:", values);
    mutation.mutate(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <div className="profile">
        <Layout hasSider className="sid">
          <Sider style={{ height: "auto" }}>
            <Menu theme="light" mode="inline" defaultSelectedKeys={"2"}>
              <Menu.Item key="1" onClick={() => navigate("/customer/profile")}>
                Profile
              </Menu.Item>
              <Menu.Item key="2">Change Password</Menu.Item>
              <Menu.Item key="3">My Orders</Menu.Item>
              {/* <Menu.Item key="4">Logout</Menu.Item> */}
            </Menu>
          </Sider>
        </Layout>

        <div className="profile-forms">
          {/* ---------------Update Password-------------  */}
          <div className="forms">
            <h3>Change Password</h3>
            <Form
              name="basic"
              layout="vertical"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 24,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={handlePasswordUpdate}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Old Password"
                name="oldPassword"
                rules={[
                  {
                    required: true,
                    message: "Please input your Old Password!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                label="New Password"
                name="newPassword"
                rules={[
                  {
                    required: true,
                    message: "Please input your New Password!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                label="Confirm Password"
                name="confirmPassword"
                rules={[
                  {
                    required: true,
                    message: "Please input your Confirm Password!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item wrapperCol={{ span: 24 }}>
                <Button htmlType="submit" style={{ float: "right" }}>
                  Update Password
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChangePassword;
