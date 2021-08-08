import { Button, makeStyles, Modal, Backdrop, Fade } from "@material-ui/core";
import { useState } from "react";
import { addProduct } from "../../../redux/Product/product.actions";
import { connect } from "react-redux";
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "#0C1721",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 2, 2),
    background: "#0C1721",
    width: "614px",
    borderRadius: "8px 8px 8px 8px",
  },
}));

const AddProduct = ({
  openProductDialog,
  setOpenProductDialog,
  handleCloseProductDialog,
  productData,
  addProductData,
}) => {
  const classes = useStyles();
  let [products, setProducts] = useState({
    name: "",
    description: "",
    price: "",
    inventoryDate: "",
  });
  const onHandleSubmit = () => {
    let addIDInProduct = {
      ...products,
      id: productData?.length ? productData.length : 0,
    };
    let dispatchData = [...productData, addIDInProduct];
    if (productData === undefined) dispatchData = [addIDInProduct];
    else dispatchData = [...productData, addIDInProduct];
    setOpenProductDialog(false);
    addProductData(dispatchData);
  };
  return (
    <>
      <Modal
        open={openProductDialog}
        onClose={handleCloseProductDialog}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        className={classes.modal}
      >
        <Fade in={openProductDialog} style={{ outline: 0 }}>
          <div className={classes.paper}>
            <div className="add-product-dialog">
              <h4>Add Product</h4>
              <div className="form-control">
                <label>Product Name</label>
                <input
                  type="text"
                  className="input-filed"
                  onChange={(e) =>
                    setProducts({ ...products, name: e.target.value })
                  }
                />
              </div>

              <div className="form-control">
                <label>Description</label>
                <textarea
                  className="input-filed"
                  placeholder="Minimum 3 rows"
                  onChange={(e) =>
                    setProducts({
                      ...products,
                      description: e.target.value,
                    })
                  }
                />
              </div>

              <div className="form-control">
                <label>Price</label>
                <input
                  type="number"
                  className="input-filed"
                  onChange={(e) =>
                    setProducts({ ...products, price: e.target.value })
                  }
                />
              </div>
              <div className="form-control">
                <label>Inventory Date</label>
                <input
                  type="date"
                  className="input-filed"
                  onChange={(e) =>
                    setProducts({ ...products, inventoryDate: e.target.value })
                  }
                />
              </div>

              <Button variant="contained" onClick={() => onHandleSubmit()}>
                Save
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  );
};
const mapStateToProps = ({ product }) => ({
  productData: product?.data,
});
const mapDispatchToProps = (dispatch) => {
  return {
    addProductData: (data) => dispatch(addProduct(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
