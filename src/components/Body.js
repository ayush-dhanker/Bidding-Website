import React from "react";
import Heading from "./Heading";
import MainProduct from "./MainProduct";
import BidsCard from "./BidsCard";

const Body = ({ data }) => (
  <>
    <Heading header={data?.heading} />
    <MainProduct product={data?.main_product} />
    <BidsCard bids={data?.bids} img={data?.main_product?.main_product_svg} />
  </>
);

export default Body;
