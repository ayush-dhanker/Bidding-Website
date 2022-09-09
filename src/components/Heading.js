import { Typography, Box } from "@mui/material";
import { Stack } from "@mui/system";

const Heading = ({ header }) => (
  <Stack
    direction="column"
    sx={{
      width: { sm: "100%", xs: "80%" },
      margin: { xs: "auto", sm: "none" },
      marginTop: { sm: "70px", xs: "50px" },
    }}
  >
    <Box display="flex" sx={{ margin: "auto" }}>
      <img
        src={header?.svg}
        alt="header_img"
        height={105}
        width={105}
        style={{ marginRight: "-31px", marginTop: "-28px" }}
      />
      <Typography variant="h3" fontWeight="1000" color="#5c5353">
        {header?.heading}
      </Typography>
    </Box>
    <Typography
      variant="h6"
      margin={{ sm: "auto", xs: "none" }}
      marginTop="-10px"
      color="#5c5353"
      fontSize="18px"
    >
      {header?.sub_heading}
    </Typography>
  </Stack>
);

export default Heading;
