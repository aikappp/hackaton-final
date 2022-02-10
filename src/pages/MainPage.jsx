import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ProductsPagination from "../components/ProductsPagination";
import ContentPage from "./ContentPage";
import Footer from "./Footer";

const MainPage = () => {
  return (
    <>
      <div className="hero-container">
        <h1 style={{ textAlign: "center" }}>
          Dream Journeys For Real Travelers
        </h1>
        <video
          style={{ maxHeight: "800px", marginTop: "-50px" }}
          src="/videos/couple.mp4"
          autoPlay
          loop
          muted
        />

        <Link to="/sign-up">
          <button className="btn-outline" type="submit">
            Sign Up
          </button>
        </Link>
      </div>
      <ContentPage />
      <Footer />
    </>
  );
};

export default MainPage;
