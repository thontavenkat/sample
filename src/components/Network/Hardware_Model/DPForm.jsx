import React from "react";
import { Box, TextField, Typography, MenuItem, Button } from "@mui/material";
import AddressForm from "../Address/AddressForm";

const DPForm = ({ selectedHardware }) => {
  return (
    <Box className="hardware-form">
                          <Typography sx={{ fontWeight: "bold",marginBottom:"4px" }}>Device Details:</Typography>
             <Box className="hardware-grid">
               <Box className="select-branch-container">
                 <Typography>Select Branch *</Typography>
                 <TextField select fullWidth>
                   <MenuItem value="Gangavaram">GANGAVARAM</MenuItem>
                   <MenuItem value="Kakinada">KAKINADA</MenuItem>
                   <MenuItem value="Mandapeta">MANDAPETA</MenuItem>
                   <MenuItem value="Rajamahendravaram">RAJAMAHENDRAVARAM</MenuItem>
                   <MenuItem value="Test">Test</MenuItem>
                   <MenuItem value="Vijayawada">VIJAYAWADA</MenuItem>
                   <MenuItem value="Visakhapatnam">VISAKHAPATNAM</MenuItem>
                 </TextField>
               </Box>
   
               <Box className="hardware-type-container">
                 <Typography>DP Type *</Typography>
                 <TextField select fullWidth>
                   <MenuItem value="Alcatel">Alcatel</MenuItem>
                   <MenuItem value="Cisco">Cisco</MenuItem>
                   <MenuItem value="HB">HB</MenuItem>
                   <MenuItem value="Huawei">Huawei</MenuItem>
                   <MenuItem value="Juniper">Juniper</MenuItem>
                   <MenuItem value="Mikrotik">Mikrotik</MenuItem>
                   <MenuItem value="Vbng-soft">Vbng-soft</MenuItem>
                 </TextField>
               </Box>
   
               <Box className="name-input-container">
                 <Typography>Name *</Typography>
                 <TextField fullWidth />
               </Box>
             </Box>
   
             <Box className="address-grid">
               <Box>
                 <Typography>IP Address *</Typography>
                 <TextField fullWidth />
               </Box>
               <Box>
                 <Typography>Secret *</Typography>
                 <TextField fullWidth />
               </Box>
               <Box>
                 <Typography>Status *</Typography>
                 <TextField select fullWidth>
                   <MenuItem value="active">Active</MenuItem>
                   <MenuItem value="inactive">Inactive</MenuItem>
                 </TextField>
               </Box>
             </Box>
   
             <Box className="accounting-grid">
               <Box>
                 <Typography>Accounting Interval *</Typography>
                 <TextField type="time" fullWidth />
               </Box>
               <Box>
                 <Typography>Serial Number *</Typography>
                 <TextField fullWidth />
               </Box>
             </Box>
   
             <Box className="address-container">
        <AddressForm /> {/* Reusable AddressForm Component */}
      </Box>
   
             <Box className="button-group">
               <Button variant="contained" color="primary">
                 Create
               </Button>
               <Button variant="outlined" color="secondary">
                 Reset
               </Button>
             </Box>
           </Box>
  );
};

export default DPForm;
