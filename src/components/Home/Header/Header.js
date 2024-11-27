import React, { useContext, useState } from "react";
import "./Header.css";
import { ReactComponent as Olxicon } from "../../images/olx.svg";
import { ReactComponent as Property } from "../../images/property.svg";
import { ReactComponent as Car } from "../../images/car.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { faLocationDot, faSearch } from "@fortawesome/free-solid-svg-icons";
import { LoginContext } from "../../Pages/login/LoginContext";
import { Button, Select } from "antd";

const Header = ({ onSearch }) => {
  const { showModal } = useContext(LoginContext);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSellClick = () => {
    navigate("/sell"); // Navigate to the /sell page
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchTerm); // Pass the current search query back to the HomePage component
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onSearch(searchTerm); // Trigger search when Enter is pressed
    }
  };

  return (
    <header className="header-container" style={{ overflowX: "hidden" }}>
      <div className="header-main">
        <div>
          <Olxicon />
        </div>
        <div className="motor">
          <Car
            style={{
              padding: "7px",
              border: "1px solid white",
              backgroundColor: "whitesmoke",
              borderRadius: "50px",
              height: "40px",
              width: "40px",
            }}
          />

          <span
            style={{
              fontWeight: "bold",
              fontSize: "15px",
              paddingTop: "12px",
            }}
          >
            Motors
          </span>
        </div>
        <div className="property">
          <Property
            style={{
              border: "none",
              padding: "7px",
              backgroundColor: "whitesmoke",
              borderRadius: "50px",
              height: "40px",
              width: "40px",
            }}
          />
          <span
            style={{ fontWeight: "bold", fontSize: "15px", paddingTop: "12px" }}
          >
            Property
          </span>
        </div>
      </div>
      <div className="header-down">
        <div className="head-location">
          <FontAwesomeIcon icon={faLocationDot} style={{ fontSize: "20px" }} />
          {/* <input
            style={{
              border: "1px solid white",
              height: "35px",
              width: "300px",
              fontSize: "15px",
              outline: "none",
            }}
            spellCheck="false"
            autoComplete="location-search"
            placeholder="Location or Compound"
            type="text"
            name=""
            id=""
            value="Pakistan"
          /> */}
          <Select
            className="location-head"
            showSearch
            style={{
              width: 450,
              height: 40,
              border: "1px solid white",
            }}
            placeholder="Select Location"
            optionFilterProp="label"
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
        <div className="header-center">
          <input
            style={{ padding: 10 }}
            value={searchTerm}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            type="text"
            className="search-bar"
            placeholder="Find Cars, Mobile Phones and more..."
          />
          <FontAwesomeIcon
            icon={faSearch}
            style={{
              padding: "17px",
              height: "20px",
              width: "20px",
              backgroundColor: "black",
              color: "white",
              borderRadius: "0px 4px 4px 0px",
            }}
            onClick={handleSearchClick}
          />
        </div>
        <div className="header-right">
          <Button className="my-custom-button" type="" onClick={showModal}>
            Login
          </Button>
          <Button
            className="my-custom-sell-button"
            type=""
            onClick={handleSellClick}
          >
            + SELL
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
