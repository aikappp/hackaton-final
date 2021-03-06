import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { AdminContext } from "../context/AdminProvider";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import * as React from "react";
// import { AdminContext } from "../context/AdminProvider";

const AdminTable = () => {
  const { getProducts, products, deleteProduct } =
    React.useContext(AdminContext);

  React.useEffect(() => {
    getProducts();
  }, []);

  if (!products) {
    return <h2>Loading...</h2>;
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} area-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>#</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Image</TableCell>
            <TableCell align="right">level</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Region</TableCell>
            <TableCell align="right">Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((item) => (
            <TableRow
              key={item.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>
                <Button
                  style={{
                    border: "1.5px solid #4138B0",
                    color: "gray",
                    fontWeight: "normal",
                  }}
                  onClick={() => deleteProduct(item.id)}
                >
                  delete
                </Button>
              </TableCell>
              <TableCell>
                <Link to={`/admin-panel/edit/${item.id}`}>
                  <Button
                    style={{
                      border: "1px solid #4138B0",
                      backgroundColor: "rgb(218, 158, 218)",
                      color: "white",
                    }}
                  >
                    change
                  </Button>
                </Link>
              </TableCell>

              <TableCell component="th" scope="row">
                {item.name}
              </TableCell>
              <TableCell align="right">
                <img width={100} src={item.image} alt="product_image" />
              </TableCell>
              <TableCell align="right">{item.level}</TableCell>
              <TableCell align="right">{item.price}</TableCell>
              <TableCell align="right">{item.region}</TableCell>
              <TableCell align="right">{item.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AdminTable;
