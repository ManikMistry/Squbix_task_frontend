import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
// import { useLocation } from "react-router-dom";
import OrderSummary from "./OrderSummary";
OrderSummary
import DeliveryAddressForm from "./DeliveryAddressForm";

const steps = [
  "Login",
  "Delevery Address",
  "Order Summary",
  "Payment"
];

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  // const location=useLocation();
  const querySearch=new URLSearchParams(location.search);

  const step=querySearch.get("step");

  return (
    <div className=" px-10 lg:px-20">
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={step}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className=" mt-10">
                {step==2?<DeliveryAddressForm/>:<OrderSummary/>}
            </div>
          </React.Fragment>
        )}
      </Box>
    </div>
  );
}
