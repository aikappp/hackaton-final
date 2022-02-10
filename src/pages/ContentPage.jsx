import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ContentPage = () => {
  return (
    <>
      <div className="content">
        <Container>
          <div className="content-container">
            <h1 style={{ color: "#544d69" }}>Choose Your Travel Style</h1>
            <Link to={"/"} className="content-subscription-heading">
              see ALL confirmed departures with space by date
            </Link>
            <section className="content-subscription">
              <Card
                className="card"
                style={{
                  borderRadius: 18,
                  boxShadow: "0 9px 9px 9px rgba(214, 212, 212)",
                  padding: 15,
                  minWidth: "150px",
                  height: 380,
                }}
                sx={{ maxWidth: 280 }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300"
                    src="https://images.pexels.com/photos/7107622/pexels-photo-7107622.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="green iguana"
                    style={{ objectFit: "contain" }}
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      <Link to="/hiking">
                      <button className="btn-trek" type="submit" color="gray" >
                        <strong>Hiking & Trekking</strong>
                        </button>
                      </Link>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card
                className="card"
                style={{
                  borderRadius: 18,
                  boxShadow: "0 9px 9px 9px rgb(214, 212, 212 )",
                  padding: 15,
                  minWidth: "150px",
                  height: 380,
                }}
                sx={{ maxWidth: 280 }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300"
                    src="https://images.pexels.com/photos/34098/south-africa-hluhluwe-giraffes-pattern.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="green iguana"
                    style={{ objectFit: "contain" }}
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      <Link to="/africa">
                        <button className="btn-af" type="submit" color="gray">
                          <strong>African Safaris</strong>
                        </button>
                      </Link>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card
                className="card"
                style={{
                  borderRadius: 18,
                  boxShadow: "0 9px 9px 9px rgb(214, 212, 212)",
                  padding: 15,
                  minWidth: "150px",
                  height: 380,
                }}
                sx={{ maxWidth: 280 }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300"
                    src="https://images.pexels.com/photos/10498905/pexels-photo-10498905.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="green iguana"
                    style={{ objectFit: "contain" }}
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      <Link to="/snorkeling">
                        <button className="btn-snor" type="submit" color="gray">
                          <strong>Snorkeling</strong>
                        </button>
                      </Link>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </section>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ContentPage;
