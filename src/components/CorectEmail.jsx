import { Container } from "@mui/material";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../CorectName.css";
const CorectEmail = () => {
  return (
    <>
      <Container>
        <section className="section">
          <div className="section-img">
            <img
              src="https://avatars.mds.yandex.net/i?id=0325e108b67f727f0383ebd280855419-5869113-images-thumbs&n=13"
              alt="human-group"
            />
          </div>
          <div className="contacts">
            <div>
              <h1>OFFICE INFORMATION</h1>
              <h4>Business Hours</h4>
              <span>Monday-Friday, 8:30am-5:00pm</span>
              <span>Time</span>
            </div>
            <div>
              <h2>Phone Numbers</h2>
              <p>Toll free:</p>
              <p>1-800-368-2794</p>
              <p>Local:</p>
              <p>1-510-558-2488</p>
              <p>Fax:</p>
              <a>1-510-558-2489</a>
            </div>
            <div>
              <strong>Email</strong>
              <a href="#">info@wildernesstravel.com</a>
            </div>
            <div>
              <strong>Mailing Address</strong>
              <p>1102 Ninth Street, Berkeley, CA 94710</p>
            </div>
          </div>
        </section>
      </Container>
      <div className="form-message">
        <Container>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                Please fill out all required fields as indicated by asterisk
              </Form.Label>
              <Form.Control type="first-name" placeholder="*First Name" />
              {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
              <Form.Control type="last-name" placeholder="*Last Name" />
              <span></span>
              <Form.Control type="email" placeholder="*Email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              {/* <Form.Label>Password</Form.Label> */}
              <Form.Control type="text" placeholder="*Dautime Phone" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="I would like to check availability"
              />
              <Form.Check
                type="checkbox"
                label="i would like to make a reservation"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>YOUR MESSAGE</Form.Label>
              <br />
              <Form.Control type="text" placeholder="*Messege" />
            </Form.Group>
            <Button variant="primary" type="submit">
              <Link to="/">Submit</Link>
            </Button>
            <Form.Check
              type="checkbox"
              label="Sign me up to receive your Enewsletter, announcing new adventures and special offers"
            />
          </Form>
        </Container>
      </div>
    </>
  );
};

export default CorectEmail;
