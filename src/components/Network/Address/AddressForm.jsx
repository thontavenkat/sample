import React from "react";
import { Box, TextField, Typography } from "@mui/material";

const AddressForm = () => {
  return (
    <><Typography sx={{ fontWeight: "bold",marginBottom:"6px" }}>Location Details:</Typography>
      <Box className="address-grid">
        <Box>
          <Typography>H.No</Typography>
          <TextField fullWidth />
        </Box>
        <Box>
          <Typography>Street / Building *</Typography>
          <TextField fullWidth />
        </Box>
        <Box>
          <Typography>Landmark *</Typography>
          <TextField fullWidth />
        </Box>
        <Box>
          <Typography>City *</Typography>
          <TextField fullWidth />
        </Box>
      </Box>

      <Box className="address-grid">
        <Box>
          <Typography>Pincode *</Typography>
          <TextField fullWidth />
        </Box>
        <Box>
          <Typography>District *</Typography>
          <TextField fullWidth />
        </Box>
        <Box>
          <Typography>State *</Typography>
          <TextField fullWidth />
        </Box>
        <Box>
          <Typography>Country *</Typography>
          <TextField fullWidth />
        </Box>
      </Box>

      <Box className="latlong-container">
        <Box className="latlong-box">
          <Typography>Latitude *</Typography>
          <TextField fullWidth />
        </Box>
        <Box className="latlong-box">
          <Typography>Longitude *</Typography>
          <TextField fullWidth />
        </Box>
      </Box>
    </>
  );
};

export default AddressForm;
