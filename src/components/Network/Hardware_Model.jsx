// import React, { useState } from "react";
// import {
//   TextField,
//   IconButton,
//   Button,
//   Box,
//   Typography,
//   MenuItem,
//   Container,
//   Modal,
// } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
// import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
// import CloseIcon from "@mui/icons-material/Close";
// import "./../../assests/css/hardware_model.css"; // Import CSS file

// const AddHardwareForm = ({ open, handleClose }) => {
//   const hardwareTypes = [
//     { key: "NAS", label: "NAS", placeholder: "Search With NAS Serial Number" },
//     { key: "OLT", label: "OLT", placeholder: "Search With OLT Serial Number" },
//     { key: "DP", label: "DP", placeholder: "Search With DP Serial Number" },
//     { key: "CPE", label: "CPE", placeholder: "Search With CPE Serial Number" },
//   ];

//   const [openForms, setOpenForms] = useState({});

//   const toggleForm = (key) => {
//     setOpenForms((prev) => ({ ...prev, [key]: !prev[key] }));
//   };

//   return (
//     <Modal open={open} onClose={handleClose} disableScrollLock>
//       <Container className="add-hardware-modal">
//         {/* Header */}
//         <Box className="add-hardware-header">
//           <Typography variant="h6">Add New Hardware</Typography>
//           <IconButton onClick={handleClose}>
//             <CloseIcon />
//           </IconButton>
//         </Box>
//         <hr /> <br />

//         {/* Hardware Selection - Search and Add Button */}
//         <Box className="hardware-content">
//           {hardwareTypes.map((hardware) => (
//             <Box key={hardware.key} mb={2}>
//               <Box className="hardware-selection">
//                 <TextField
//                   fullWidth
//                   placeholder={hardware.placeholder}
//                   className="search-input"
//                   InputProps={{
//                     endAdornment: (
//                       <IconButton size="small">
//                         <SearchIcon />
//                       </IconButton>
//                     ),
//                   }}
//                 />
//                 <Button
//                   variant="outlined"
//                   startIcon={
//                     openForms[hardware.key] ? (
//                       <RemoveCircleOutlineIcon />
//                     ) : (
//                       <AddCircleOutlineIcon />
//                     )
//                   }
//                   className="add-button"
//                   onClick={() => toggleForm(hardware.key)}
//                 >
//                   {openForms[hardware.key]
//                     ? ` ${hardware.label}`
//                     : ` ${hardware.label}`}
//                 </Button>
//               </Box>

//               {/* Hardware Form */}
//               {openForms[hardware.key] && (
//                 <Box className="hardware-form">
//                   <Box className="hardware-grid">
//                   <Box className="select-branch-container">
//   <Typography>Select Branch *</Typography>
//   <TextField select fullWidth>
//     <div className="menuitemss">
//       <MenuItem value="Gangavaram">GANGAVARAM</MenuItem>
//       <MenuItem value="Kakinada">KAKINADA</MenuItem>
//       <MenuItem value="Mandapeta">MANDAPETA</MenuItem>
//       <MenuItem value="Rajamahendravaram">RAJAMAHENDRAVARAM</MenuItem>
//       <MenuItem value="Test">Test</MenuItem>
//       <MenuItem value="Vijayawada">VIJAYAWADA</MenuItem>
//       <MenuItem value="Visakhapatnam">VISAKHAPATNAM</MenuItem>
//     </div>
//   </TextField>
// </Box>

// <Box className="hardware-type-container">
//   <Typography>{hardware.label} Type *</Typography>
//   <TextField select fullWidth sx={{ "& .MuiInputBase-root": { height: 36 } }}>
//     <div className="menuitemss">
//       <MenuItem value="Alcatel">Alcatel</MenuItem>
//       <MenuItem value="Cisco">Cisco</MenuItem>
//       <MenuItem value="HB">HB</MenuItem>
//       <MenuItem value="Huawei">Huawei</MenuItem>
//       <MenuItem value="Juniper">Juniper</MenuItem>
//       <MenuItem value="Mikrotik">Mikrotik</MenuItem>
//       <MenuItem value="Vbng-soft">Vbng-soft</MenuItem>
//     </div>
//   </TextField>
// </Box>

// <Box className="name-input-container">
//   <Typography>Name *</Typography>
//   <TextField fullWidth sx={{ "& .MuiInputBase-root": { height: 36 } }} />
// </Box>

//                   </Box>

