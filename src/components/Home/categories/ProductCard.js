import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "antd/dist/reset.css";
import { Card, Typography } from "antd";
import "./ProductCard.css";
import { HeartOutlined } from "@ant-design/icons";

dayjs.extend(relativeTime);

const { Meta } = Card;
const { Text } = Typography;

const MobileCard = ({
  id,
  image,
  price,
  title,
  location,
  time,
  description,
  brand,
  condition,
  userName,
  number,
}) => {
  const relativeTime = dayjs(time).fromNow();
  // const now = dayjs();
  // console.log("now >>", now.format("YYYY-MM-DD HH:mm:ss"));
  // const [isReadMore, setIsReadMore] = useState(false);
  // const descriptionLimit = 28;
  // const toggleReadMore = () => {
  //   setIsReadMore(!isReadMore);
  // };

  return (
    <Card
      cover={
        <img
          alt={title}
          src={image && image.length > 0 ? image[0] : "fallback-image.jpg"}
        />
      }
      style={{ border: "1px solid black" }}
    >
      <div
        style={{
          marginTop: "5px",
          marginBottom: 5,
        }}
      >
        {/* <span
          style={{
            marginTop: "10px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Tooltip title="Do you want to delete?">
            <FontAwesomeIcon
              icon={faTrash}
              style={{
                color: "red",
                marginLeft: 10,
                cursor: "pointer",
                fontSize: 30,
                fontWeight: "bold",
              }}
              onClick={() => onDelete(id)} // Pass the id to delete
            />
          </Tooltip>
        </span> */}
        <div>
          <Text
            strong
            style={{
              fontWeight: "bolder",
              fontSize: 17,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>Rs {price}</div>
              <div>
                <HeartOutlined />
              </div>
            </div>
          </Text>
        </div>
      </div>
      <Meta title={title} />
      <div
        style={{
          marginTop: "25px",
          marginBottom: 0,
        }}
      >
        <Text style={{ color: "#406367" }}>{location}</Text>
      </div>
      <div
        style={{
          marginTop: "10px",
          marginBottom: 0,
          fontWeight: "bold",
          fontSize: 15,
        }}
      >
        <Text style={{ color: "#406367", fontWeight: "bold" }}> {brand}</Text>
      </div>
      <div
        style={{
          marginTop: "10px",
          marginBottom: 0,
          fontWeight: "bold",
          fontSize: 15,
        }}
      >
        <Text style={{ color: "#406367" }}> {condition}</Text>
      </div>{" "}
      <div
        style={{
          marginTop: "10px",
          marginBottom: 0,
          fontWeight: "bold",
          fontSize: 15,
        }}
      >
        <Text style={{ color: "#406367" }}> {userName}</Text>
      </div>{" "}
      <div
        style={{
          marginTop: "10px",
          marginBottom: 0,
          fontWeight: "bold",
          fontSize: 15,
        }}
      >
        <Text style={{ color: "#406367" }}> {number}</Text>
      </div>
      {/* <div style={{ marginTop: "10px", marginBottom: 0 }}>
        <Text style={{ color: "#406367" }}>
          {description
            ? isReadMore
              ? description
              : description.slice(0, descriptionLimit)
            : "No description available"}
          {description && description.length > descriptionLimit && (
            <span
              onClick={toggleReadMore}
              style={{ color: "blue", cursor: "pointer" }}
            >
              {isReadMore ? " Read Less" : "... Read More"}
            </span>
          )}
        </Text>
      </div> */}
      <span style={{}}>
        <Text type="secondary" style={{ color: "#406367" }}>
          {relativeTime}
        </Text>
      </span>
    </Card>
  );
};

export default MobileCard;
