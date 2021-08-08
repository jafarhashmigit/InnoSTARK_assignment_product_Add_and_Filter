import { useState } from "react";
import { Grid, Button, Box } from "@material-ui/core";
import AddProduct from "./AddProduct";

const ProductHeader = ({ products, setProducts, productData }) => {
  const [openProductDialog, setOpenProductDialog] = useState(false);

  const handleOpenProductDialog = () => {
    setOpenProductDialog(true);
  };

  const handleCloseProductDialog = () => {
    setOpenProductDialog(false);
  };

  const onHandleSearch = (searchValue) => {
    let filterProduct = products.filter((product) => {
      return product?.name
        .toLocaleLowerCase()
        .includes(searchValue.toLowerCase());
    });
    searchValue?.length === 0
      ? setProducts(productData)
      : setProducts(filterProduct);
  };

  return (
    <>
      <Box mb={2}>
        <Grid container className="product-header">
          <Grid item xs={6}>
            <Button variant="contained" onClick={handleOpenProductDialog}>
              Add Product
            </Button>
          </Grid>
          <Grid item xs={6} align="right">
            <input
              type="text"
              className="input-filed"
              placeholder="Search products"
              onChange={(e) => onHandleSearch(e.target.value)}
            />
          </Grid>
        </Grid>
      </Box>

      <AddProduct
        openProductDialog={openProductDialog}
        setOpenProductDialog={setOpenProductDialog}
        handleCloseProductDialog={handleCloseProductDialog}
      />
    </>
  );
};

export default ProductHeader;
