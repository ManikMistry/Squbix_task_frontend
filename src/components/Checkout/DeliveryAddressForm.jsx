import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAddress } from "../../context/action.js";
import { Box, Button, Grid, TextField } from "@mui/material";
import AddressCard from "./AddressCard.jsx";
import { useNavigate } from "react-router-dom";

function DeliveryAddressForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const address = useSelector((state) => state.addressData);
  const formRef = useRef(null);

  const handleDeliverHereClick = () => {
    navigate('/orderSummary');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const newAddress = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      streetAddress: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      zipCode: data.get("zip"),
      mobile: data.get("phoneNumber"),
    };
    dispatch(updateAddress(newAddress));
    formRef.current.reset();
  };

  return (
    <div className="relative top-32 px-20 mb-[10rem]">
      <Grid container spacing={4}>
        <Grid
          xs={12}
          lg={5}
          className="border rounded-e-md shadow-md h-[30.5rem overflow-y-scroll]"
        >
          <div className="p-5 py-7 border-b cursor-pointer">
            <AddressCard />
            <Button
              sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }}
              size="large"
              variant="contained"
              onClick={handleDeliverHereClick} 
            >
              Deliver Here
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} lg={7}>
          <Box className="border rounded-s-md shadow-md p-5">
            <form onSubmit={handleSubmit} ref={formRef}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    fullWidth
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="address"
                    name="address"
                    label="Address"
                    fullWidth
                    autoComplete="street-address"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="address-level2"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="State/Province/Region"
                    fullWidth
                    autoComplete="address-level1"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="zip"
                    name="zip"
                    label="Zip / Postal Code"
                    fullWidth
                    autoComplete="postal-code"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="phoneNumber"
                    name="phoneNumber"
                    label="Phone Number"
                    fullWidth
                    autoComplete="tel"
                  />
                </Grid>
              </Grid>
              <Button
                sx={{ py: 1.5, mt: 2, bgcolor: "RGB(145 85 253)" }}
                size="large"
                variant="contained"
                type="submit"
              >
                Submit
              </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default DeliveryAddressForm;
