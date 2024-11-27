import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Switch, Form, message } from "antd";
import React, { useState } from "react";
import { Row, Col, Select } from "antd";
import "./Attributes.css";

import { useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as Olxicon } from "../images/olx.svg";

const Attributes = ({ adSubmit, vehicleSubmit, bikeSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [userName, setUserName] = useState("");
  const [number, setNumber] = useState("");
  const [brand, setBrand] = useState(null);
  const [condition, setCondition] = useState(null);
  const [location, setLocation] = useState(null);
  const [images, setImages] = useState([]); // Will store actual files

  const [showPhone, setShowPhone] = useState(false);

  const locations = useLocation();
  const { category, subcategory } = locations.state || {};

  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };

  const handleSwitchChange = (checked) => {
    setShowPhone(checked);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    // Form validation
    if (!title || !description || !productPrice || !userName) {
      alert("Please fill in all required fields");
      return;
    }

    // Upload images to Cloudinary
    const uploadedImages = await handleImageUpload();

    // Data to be submitted
    const formData = {
      category: category.name,
      subcategory,
      title,
      productPrice,
      description,
      userName,
      number: showPhone ? number : null,
      brand,
      condition,
      location,
      images: uploadedImages, // Use uploaded URLs here
    };

    console.log("Form data:", formData);

    if (formData.category === "Vehicles") {
      // Submit to newVehicle array
      const res = await vehicleSubmit(formData);
      if (res.ok) {
        message.success("Vehicle Ad Successfully Added");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        message.error("Failed to add Vehicle Ad");
      }
    } else if (formData.category === "Bikes") {
      // Submit to newBike array
      const res = await bikeSubmit(formData);
      if (res.ok) {
        message.success("Bike Ad Successfully Added");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        message.error("Failed to add Bike Ad");
      }
    } else {
      // Submit to newAd array
      const res = await adSubmit(formData);
      if (res.ok) {
        message.success("Ad Successfully Added");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        message.error("Failed to add Ad");
      }
    }
  };

  // Image upload handling
  const handleImageUpload = async () => {
    const uploadedImages = [];
    for (const image of images) {
      const data = new FormData();
      data.append("file", image); // Append the actual file object
      data.append("upload_preset", "my_preset");

      try {
        const res = await fetch(
          "https://api.cloudinary.com/v1_1/dgek9w0hh/image/upload",
          {
            method: "POST",
            body: data,
          }
        );
        const result = await res.json();
        uploadedImages.push(result.secure_url); // Storing the URL in the images array
      } catch (error) {
        console.error("Error uploading the image:", error);
      }
    }

    return uploadedImages;
  };

  // Image handling: update to store actual files
  const handleImageChange = (e) => {
    setImages(Array.from(e.target.files)); // Store actual file objects in state
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          height: 60,
          width: "100%",
          backgroundColor: "whitesmoke",
          gap: 15,
          paddingLeft: 10,
        }}
      >
        <Button
          onClick={back}
          style={{
            paddingTop: 27,
            backgroundColor: "whitesmoke",
            border: "none",
            boxShadow: "none",
          }}
        >
          <ArrowLeftOutlined style={{ fontSize: 25 }} />
        </Button>
        <Olxicon />
      </div>
      <h1 className="flex justify-center font-bold text-xl">POST YOUR AD</h1>

      <div className="form-main">
        <Form onSubmitCapture={handleSubmit}>
          <Row>
            <Col span={16}>
              <div style={{ border: "2px solid black", borderRadius: 7 }}>
                <div className="cat-sub">
                  <h1 style={{ padding: 25, fontWeight: "bold" }}>Category</h1>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      style={{ height: 50, width: 50, marginRight: 15 }}
                      src={category.image}
                      alt=""
                    />
                    <div>
                      <div style={{ fontWeight: "bold", marginBottom: 7 }}>
                        {category.name}
                      </div>

                      <div>
                        <input type="text" value={subcategory} readOnly />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    border: "1px solid black",
                    height: 250,
                    width: "100%",
                    gap: 130,
                  }}
                >
                  <label style={{ padding: 20, fontWeight: "bold" }}>
                    Upload Images
                  </label>
                  <input
                    style={{ paddingTop: 20 }}
                    type="file"
                    multiple
                    onChange={handleImageChange}
                    accept="image/*"
                  />
                </div>
                <div
                  style={{
                    border: "1px solid black",
                    padding: 20,
                    height: 170,
                  }}
                >
                  <div style={{ display: "flex", gap: 200 }}>
                    <label style={{ fontWeight: "bold" }}>Brand*</label>
                    <Select
                      showSearch
                      style={{
                        width: 450,
                        height: 50,
                        border: "1px solid black",
                        borderRadius: 7,
                      }}
                      placeholder="Select Brand"
                      optionFilterProp="label"
                      onChange={(value) => setBrand(value)}
                      filterSort={(optionA, optionB) =>
                        (optionA?.label ?? "")
                          .toLowerCase()
                          .localeCompare((optionB?.label ?? "").toLowerCase())
                      }
                      options={[
                        {
                          value: "apple",
                          label: "Apple",
                        },
                        {
                          value: "lenovo",
                          label: "Lenovo",
                        },
                        {
                          value: "samsung",
                          label: "Samsung",
                        },
                        {
                          value: "vivo",
                          label: "Vivo",
                        },
                        {
                          value: "oppo",
                          label: "Oppo",
                        },
                        {
                          value: "googlepixel",
                          label: "Google Pixel",
                        },
                        {
                          value: "oneplus",
                          label: "OnePlus",
                        },
                        {
                          value: "toyota",
                          label: "Toyota",
                        },
                        {
                          value: "yaris",
                          label: "Yaris",
                        },
                        {
                          value: "honda",
                          label: "Honda",
                        },
                        {
                          value: "suzuki",
                          label: "Suzuki",
                        },
                        {
                          value: "mehran",
                          label: "Mehran",
                        },
                        {
                          value: "wagnor",
                          label: "Wagnor",
                        },
                        {
                          value: "heavyBike",
                          label: "Heavybike",
                        },
                        {
                          value: "seventy",
                          label: "Seventy",
                        },
                        {
                          value: "honda125",
                          label: "Honda125",
                        },
                        {
                          value: "yamaha",
                          label: "Yamaha",
                        },
                        {
                          value: "civic",
                          label: "Civic",
                        },
                        {
                          value: "fotuner",
                          label: "Fortuner",
                        },
                        {
                          value: "mercede",
                          label: "Mercede",
                        },
                        {
                          value: "audi",
                          label: "Audi",
                        },
                        {
                          value: "lamborgini",
                          label: "Lamborgini",
                        },
                      ]}
                    />
                  </div>
                  <div style={{ display: "flex", gap: 175, paddingTop: 20 }}>
                    <label style={{ fontWeight: "bold" }}>Condition*</label>
                    <Select
                      showSearch
                      style={{
                        width: 450,
                        height: 50,
                        border: "1px solid black",
                        borderRadius: 7,
                      }}
                      placeholder="Search to Select"
                      optionFilterProp="label"
                      onChange={(value) => setCondition(value)}
                      filterSort={(optionA, optionB) =>
                        (optionA?.label ?? "")
                          .toLowerCase()
                          .localeCompare((optionB?.label ?? "").toLowerCase())
                      }
                      options={[
                        {
                          value: "new",
                          label: "New",
                        },
                        {
                          value: "used",
                          label: "Used",
                        },

                        {
                          value: "refurbished",
                          label: "Refurbished",
                        },
                        {
                          value: "roughcondition",
                          label: "Rough Condition",
                        },
                        {
                          value: "open box",
                          label: "Open Box",
                        },
                      ]}
                    />
                  </div>
                </div>
                <div style={{ border: "1px solid black", height: 400 }}>
                  <div>
                    <div style={{ display: "flex", gap: 175, paddingTop: 20 }}>
                      <label
                        style={{ fontWeight: "bold", padding: 20 }}
                        htmlFor=""
                      >
                        Ad title*
                      </label>
                      <input
                        style={{
                          border: "1px solid black",
                          height: 50,
                          width: 450,
                          borderRadius: 7,
                        }}
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>
                    <div style={{ display: "flex", gap: 147 }}>
                      <label style={{ fontWeight: "bold", padding: 20 }}>
                        Description*
                      </label>
                      <textarea
                        style={{
                          border: "1px solid black",
                          borderRadius: 7,
                          width: 450,
                          height: 170,
                        }}
                        placeholder="Describe the you are selling..."
                        onChange={(e) => setDescription(e.target.value)}
                      ></textarea>
                    </div>

                    <div style={{ display: "flex", gap: 185, padding: 20 }}>
                      <label style={{ fontWeight: "bold" }}>Location*</label>
                      <Select
                        showSearch
                        style={{
                          width: 450,
                          height: 50,
                          border: "1px solid black",
                          borderRadius: 7,
                        }}
                        placeholder="Select Location"
                        optionFilterProp="label"
                        onChange={(value) => setLocation(value)}
                        filterSort={(optionA, optionB) =>
                          (optionA?.label ?? "")
                            .toLowerCase()
                            .localeCompare((optionB?.label ?? "").toLowerCase())
                        }
                        options={[
                          {
                            value: "lahore",
                            label: "Lahore",
                          },
                          {
                            value: "kashmir",
                            label: "Kashmir",
                          },
                          {
                            value: "islamabad",
                            label: "Islamabad",
                          },
                          {
                            value: "sheikhupura",
                            label: "Sheikhupura",
                          },
                          {
                            value: "multan",
                            label: "Multan",
                          },
                          {
                            value: "murree",
                            label: "Murree",
                          },
                          {
                            value: "muridke",
                            label: "Muridke",
                          },
                          {
                            value: "faisalabad",
                            label: "Faisalabad",
                          },
                          {
                            value: "sarghoda",
                            label: "Sarghoda",
                          },
                          {
                            value: "gujranwala",
                            label: "Gujranwala",
                          },
                          {
                            value: "karachi",
                            label: "Karachi",
                          },
                          {
                            value: "kamonki",
                            label: "Kamonki",
                          },
                        ]}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  height: 100,
                  display: "flex",
                  padding: 20,
                  border: "2px solid black",
                  marginTop: 10,
                  borderRadius: 7,
                  gap: 205,
                }}
              >
                <label style={{ fontWeight: "bold" }}>Price*</label>
                <div
                  style={{
                    height: 50,
                    width: 450,
                    border: "1px solid black",
                    borderRadius: 7,
                    paddingLeft: 9,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span>Rs</span>
                  <span className="pl-5 ml-4">
                    <input
                      type="number"
                      placeholder="Enter price"
                      className="input-price"
                      onChange={(e) => setProductPrice(e.target.value)}
                    />
                  </span>
                </div>
              </div>
              <div
                style={{
                  border: "2px solid black",
                  borderRadius: 7,
                  height: 360,
                  marginTop: 10,
                }}
              >
                <div style={{ display: "flex", gap: 175, paddingTop: 20 }}>
                  <label style={{ fontWeight: "bold", padding: 20 }} htmlFor="">
                    Name*
                  </label>
                  <input
                    style={{
                      border: "1px solid black",
                      height: 50,
                      width: 450,
                      borderRadius: 7,
                      paddingLeft: 10,
                    }}
                    type="text"
                    placeholder="Enter name"
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>

                <div style={{ display: "flex", gap: 340, paddingTop: 20 }}>
                  <label style={{ fontWeight: "bold", padding: 20 }}>
                    Your Phone number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter number"
                    style={{
                      height: 30,
                      width: "200px",
                      border: "1px solid black",
                      borderRadius: 5,
                      padding: 10,
                      marginTop: 10,
                    }}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </div>
                <div style={{ display: "flex", gap: 400, paddingTop: 20 }}>
                  <label style={{ fontWeight: "bold", padding: 20 }}>
                    Show my phone number in Ad
                  </label>
                  <Switch
                    checked={showPhone}
                    onChange={handleSwitchChange}
                    style={{
                      marginTop: 10,
                      backgroundColor: showPhone ? "#1890ff" : "#d9d9d9",
                    }}
                  />
                </div>

                <div style={{ display: "flex", justifyContent: "end" }}>
                  <button className="post-button" type="submit">
                    Post now
                  </button>
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div
                style={{
                  border: "1px solid black",
                  marginLeft: 10,
                  borderRadius: 7,
                }}
              >
                <h1 style={{ padding: 15, fontWeight: "bold", fontSize: 15 }}>
                  Need Help getting started?
                </h1>
                <p style={{ padding: 15 }}>
                  Review these resource to learn how to create a great ad and
                  increase your selling chances
                </p>
                <ul className="ul-li">
                  <li>
                    <a
                      href="https://help.olx.com.pk/hc/en-us/articles/6411709268111-How-to-post-a-good-ad"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Tips for improving your ads and your chances of selling
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://help.olx.com.pk/hc/en-us/categories/4403034834447-Posting-and-Managing-Ads"
                      target="_blank"
                      rel="noreferrer"
                    >
                      All you need to know about Posting Ads
                    </a>
                  </li>
                </ul>
                <p style={{ padding: 15, marginBottom: 20 }}>
                  You can always come back to change your ad
                </p>
              </div>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
};

export default Attributes;
