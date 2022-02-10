import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../pages/FormOrder.css";
const FormOrder = () => {
  const [form, setForm] = useState({
    name: "",
    street: "",
    sity: "",
    phone: "",
    email: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // ! проверка на пустоту
    for (const key in form) {
      if (!form[key]) {
        alert("Данные потверждены");
        return;
      }
    }

    // ! очищаем инпуты
    setForm({
      name: "",
      street: "",
      sity: "",
      phone: "",
      email: "",
    });
  };

  const [open, setOpen] = React.useState(true);

  return (
    <div>
      <Container>
        <div className="container">
          <div className="title"></div>
          <div className="d-flex">
            <form onSubmit={handleSubmit}>
              <label className="label-cart">
                <span className="fname">
                  Enter Name <span className="required">*</span>
                </span>
                <input
                  required
                  className="input-cart"
                  type="text"
                  name="fname"
                />
              </label>

              <label className="label-cart">
                <span>
                  City <span class="required">*</span>
                </span>
                <input
                  required
                  className="input-cart"
                  type="text"
                  name="city"
                />
              </label>

              <label className="label-cart">
                <span>
                  Phone <span class="required">*</span>
                </span>
                <input
                  required
                  className="input-cart"
                  type="number"
                  name="city"
                />
              </label>
              <label className="label-cart">
                <span>
                  Email <span class="required">*</span>
                </span>
                <input
                  required
                  className="input-cart"
                  type="email"
                  name="city"
                />
              </label>
              <button type="submit" className="button-cart">
                Confirm
              </button>
            </form>
          </div>
        </div>

        <Link to="/payment-card">
          <Button
            style={{ display: "block", margin: "auto", marginTop: "40px" }}
            variant="contained"
            color="secondary"
          >
            Go to payment
          </Button>
        </Link>
      </Container>
    </div>
  );
};

export default FormOrder;
