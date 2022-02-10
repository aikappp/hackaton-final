import React from "react";
import { Container } from "react-bootstrap";
import ContentHik from "./ContentHik";
const Hiking = () => {
  return (
    <>
      <div className="af-container">
        <h1 style={{ textAlign: "center" }} className="af">
          Hiking and Trekking Adventures{" "}
        </h1>

        <img
          src="https://images.pexels.com/photos/5064662/pexels-photo-5064662.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />
      </div>
      <>
        <div className="af-content">
          <Container>
            <section className="content-subscription-af">
              <div className="content-container-af">
                <h1 style={{ textAlign: "center" }} className="hik">
                  WHY HIKE AND TREK WITH WT?
                </h1>
                <p className="h">
                  • Award-winning Itineraries Walking, hiking, and trekking
                  journeys in more than 40 countries. WT is honored to have been
                  awarded the “Best Hiking & Walking Trips” by AFAR Traveler’s
                  Choice Awards two years in a row!
                  <br />
                  • 40+ Years of Expertise Wilderness Travel is a pioneering
                  leader in adventure travel, bringing you immersive adventures
                  and unique routes in the most fascinating corners of the world
                  <br />
                  • Expert Trip Leaders Our acclaimed Trip Leaders are the
                  absolute best in the business. They bring insider knowledge,
                  camaraderie, and fun to the trail—and introduce you to special
                  people and places you wouldn’t find on your own
                  <br />• Adventure with comfort From cozy inns to world-class
                  hotels, chef-inspired trail cuisine to feasts in the finest
                  restaurants
                </p>
              </div>
            </section>
          </Container>
          {/* <h1 style={{ textAlign: "center" }} className="af">
            SEARCH BY REGION{" "}
          </h1> */}
          
        </div>
      </>
    </>
  );
};

export default Hiking;
