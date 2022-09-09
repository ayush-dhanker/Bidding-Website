import { Stack, Box } from "@mui/material";

import Cards from "./Cards";

const BidsCard = ({ bids, img }) => (
  <Stack
    direction="row"
    flexWrap="wrap"
    justifyContent="space-between"
    gap={2}
    width="96%"
    margin="auto"
    marginTop="58px"
    sx={{ backgroundColor: "#efefef" }}
  >
    {bids?.map((item, idx) => (
      <Box key={idx} className="box_width">
        <Cards data={item} img={img} />
      </Box>
    ))}
  </Stack>
);

export default BidsCard;
