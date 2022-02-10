import React from "react";
import { Container } from "react-bootstrap";
import {
  Card,
  CardActionArea,
  CardActionAreaCardContent,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";
import ContentAfrica from "./ContentAfrica";
import Footer from "./Footer";

const Africa = () => {
  return (
    <>
      <div className="af-container">
        <h1 style={{ textAlign: "center" }} className="af">
          Experience a Safari.
        </h1>
        <br />
        <h3>Discover Africa's Wonders</h3>
        <img
          src="https://images.pexels.com/photos/4404524/pexels-photo-4404524.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />
      </div>
      <>
        <div className="af-content">
          <Container>
            <section className="content-subscription-af">
              <div className="content-container-af">
                <p className="p">
                  Dreaming of an authentic Hemingway-style mobile safari in
                  Botswana? Or witnessing the astounding wildebeest migration of
                  the Serengeti from an exclusive private camp, without another
                  group in sight? How about world-class hiking along South
                  Africa’s Garden Route combined with a fantastic safari? We
                  have a journey to match your interests! We know Africa, love
                  African safaris, and look forward to planning your
                  once-in-a-lifetime adventure! Hebu kwenda —let’s go!
                </p>
              </div>
            </section>
            <div className="search-links">
              <div className="search-wr">
                <h1 style={{ color: "#544d69" }}>Search By Country</h1>
                <div className="search">
                  <span>
                    <b>*</b>Tanzania
                  </span>
                  <span>
                    <b>*</b>Namibia
                  </span>
                  <span>
                    <b>*</b>Zambia
                  </span>
                  <span>
                    <b>*</b>Kenya
                  </span>
                  <span>
                    <b>*</b>Madagascar
                  </span>
                  <span>
                    <b>*</b>Uganda
                  </span>
                </div>{" "}
              </div>
            </div>
            <section className="content-sub">
              <Card
                className="card"
                style={{
                  borderRadius: 18,
                  boxShadow: "0 9px 9px 9px rgba(214, 212, 212)",
                  padding: 15,
                  minWidth: "150px",
                }}
                sx={{ maxWidth: 280 }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300"
                    src="https://images.pexels.com/photos/3889927/pexels-photo-3889927.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="green iguana"
                    style={{ objectFit: "contain" }}
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      <Link> Zambia</Link>
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
                }}
                sx={{ maxWidth: 280 }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300"
                    src="https://images.pexels.com/photos/3347324/pexels-photo-3347324.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="green iguana"
                    style={{ objectFit: "contain" }}
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      <Link to="/africa">Namibia</Link>
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
                }}
                sx={{ maxWidth: 280 }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300"
                    src="https://images.pexels.com/photos/2949825/pexels-photo-2949825.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="green iguana"
                    style={{ objectFit: "contain" }}
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      <Link to="/">Tanzania</Link>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </section>
            <section className="content-subb">
              <Card
                className="card"
                style={{
                  borderRadius: 18,
                  boxShadow: "0 9px 9px 9px rgba(214, 212, 212)",
                  padding: 15,
                  minWidth: "150px",
                }}
                sx={{ maxWidth: 280 }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300"
                    src="https://images.pexels.com/photos/2327372/pexels-photo-2327372.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    style={{ objectFit: "contain" }}
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      <Link> Kenya</Link>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>

              <Card
                className="card"
                style={{
                  borderRadius: 18,
                  boxShadow: "0 9px 9px 9px rgba(214, 212, 212)",
                  padding: 15,
                  minWidth: "150px",
                }}
                sx={{ maxWidth: 280 }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300"
                    src="https://images.pexels.com/photos/4153968/pexels-photo-4153968.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="green iguana"
                    style={{ objectFit: "contain" }}
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      <Link>Madagascar</Link>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>

              <Card
                className="card"
                style={{
                  borderRadius: 18,
                  boxShadow: "0 9px 9px 9px rgba(214, 212, 212)",
                  padding: 15,
                  minWidth: "150px",
                }}
                sx={{ maxWidth: 280 }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300"
                    src="https://images.pexels.com/photos/1105009/pexels-photo-1105009.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="green iguana"
                    style={{ objectFit: "contain" }}
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      <Link>Uganda</Link>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </section>

            <div className="travel">
              <h1 style={{ color: "#544d69" }}>
                WHY TRAVEL WITH WT ON SAFARI?
              </h1>
              <p className="tr">
                Our safari program is unparalleled, offering you the widest
                range of choices, yet always with WT’s legendary excellence,
                creativity, superb guides and phenomenal service.
                <br />• 40 Years of Safari Expertise We have been sharing the
                wonder of Africa with our travelers for four decades, and have
                the expertise to offer you safaris you’ll find nowhere else.
                <br />• Award-winning Itineraries Our journeys are handcrafted
                down to the final details, and all feature exceptional safari
                guides, hand-picked accommodations, and our renowned trip
                design.
                <br /> • Personal Service We take care of all the details from
                start to finish so that you can fully experience the wonder and
                discovery of safari.
                <br /> • Expert Guides Our team of safari guides are the best in
                the business and bring Africa to life with their wonderful
                insights and welcoming personalities
              </p>
            </div>
          </Container>
        </div>
      </>
      <ContentAfrica />
      <Footer />
    </>
  );
};

export default Africa;
