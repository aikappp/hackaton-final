import { Button, Container } from "@mui/material";
import { Link as Linker } from "react-router-dom";

import React from "react";

const ContentAfrica = () => {
  return (
    <div className="con">
      <Container>
        <div className="con-1">
          <h1 style={{ color: "#544d69" }}>Find The Perfect Safari For You!</h1>
          <p className="csh">
            Our team of Africa Specialists have over 55 years of collective
            safari experience and know every detail of our safaris. We look
            forward to sharing the thrilling world of safari with you!
          </p>

          <Button>
            <Linker to="/email-us">Start Planning My Safari</Linker>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default ContentAfrica;
