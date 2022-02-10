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

import Footer from "./Footer";
import ContentDive from "./ContentDive";

const Snorkeling = () => {
  return (
    <>
      <div className="snor-container">
        <h1 style={{ textAlign: "center" }} className="snor">
          SnorKeling Adventures
        </h1>
        <br />
        <h3>The Crown Jewel of the Coral Triangle</h3>
        <video src="/videos/diving.mp4" autoPlay loop muted />
      </div>
      <>
        <div className="snor-content">
          <Container>
            <section className="content-subscription-snor">
              <div className="content-container-snor">
                <p className="p-snor">
                  Our award-winning snorkeling adventures take you to the best
                  locations on the planet for marine biodiversity and wildlife
                  encounters. Similar to going on safari, these journeys allow
                  you to observe wild animals in their natural habitat—opening
                  up an entirely new world of serene beauty. Swim with majestic
                  whale sharks in Cenderawasih Bay, watch the underwater dances
                  of sea lions in the Galápagos, and revel in the
                  rainbow-colored coral reefs and schools of fish moving as a
                  unified group in Raja Ampat. Grab your swimsuit and join us!
                </p>
              </div>
            </section>
            <div className="snor-links">
              <div className="snor-wr">
                <h1 style={{ color: "#544d69" }}>
                  Freatured Snorkeling Adventures{" "}
                </h1>
                <div className="search"></div>{" "}
              </div>
            </div>
            <section className="content-sub">
              <Card
                className="card"
                style={{
                  borderRadius: 18,
                  boxShadow: "0 9px 9px 9px rgba(214, 212, 212)",
                  padding: 15,
                  minWidth: "280px",
                }}
                sx={{ maxWidth: 280 }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300"
                    src="https://images.pexels.com/photos/678725/pexels-photo-678725.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="green iguana"
                    style={{ objectFit: "contain" }}
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      <Link> Snorkeling Raja Ampat</Link>
                      <br />
                      12 days from <b>$6,495</b>
                      <br />
                      Level 3
                    </Typography>
                    <Typography
                      atyle={{ height: 20, overflow: "hidden" }}
                      gutterBottom
                      variant="h5"
                      component="div"
                      fontSize={18}
                    >
                      On this boat-based trip, snorkel in one of the most
                      pristine coral reef systems on Earth, the Raja Ampat
                      archipelago in the heart of Indonesia's Coral Triangle.
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
                  minWidth: "280px",
                }}
                sx={{ maxWidth: 280 }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300"
                    src="https://images.pexels.com/photos/3512846/pexels-photo-3512846.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="green iguana"
                    style={{ objectFit: "contain" }}
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      <Link to="/snorkeling">
                        Tonga: Swimming with Humpback Whales{" "}
                      </Link>
                      <br />8 days from <b>$8,490</b>
                      <br />
                      Level 9
                    </Typography>
                    <Typography
                      atyle={{ height: 20, overflow: "hidden" }}
                      gutterBottom
                      variant="h5"
                      component="div"
                      fontSize={18}
                    >
                      Journey to Tonga for unforgettable encounters with
                      humpback whales, along with sea kayaking adventures,
                      snorkeling, and exploring Tonga's Ha'apai Islands.
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
                  minWidth: "280px",
                }}
                sx={{ maxWidth: 280 }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300"
                    src="https://images.pexels.com/photos/8299960/pexels-photo-8299960.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="green iguana"
                    style={{ objectFit: "contain" }}
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      <Link to="/">The Tuorquoise Coast</Link>
                      <br />
                      14 days from <b>$9,6243</b>
                      <br />
                      Level 9
                    </Typography>
                    <Typography
                      atyle={{ height: 20, overflow: "hidden" }}
                      gutterBottom
                      variant="h5"
                      component="div"
                      fontSize={18}
                    >
                      Charter a luxury yacht with your naturalist guide, and set
                      off into Darwin’s world for an active journey full of
                      nature hikes and wildlife wonders, including fantastic
                      snorkeling with playful sea lions.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </section>
            <section className="content-subb"></section>

            <div className="travel">
              <h1 style={{ color: "#544d69" }}>
                READ REVIEWS FROM OUR CLIENTS
              </h1>
              <img
                width={80}
                src="https://cdn-icons-png.flaticon.com/512/218/218745.png"
                alt=""
              />
              <div>
                <p>
                  "This was a great snorkeling experience. We got to see 22
                  different reefs—lots of variety—and didn't see any other boats
                  for 8 days—truly amazing.”
                  <br />
                  Paula S., Sedro Woolley, WA
                </p>
                <br />
                <br />

                <p>
                  "I was awestruck by the beauty I saw. I felt for the first
                  time in my life that I had been honored to see the world as it
                  was in its beginning. Certainly a life-changing experience.”
                  <br />
                  Betty-Lynn W., Westport, CT
                </p>
                <br />
                <br />
                <p>
                  “The most beautiful tropical paradise trip I have ever done.
                  It's absolutely stunning and being out in the natural beauty
                  of the environment with only our group, often alone, was
                  amazing.”
                  <br />
                  Alison J., Santa Barbara, CA
                </p>
                <br />
                <br />
                <p>
                  Snorkeling with the whales was spectacular. We also enjoyed
                  getting to know the Tonga locals. The trip was everything we’d
                  hoped for and more.”
                  <br />
                  Pam R., University Place, WA
                </p>
              </div>
            </div>
          </Container>
        </div>
      </>
      <ContentDive />
      <Footer />
    </>
  );
};

export default Snorkeling;
