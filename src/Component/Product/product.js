import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import ProductHeader from "./ProductHeader/productHeader";

const Procuct = ({ productData }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productData);
  }, [productData]);

  return (
    <div className="product">
      <ProductHeader
        products={products}
        setProducts={setProducts}
        productData={productData}
      />
      <TableContainer component={Paper} className="table">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Inventory Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products?.map((product) => (
              <TableRow key={product.name}>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.description}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.inventoryDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

const mapStateToProps = ({ product }) => ({
  productData: product?.data,
});

export default connect(mapStateToProps, {})(Procuct);
