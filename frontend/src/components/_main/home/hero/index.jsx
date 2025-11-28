import React from "react";
// components
import SingleSlideCarousel from "src/components/carousels/singleSlide";

// slides data
import { data } from "./data";
import { Container } from "@mui/material";

export default function Hero() {
  return (
    <Container    >
      <SingleSlideCarousel data={data} />
    </Container>
  );
}
