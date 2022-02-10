import { Button, Container, Link } from "@mui/material";
import { Link as Linker } from "react-router-dom";

import React from "react";

const ContentDive = () => {
  return (
    <div className="con-snor">
      <Container>
        <div className="ssnor">
          <h1 style={{ color: "#544d69" }}>
            CONTACT OUR SNORKELING SPECIALISTS
          </h1>
          <p className="oss">
            Our Snorkeling Specialists have their master's in marine biology and
            know every detail about our snorkeling itineraries. They will be
            happy to answer any questions about our trips and help you choose
            the journey that’s right for you!
          </p>

          <Button>
            <Linker to="/email-us">Start Planning My Adventure</Linker>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default ContentDive;
