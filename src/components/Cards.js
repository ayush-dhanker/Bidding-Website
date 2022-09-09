import { Card, Button } from "@mui/material";

const Cards = ({ data, img }) => {
  return (
    <Card
      sx={{
        width: "100%",
        boxShadow: "none",
        borderRadius: 0,
        padding: "4px 0 0 4px",
      }}
    >
      <div
        style={{ display: "flex", width: "100%" }}
        className="card_upperPart"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "60%",
            // color: "#5c5353",
            color: "black",
          }}
        >
          <span style={{ fontSize: "20px", marginTop: "6px" }}>
            {data.shop_address}
          </span>
          <span
            style={{
              textAlign: "center",
              fontSize: "37px",
              fontWeight: "600",
              color: "rgb(249 129 0)",
              marginTop: "12px",
            }}
          >
            Rs. {data.offer_price}
          </span>
          <span style={{ marginTop: "24px", fontSize: "19px" }}>
            Deliver & Services
          </span>
          <span
            style={{ display: "flex", alignItems: "center", color: "#5c5353" }}
          >
            <i>
              <img src={data.express_delivery_icon} alt="" />
            </i>
            <p style={{ marginLeft: "16px" }}>
              Express Deliver
              <br />
              <span style={{ fontSize: "12px" }}>(deliver in 1 hour)</span>
            </p>
            <img
              style={{ margin: "16px" }}
              src={
                data.express_delivery === true
                  ? data.check_icon
                  : data.cross_icon
              }
              alt=""
            />
          </span>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              width: "187px",
              justifyContent: "space-between",
              color: "#5c5353",
            }}
          >
            <img src={data.return_option_icon} alt="" /> Return Option
            <img
              src={
                data.return_option === true ? data.check_icon : data.cross_icon
              }
              alt=""
            />
          </span>
        </div>
        <div
          style={{ width: "40%", textAlign: "center", marginRight: "-10px" }}
        >
          <img style={{ width: "85px" }} src={data.shop_image} alt="" />
          <p style={{ fontWeight: "600" }}>{data.shop_name}</p>
        </div>
      </div>
      <span
        style={{
          display: "flex",
          marginTop: "10px",
          backgroundColor: "#0179c7",
          alignItems: "center",
          padding: "3px",
          fontSize: "12px",
          width: "100px",
          color: "white",
          justifyContent: "space-around",
        }}
      >
        <img
          src={data.extra_offer_icon}
          alt="offer icon"
          // style={{ marginRight: "12px" }}
        />
        Extra Offer
      </span>
      <p
        style={{
          marginTop: "12px",
          color: "#5c5353",
          fontSize: "17px",
          fontWeight: "500",
        }}
      >
        {data.product_name}
      </p>
      <p
        style={{ textAlign: "center", marginTop: "12px", marginBottom: "12px" }}
      >
        <Button
          variant="contained"
          sx={{
            position: "static",
            bgcolor: "rgb(249 129 0)",
            textTransform: "none",
          }}
        >
          Buy Now
        </Button>
      </p>
      <span>Alternate Product</span>
      <div
        className="alternate_product"
        style={{ width: "98%", display: "flex" }}
      >
        <img src={img} alt=" ." style={{ width: "30%" }} />
        <div style={{ width: "68%" }}>
          <p style={{ fontSize: "11px", fontWeight: "500" }}>
            {data?.alternate_product_details?.product_name}
          </p>
          <p
            className="alternate_price"
            style={{
              width: "100%",
              display: "flex",
              // flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span style={{ display: "flex" }}>
              <img
                src={data?.alternate_product_details?.online_price_icon}
                alt=" "
                height="22px"
              />
              <span
                style={{
                  textDecoration: "line-through",
                  textDecorationColor: "gray",
                  fontSize: "13px",
                }}
              >
                Rs.
                {parseInt(
                  data?.alternate_product_details?.online_price
                ).toLocaleString()}
              </span>
              <span
                style={{
                  fontSize: "18px",
                  color: "rgb(249 129 0)",
                  marginTop: "-3px",
                  fontWeight: "500",
                }}
              >
                Rs.
                {parseInt(
                  data?.alternate_product_details?.offer_price
                ).toLocaleString()}
              </span>
            </span>
            <Button
              variant="contained"
              sx={{
                position: "static",
                bgcolor: "rgb(249 129 0)",
                textTransform: "none",
                fontSize: "10px",
                width: "63px",
                padding: "6px 3px",
                // marginLeft: "30px",
              }}
            >
              Order Now
            </Button>
          </p>
        </div>
      </div>
    </Card>
  );
};

export default Cards;