//                   <Box className="address-grid">
//   <Box>
//     <Typography>IP Address *</Typography>
//     <TextField fullWidth />
//   </Box>
//   <Box>
//     <Typography>Secret *</Typography>
//     <TextField fullWidth />
//   </Box>
//   <Box>
//     <Typography>Status *</Typography>
//     <TextField select fullWidth>
//       <MenuItem value="active">Active</MenuItem>
//       <MenuItem value="inactive">Inactive</MenuItem>
//     </TextField>
//   </Box>
// </Box>
// <Box className="accounting-grid">
//   <Box>
//     <Typography>Accounting Interval *</Typography>
//     <TextField type="time" fullWidth />
//   </Box>
//   <Box>
//     <Typography>Serial Number *</Typography>
//     <TextField fullWidth />
//   </Box>
// </Box>
// <Box className="address-grid">
//   <Box>
//     <Typography>H.No</Typography>
//     <TextField fullWidth />
//   </Box>
//   <Box>
//     <Typography>Street / Building *</Typography>
//     <TextField fullWidth />
//   </Box>
//   <Box>
//     <Typography>Landmark *</Typography>
//     <TextField fullWidth />
//   </Box>
//   <Box>
//     <Typography>City *</Typography>
//     <TextField fullWidth />
//   </Box>
// </Box>
// <Box className="address-grid">
//   <Box>
//     <Typography>Pincode *</Typography>
//     <TextField fullWidth />
//   </Box>
//   <Box>
//     <Typography>District *</Typography>
//     <TextField fullWidth />
//   </Box>
//   <Box>
//     <Typography>State *</Typography>
//     <TextField fullWidth />
//   </Box>
//   <Box>
//     <Typography>Country *</Typography>
//     <TextField fullWidth />
//   </Box>
// </Box>


// <Box className="latlong-container">
//   <Box className="latlong-box">
//     <Typography>Latitude *</Typography>
//     <TextField fullWidth />
//   </Box>
//   <Box className="latlong-box">
//     <Typography>Longitude *</Typography>
//     <TextField fullWidth />
//   </Box>
// </Box>


//                   <Box className="button-group">
//                     <Button variant="contained" color="primary">
//                       Create
//                     </Button>
//                     <Button variant="outlined" color="secondary">
//                       Reset
//                     </Button>
//                   </Box>
//                 </Box>
//               )}
//             </Box>
//           ))}
//         </Box>
//       </Container>
//     </Modal>
//   );
// };

// export default AddHardwareForm;



// import React, { useState } from "react";
// import {
//   TextField,
//   IconButton,
//   Button,
//   Box,
//   Typography,
//   MenuItem,
//   Container,
//   Modal,
// } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
// import "./../../assests/css/hardware_model.css"; // Import CSS file

// const AddHardwareForm = ({ open, handleClose }) => {
//   const hardwareTypes = [
//     { key: "NAS", label: "NAS" },
//     { key: "OLT", label: "OLT" },
//     { key: "DP", label: "DP" },
//     { key: "CPE", label: "CPE" },
//   ];

//   const [selectedHardware, setSelectedHardware] = useState("NAS");

//   return (
//     <Modal open={open} onClose={handleClose} disableScrollLock>
//       <Container className="add-hardware-modal">
//         {/* Header */}
//         <Box className="add-hardware-header">
//           <Typography variant="h6">Add New Hardware</Typography>
//           <IconButton onClick={handleClose}>
//             <CloseIcon />
//           </IconButton>
//         </Box>
//         <hr /> <br />

//         {/* Dropdown to Select Hardware Type */}
//         <Box className="hardware-selection">
//   <Typography sx={{fontWeight:"bold"}}>Device Type*</Typography>
//   <TextField
//     select
//     fullWidth
//     value={selectedHardware}
//     onChange={(e) => setSelectedHardware(e.target.value)}
//     sx={{ width: "250px" }} // Adjust the width as needed
//   >
//     {hardwareTypes.map((hardware) => (
//       <MenuItem key={hardware.key} value={hardware.key}>
//         {hardware.label}
//       </MenuItem>
//     ))}
//   </TextField>
// </Box>


