import React, { useContext } from "react";
import { Modal, Form, Input, Button } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { LoginContext } from "./LoginContext";
import Link from "antd/es/typography/Link";

const LoginForm = () => {
  const { isModalVisible, handleCancel } = useContext(LoginContext); // Get modal state and functions

  const onFinish = (values) => {
    console.log("Form values:", values);
    // Handle login logic here
  };

  return (
    <Modal
      title={null}
      visible={isModalVisible}
      onCancel={handleCancel}
      footer={null}
      centered
      className="login-modal"
      width={400}
    >
      <h3
        style={{ textAlign: "center", fontSize: "24px", marginBottom: "20px" }}
      >
        Log in with Email
      </h3>
      <Form name="login_form" layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Email address"
          name="email"
          rules={[
            { required: true, message: "Please enter your e-mail address." },
          ]}
        >
          <Input placeholder="Enter email" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter your password." }]}
        >
          <Input.Password
            placeholder="Enter password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>
        <div style={{ textAlign: "right", marginBottom: "15px" }}>
          <Link href="#">Forgot your password?</Link>
        </div>

        <Button type="primary" htmlType="submit" block>
          Log in
        </Button>
      </Form>
      <div style={{ textAlign: "center", marginTop: "15px" }}>
        <p>OR</p>
        <Button block type="default" icon={<i className="fas fa-link"></i>}>
          Log in with a one-time link
        </Button>
        <p style={{ marginTop: "10px" }}>
          New to OLX? <Link href="#">Create an account</Link>
        </p>
      </div>
    </Modal>
  );
};

export default LoginForm;
