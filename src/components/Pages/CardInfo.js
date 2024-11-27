import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Card,
  Button,
  Typography,
  Row,
  Col,
  Menu,
  Dropdown,
  message,
  Carousel,
} from "antd";
import {
  PhoneOutlined,
  EnvironmentOutlined,
  UserOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import Header from "../Home/Header/Header";
import Footer from "../Home/Footer/Footer";

const { Title, Text } = Typography;
const CardInfo = () => {
  const locations = useLocation();
  const { selectedCard } = locations.state || {};
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleDelete = async () => {
    try {
      let apiUrl = ""; // Placeholder for the API path

      // Determine the correct API path based on the item type/category
      if (selectedCard?.category === "Vehicles") {
        apiUrl = `http://localhost:7000/vehicle/${selectedCard?.id}`;
      } else if (selectedCard?.category === "Bikes") {
        apiUrl = `http://localhost:7000/bikes/${selectedCard?.id}`;
      } else {
        apiUrl = `http://localhost:7000/ad/${selectedCard?.id}`; // Default to 'ad'
      }

      // Log the URL to check if it's correct
      console.log("API URL:", apiUrl);

      // Make the DELETE request
      const res = await fetch(apiUrl, {
        method: "DELETE",
      });

      console.log("Response status:", res.status); // Log status for debugging
      console.log("Response body:", await res.text()); // Log the response body

      if (res.ok) {
        message.success("Ad deleted successfully");
        navigate("/"); // Redirect after successful deletion
      } else {
        message.error(`Failed to delete the ad. Status: ${res.status}`);
      }
    } catch (error) {
      message.error("An error occurred while deleting the ad");
    }
  };

  const menu = (
    <Menu>
      <Menu.Item key="1" danger onClick={handleDelete}>
        Delete Ad
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <Header />

      <Row
        style={{ display: "flex", justifyContent: "center", marginTop: 20 }}
        gutter={[16, 16]}
      >
        <Col span={12}>
          <Card
            style={{
              width: "100%",
              border: "1px solid black",
              overflow: "hidden",
            }}
            cover={
              <div
                style={{
                  height: 300,
                  overflow: "hidden",
                  borderRadius: "10px 10px 0 0",
                }}
              >
                <Carousel arrows>
                  {selectedCard?.images?.map((img, index) => (
                    <div key={index}>
                      <img
                        alt={`Product ${index + 1}`}
                        src={img}
                        style={{
                          width: "100%",
                          height: 300,
                          objectFit: "cover",
                          borderRadius: "8px 8px 0 0",
                        }}
                      />
                    </div>
                  ))}
                </Carousel>
              </div>
            }
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Text style={{ fontSize: "14px", color: "skyblue" }}>
                Featured
              </Text>
              <span style={{}}>
                <Dropdown
                  overlay={menu}
                  trigger={["click"]}
                  placement="bottomRight"
                >
                  <MoreOutlined
                    style={{
                      fontWeight: "bold",
                      fontSize: 30,
                      cursor: "pointer",
                    }}
                  />
                </Dropdown>
              </span>
            </div>

            <Title level={2}>Rs {selectedCard?.productPrice}</Title>

            <Text strong>{selectedCard?.title}</Text>
            <div>
              <EnvironmentOutlined /> {selectedCard?.location} <br />
              <Text type="secondary">{selectedCard?.createdAt} ago</Text>
            </div>
          </Card>
        </Col>

        <Col span={8}>
          <Card
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              border: "1px solid black",
            }}
          >
            <div
              style={{
                fontSize: 30,
                color: "white",
                backgroundColor: "blue",
                borderRadius: 20,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Text
                strong
                style={{ fontSize: 30, color: "white", paddingLeft: 30 }}
              >
                Seller Info
                <FontAwesomeIcon
                  style={{ padding: "0px 7px 0px 15px" }}
                  icon={faCircleInfo}
                />
              </Text>
            </div>
            <div
              style={{ display: "flex", alignItems: "center", marginTop: 10 }}
            >
              <div>
                <Button
                  type="primary"
                  icon={<UserOutlined />}
                  style={{ marginTop: 20, marginLeft: 100 }}
                >
                  UserName : {selectedCard?.userName}
                </Button>
              </div>
            </div>
            <Button
              type="primary"
              icon={<PhoneOutlined />}
              style={{ marginTop: 20, marginLeft: 70, marginRight: 60 }}
            >
              Phone Number : {selectedCard?.number}
            </Button>
          </Card>
        </Col>

        <Col span={12}>
          <Card style={{ border: "1px solid black" }}>
            <Title level={4}>Details</Title>
            <Row>
              <Col
                span={11}
                style={{
                  height: 30,
                  gap: 100,
                  display: "flex",
                  backgroundColor: "#f2f4f5",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 20,
                }}
              >
                <Text>Brand</Text>

                <Text strong>{selectedCard?.brand}</Text>
              </Col>
              <Col span={2}></Col>

              <Col
                span={11}
                style={{
                  height: 30,
                  gap: 100,
                  display: "flex",
                  backgroundColor: "#f2f4f5",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Condition</Text>

                <Text strong>{selectedCard?.condition}</Text>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={8}></Col>

        <Col span={12}>
          <Card style={{ border: "1px solid black" }}>
            <Title level={4}>Description</Title>
            <Text>{selectedCard?.description}</Text>
          </Card>
        </Col>
        <Col span={8}></Col>
      </Row>
      <Footer />
    </div>
  );
};

export default CardInfo;
