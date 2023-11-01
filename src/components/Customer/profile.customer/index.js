import React from "react";
import "./style.css";
import { Layout, Menu, Button, Input, Form } from "antd";
import { useMutation } from "react-query";
import { CUSTOMER } from "../../../Api/customer.api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";

const { Sider } = Layout;

function CustomerProfile() {
  const navigate = useNavigate();
  // const history = useHistory();
  const mutation = useMutation(CUSTOMER.putCustomer, {
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

  const handleBioUpdate = (values) => {
    console.log("Success:", values);
    mutation.mutate(values);
  };

  const handleEmailUpdate = (values) => {
    console.log("Success:", values);
    mutation.mutate(values);
  };
  const handleCntNmUpdate = (values) => {
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
            <Menu theme="light" mode="inline" defaultSelectedKeys={"1"}>
              <Menu.Item key="1" onClick={() => navigate("/customer/profile")}>
                Profile
              </Menu.Item>
              <Menu.Item
                key="2"
                onClick={() => navigate("/customer/change-password")}
              >
                Change Password
              </Menu.Item>
              <Menu.Item key="3">My Orders</Menu.Item>
              {/* <Menu.Item key="4">Logout</Menu.Item> */}
            </Menu>
          </Sider>
        </Layout>

        <div className="profile-forms">
          {/* ---------------Update Bio-------------  */}
          <div className="bio forms">
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
              onFinish={handleBioUpdate}
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

          {/* //--------Update email-------------  */}
          <div className="email forms">
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
              onFinish={handleEmailUpdate}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your Eamil!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item wrapperCol={{ span: 24 }}>
                <Button htmlType="submit" style={{ float: "right" }}>
                  Update
                </Button>
              </Form.Item>
            </Form>
          </div>

          {/* //--------Update Contact NUmber-------------  */}
          <div className="contact-number forms">
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
              onFinish={handleCntNmUpdate}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Contact Number"
                name="contactNumber"
                rules={[
                  {
                    required: true,
                    message: "Please input your Contact Number!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item wrapperCol={{ span: 24 }}>
                <Button htmlType="submit" style={{ float: "right" }}>
                  Update
                </Button>
              </Form.Item>
            </Form>
          </div>

          {/* //--------Update Addresses-------------  */}
          <div className="addresses forms">
            <h4>Addresses will be place here</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomerProfile;
