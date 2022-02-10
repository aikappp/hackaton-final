import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { ToastContainer } from "react-toastify";
import { AdminContext } from "../context/AdminProvider";

const AddPage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    level: "",
    price: "",
    description: "",
    image: "",
    region: "",
  });

  const { addProduct } = useContext(AdminContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    // ! проверка на пустоту
    for (const key in newProduct) {
      if (!newProduct[key]) {
        alert("Заполните поля!");
        return;
      }
    }

    addProduct(newProduct);
    // ! очищаем инпуты
    setNewProduct({
      name: "",
      level: "",
      price: "",
      description: "",
      image: "",
      region: "",
    });
  };

  return (
    <div className="add-edit-page">
      <Container>
        <h2 style={{ color: "gray" }}>ADD NEW TRIP</h2>

        <form onSubmit={handleSubmit}>
          <TextField
            className="input-add"
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
            value={newProduct.name}
            label="Enter name"
            variant="standard"
          />
          <TextField
            className="input-add"
            onChange={(e) =>
              setNewProduct({ ...newProduct, level: e.target.value })
            }
            value={newProduct.level}
            label="Enter level"
            variant="standard"
          />
          <TextField
            className="input-add"
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: +e.target.value })
            }
            value={newProduct.price}
            label="Enter price"
            variant="standard"
            type="number"
          />
          <TextareaAutosize
            onChange={(e) =>
              setNewProduct({ ...newProduct, description: e.target.value })
            }
            value={newProduct.description}
            minRows={3}
            placeholder="Enter description "
          />
          <TextField
            className="input-add"
            onChange={(e) =>
              setNewProduct({ ...newProduct, image: e.target.value })
            }
            value={newProduct.image}
            label="Enter photo"
            variant="standard"
          />

          <FormControl fullWidth>
            <InputLabel id="region-select">Region</InputLabel>
            <Select
              onChange={(e) =>
                setNewProduct({ ...newProduct, region : e.target.value })
              }
              value={newProduct.region}
              labelId="region-select"
              label="Choose region"
            >
              <MenuItem value="africa">Africa</MenuItem>
              <MenuItem value="asia">Asia</MenuItem>
              <MenuItem value="europe">Europe</MenuItem>
              <MenuItem value="latin-america">Latin America</MenuItem>
              <MenuItem value="middle-east">Middle East</MenuItem>
              <MenuItem value="north-america">North America</MenuItem>
            </Select>
          </FormControl>
          <Button
            style={{ backgroundColor: "mediumpurple" }}
            type="submit"
            variant="contained"
          >
            Add
          </Button>
        </form>
      </Container>
      <ToastContainer />
    </div>
  );
};

export default AddPage;
