import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  TextField,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ClientContext } from "../context/ClientProvider";

const FiltersBlock = () => {
  const search = new URLSearchParams(window.location.search);

  const navigate = useNavigate();
  const { getProducts } = useContext(ClientContext);
  const [searchValue, setSearchValue] = useState(search.get("q") || "");
  const [colorValue, setColorValue] = useState(search.get("color") || "");
  const [priceValue, setPriceValue] = useState(search.get("price_lte") || "");

  const filterProducts = (key, value) => {
    search.set(key, value);
    let newPath = `${window.location.pathname}?${search.toString()}`;
    navigate(newPath);
    setSearchValue(search.get("q") || "");
    setColorValue(search.get("region") || "");
    setPriceValue(search.get("price_lte") || "");
    getProducts();
  };
  const resetFilter = () => {
    navigate("/all-products");
    setSearchValue("");
    setColorValue("");
    setPriceValue("");
    getProducts();
  };
  return (
    <div className="filters-block">
      <div>
        <TextField
          value={searchValue}
          onChange={(e) => filterProducts("q", e.target.value)}
          variant="outlined"
          label="Search"
        />
      </div>
      <div>
        <FormControl fullWidth>
          <InputLabel id="region-select"> Region </InputLabel>
          <Select
            value={colorValue}
            onChange={(e) => filterProducts("color", e.target.value)}
            labelId="refion-select"
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
      </div>
      <div>
        <Slider
          onChange={(e) => filterProducts("price_lte", e.target.value)}
          valueLabelDisplay="auto"
          max={40000}
          step={100}
        />
      </div>
      <div>
        <Button onClick={resetFilter} variant="contained" color="inherit">
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default FiltersBlock;