//         {/* Hardware Form - Show Based on Selected Type */}
        // <Box className="hardware-form">
        //   <Box className="hardware-grid">
        //     <Box className="select-branch-container">
        //       <Typography>Select Branch *</Typography>
        //       <TextField select fullWidth>
        //         <MenuItem value="Gangavaram">GANGAVARAM</MenuItem>
        //         <MenuItem value="Kakinada">KAKINADA</MenuItem>
        //         <MenuItem value="Mandapeta">MANDAPETA</MenuItem>
        //         <MenuItem value="Rajamahendravaram">RAJAMAHENDRAVARAM</MenuItem>
        //         <MenuItem value="Test">Test</MenuItem>
        //         <MenuItem value="Vijayawada">VIJAYAWADA</MenuItem>
        //         <MenuItem value="Visakhapatnam">VISAKHAPATNAM</MenuItem>
        //       </TextField>
        //     </Box>

        //     <Box className="hardware-type-container">
        //       <Typography>{selectedHardware} Type *</Typography>
        //       <TextField select fullWidth>
        //         <MenuItem value="Alcatel">Alcatel</MenuItem>
        //         <MenuItem value="Cisco">Cisco</MenuItem>
        //         <MenuItem value="HB">HB</MenuItem>
        //         <MenuItem value="Huawei">Huawei</MenuItem>
        //         <MenuItem value="Juniper">Juniper</MenuItem>
        //         <MenuItem value="Mikrotik">Mikrotik</MenuItem>
        //         <MenuItem value="Vbng-soft">Vbng-soft</MenuItem>
        //       </TextField>
        //     </Box>

        //     <Box className="name-input-container">
        //       <Typography>Name *</Typography>
        //       <TextField fullWidth />
        //     </Box>
        //   </Box>

        //   <Box className="address-grid">
        //     <Box>
        //       <Typography>IP Address *</Typography>
        //       <TextField fullWidth />
        //     </Box>
        //     <Box>
        //       <Typography>Secret *</Typography>
        //       <TextField fullWidth />
        //     </Box>
        //     <Box>
        //       <Typography>Status *</Typography>
        //       <TextField select fullWidth>
        //         <MenuItem value="active">Active</MenuItem>
        //         <MenuItem value="inactive">Inactive</MenuItem>
        //       </TextField>
        //     </Box>
        //   </Box>

        //   <Box className="accounting-grid">
        //     <Box>
        //       <Typography>Accounting Interval *</Typography>
        //       <TextField type="time" fullWidth />
        //     </Box>
        //     <Box>
        //       <Typography>Serial Number *</Typography>
        //       <TextField fullWidth />
        //     </Box>
        //   </Box>

        //   <Box className="address-grid">
        //     <Box>
        //       <Typography>H.No</Typography>
        //       <TextField fullWidth />
        //     </Box>
        //     <Box>
        //       <Typography>Street / Building *</Typography>
        //       <TextField fullWidth />
        //     </Box>
        //     <Box>
        //       <Typography>Landmark *</Typography>
        //       <TextField fullWidth />
        //     </Box>
        //     <Box>
        //       <Typography>City *</Typography>
        //       <TextField fullWidth />
        //     </Box>
        //   </Box>

        //   <Box className="address-grid">
        //     <Box>
        //       <Typography>Pincode *</Typography>
        //       <TextField fullWidth />
        //     </Box>
        //     <Box>
        //       <Typography>District *</Typography>
        //       <TextField fullWidth />
        //     </Box>
        //     <Box>
        //       <Typography>State *</Typography>
        //       <TextField fullWidth />
        //     </Box>
        //     <Box>
        //       <Typography>Country *</Typography>
        //       <TextField fullWidth />
        //     </Box>
        //   </Box>

        //   <Box className="latlong-container">
        //     <Box className="latlong-box">
        //       <Typography>Latitude *</Typography>
        //       <TextField fullWidth />
        //     </Box>
        //     <Box className="latlong-box">
        //       <Typography>Longitude *</Typography>
        //       <TextField fullWidth />
        //     </Box>
        //   </Box>

        //   <Box className="button-group">
        //     <Button variant="contained" color="primary">
        //       Create
        //     </Button>
        //     <Button variant="outlined" color="secondary">
        //       Reset
        //     </Button>
        //   </Box>
        // </Box>
//       </Container>
//     </Modal>
//   );
// };

// export default AddHardwareForm;



import React, { useState } from "react";
import {
  TextField,
  IconButton,
  Button,
  Box,
  Typography,
  MenuItem,
  Container,
  Modal,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import NASForm from "./Hardware_Model/NASForm.jsx";
import OLTForm from "./Hardware_Model/OLTForm";
import DPForm from "./Hardware_Model/DPForm";
import CPEForm from "./Hardware_Model/CPEForm";
import "./../../assests/css/hardware_model.css"; // Import CSS file


const AddHardwareForm = ({ open, handleClose }) => {
  const hardwareTypes = [
    { key: "NAS", label: "NAS" },
    { key: "OLT", label: "OLT" },
    { key: "DP", label: "DP" },
    { key: "CPE", label: "CPE" },
  ];

  const [selectedHardware, setSelectedHardware] = useState("NAS");

  // Function to render the selected form component
  const renderHardwareForm = () => {
    switch (selectedHardware) {
      case "NAS":
        return <NASForm />;
      case "OLT":
        return <OLTForm />;
      case "DP":
        return <DPForm />;
      case "CPE":
        return <CPEForm />;
      default:
        return null;
    }
  };

  return (
    <Modal open={open} onClose={handleClose} disableScrollLock>
      <Container className="add-hardware-modal">
        {/* Header */}
        <Box className="add-hardware-header">
          <Typography variant="h6">Add New Hardware</Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <hr />

        {/* Dropdown to Select Hardware Type */}
        <Box className="hardware-selection">
          <Typography sx={{ fontWeight: "bold" }}>Device Type</Typography>
          <TextField
            select
            value={selectedHardware}
            onChange={(e) => setSelectedHardware(e.target.value)}
            sx={{ width: "250px",height: "36px", "& .MuiSelect-select": { padding: "8px" } }}
            size="small" // Reduces the height
          >
            {hardwareTypes.map((hardware) => (
              <MenuItem key={hardware.key} value={hardware.key}>
                {hardware.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>

        {/* Render the selected hardware form */}
        {/* Scrollable Form Section */}
  <Box className="hardware-form-container">
    {renderHardwareForm()}
  </Box>

      </Container>
    </Modal>
  );
};

export default AddHardwareForm;
