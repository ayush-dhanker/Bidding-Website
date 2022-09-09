import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

const MainProduct = ({ product }) => (
  <Stack
    direction={{ sm: "row", xs: "column" }}
    spacing={1}
    width="96%"
    margin="auto"
    marginTop="50px"
    sx={{ backgroundColor: "#efefef" }}
    alignItems="center"
    color="#5c5353"
  >
    <img src={product?.main_product_svg} alt="Main Product" width="32%" />
    <Stack variant="column" width="32%" spacing={1}>
      <Typography align="left" sx={{ fontSize: "16px" }}>
        {product?.product_title}
      </Typography>
      <Typography color="#c5c5c5">{product?.product_pipeline}</Typography>
      <span style={{ display: "flex", alignItems: "center" }}>
        <img src={product?.online_price_icon} alt="price icon" />
        <span
          style={{
            marginLeft: "2px",
            fontSize: "20px",
            fontWeight: "400",
            textDecoration: "line-through",
            textDecorationColor: "gray",
          }}
        >
          Rs.{parseInt(product?.online_price).toLocaleString()}
        </span>
      </span>
      <p style={{ fontSize: "16px" }}>Qty : {product?.quantity}</p>
      <span
        style={{
          borderBottom: "2px solid #5c5353",
          width: "fit-content",
          marginTop: "18px",
        }}
      >
        All Details
      </span>
    </Stack>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        width: "32%",
        height: "260px",
      }}
    >
      <Stack direction="column" spacing={2}>
        <Typography
          color="#5c5353"
          fontSize={{ xs: "25px", sm: "42px" }}
          fontWeight="500"
        >
          Status
          <img
            src={product?.status_icon}
            alt="status icon"
            style={{ marginLeft: "14px" }}
          />
        </Typography>
        <Stack>
          <Typography
            variant="body1"
            color="#5c5353"
            fontWeight="500"
            fontSize={{ xs: "19px", sm: "21px" }}
          >
            Time Remaining
          </Typography>
          <Typography
            fontSize={{ xs: "19px", sm: "25px" }}
            color="#e94b27"
            mt="-8px"
          >
            {product?.time_remaining} minutes
          </Typography>
        </Stack>
      </Stack>
      <Stack direction="row" mt="22px">
        <Typography color="#c5c5c5" fontSize={{ xs: "21px", sm: "33px" }}>
          BIDS PLACED |
          <span style={{ color: "#22db22" }}>{product?.bid_placed}</span>
        </Typography>
      </Stack>
    </div>
  </Stack>
);

export default MainProduct;
