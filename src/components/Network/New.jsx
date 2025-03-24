// import React from "react";
// import { TextField, IconButton, Button, Box, Typography, Container } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
// import CloseIcon from "@mui/icons-material/Close";

// const AddHardwareForm = () => {
//   const hardwareTypes = [
//     { label: "NAS", placeholder: "Search With NAS Serial Number" },
//     { label: "OLT", placeholder: "Search With OLT Serial Number" },
//     { label: "DP", placeholder: "Search With DP Serial Number" },
//     { label: "CPE", placeholder: "Search With CPE Serial Number" },
//   ];

//   return (
//     <Container maxWidth="md" sx={{ mt: 4, p: 3, borderRadius: 2, boxShadow: 3, bgcolor: "background.paper" }}>
//       {/* Header with title and close icon */}
//       <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
//         <Typography variant="h6">Add New Hardware</Typography>
//         <IconButton>
//           <CloseIcon />
//         </IconButton>
//       </Box>
//       <hr /> <br></br>

//       {hardwareTypes.map((hardware, index) => (
//         <Box key={index} display="flex" alignItems="center" gap={2} mb={2}>
//           <TextField
//             fullWidth
//             placeholder={hardware.placeholder}
//             sx={{
//                 "& .MuiInputBase-root": { height: 36 }, // Adjust input field height
//                 "& .MuiInputBase-input": { py: 0.5 }, // Reduce vertical padding inside input
//               }}
//             InputProps={{
//               endAdornment: (
//                 <IconButton size="small">
//                   <SearchIcon />
//                 </IconButton>
//               ),
//             }}
//           />
//           <Button variant="outlined" startIcon={<AddCircleOutlineIcon />}
//             sx={{ width: "150px" }} // Adjust width as needed
// >
//             Add {hardware.label}
//           </Button>
//         </Box>
//       ))}
//     </Container>
//   );
// };

// export default AddHardwareForm;


// import React, { useState } from "react";
// import { TextField, IconButton, Button, Box, Typography, Container, MenuItem } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
// import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
// import CloseIcon from "@mui/icons-material/Close";

// const AddHardwareForm = () => {
//   const [isNasVisible, setIsNasVisible] = useState(false);

//   const toggleNasEntry = () => {
//     setIsNasVisible(!isNasVisible);
//   };

//   return (
//     <Container maxWidth="lg" sx={{ mt: 4, p: 3, borderRadius: 2, boxShadow: 3, bgcolor: "background.paper" }}>
//       {/* Header with title and close icon */}
//       <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
//         <Typography variant="h6">Add New Hardware</Typography>
//         <IconButton>
//           <CloseIcon />
//         </IconButton>
//       </Box>
//       <hr /> <br />

//       {/* Search Bar */}
//       <Box display="flex" alignItems="center" gap={2} mb={2}>
//         <TextField
//           fullWidth
//           placeholder="Search With NAS Serial Number"
//           sx={{ "& .MuiInputBase-root": { height: 40 } }}
//           InputProps={{
//             endAdornment: (
//               <IconButton size="small">
//                 <SearchIcon />
//               </IconButton>
//             ),
//           }}
//         />
//         <Button
//           variant="outlined"
//           startIcon={isNasVisible ? <RemoveCircleOutlineIcon /> : <AddCircleOutlineIcon />}
//           sx={{ width: "150px" }}
//           onClick={toggleNasEntry}
//         >
//           {isNasVisible ? "Close NAS" : "Add NAS"}
//         </Button>
//       </Box>

//       {/* NAS Form Appearing Below */}
//       {isNasVisible && (
//         <Box sx={{ p: 2, borderRadius: 2, mb: 2 }}>
//           <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={2} mb={2}>
//             <Box>
//               <Typography>Select Branch *</Typography>
//               <TextField select fullWidth>
//                 <MenuItem value="branch1">Branch 1</MenuItem>
//                 <MenuItem value="branch2">Branch 2</MenuItem>
//               </TextField>
//             </Box>
//             <Box>
//               <Typography>NAS Type *</Typography>
//               <TextField select fullWidth>
//                 <MenuItem value="type1">Type 1</MenuItem>
//                 <MenuItem value="type2">Type 2</MenuItem>
//               </TextField>
//             </Box>
//             <Box>
//               <Typography>Name *</Typography>
//               <TextField fullWidth />
//             </Box>
//           </Box>

//           <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={2} mb={2}>
//             <Box>
//               <Typography>IP Address *</Typography>
//               <TextField fullWidth />
//             </Box>
//             <Box>
//               <Typography>Secret *</Typography>
//               <TextField fullWidth />
//             </Box>
//             <Box>
//               <Typography>Status *</Typography>
//               <TextField select fullWidth>
//                 <MenuItem value="active">Active</MenuItem>
//                 <MenuItem value="inactive">Inactive</MenuItem>
//               </TextField>
//             </Box>
//           </Box>

//           <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={2} mb={2}>
//             <Box>
//               <Typography>Accounting Interval *</Typography>
//               <TextField type="time" fullWidth />
//             </Box>
//             <Box>
//               <Typography>Serial Number *</Typography>
//               <TextField fullWidth />
//             </Box>
//           </Box>

//           <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gap={2} mb={2}>
//             <Box>
//               <Typography>H.No</Typography>
//               <TextField fullWidth />
//             </Box>
//             <Box>
//               <Typography>Street / Building *</Typography>
//               <TextField fullWidth />
//             </Box>
//             <Box>
//               <Typography>Landmark *</Typography>
//               <TextField fullWidth />
//             </Box>
//             <Box>
//               <Typography>City *</Typography>
//               <TextField fullWidth />
//             </Box>
//           </Box>

//           <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gap={2} mb={2}>
//             <Box>
//               <Typography>Pincode *</Typography>
//               <TextField fullWidth />
//             </Box>
//             <Box>
//               <Typography>District *</Typography>
//               <TextField fullWidth />
//             </Box>
//             <Box>
//               <Typography>State *</Typography>
//               <TextField fullWidth />
//             </Box>
//             <Box>
//               <Typography>Country *</Typography>
//               <TextField fullWidth />
//             </Box>
//           </Box>

//           <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={2}>
//             <Box>
//               <Typography>Latitude *</Typography>
//               <TextField fullWidth />
//             </Box>
//             <Box>
//               <Typography>Longitude *</Typography>
//               <TextField fullWidth />
//             </Box>
//           </Box>
//         </Box>
//       )}
//     </Container>
//   );
// };

// export default AddHardwareForm;


// import React, { useState } from "react";
// import { TextField, IconButton, Button, Box, Typography, Container, MenuItem } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
// import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
// import CloseIcon from "@mui/icons-material/Close";

// const AddHardwareForm = () => {
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
//     <Container maxWidth="lg" sx={{ mt: 4, p: 3, borderRadius: 2, boxShadow: 3, bgcolor: "background.paper" }}>
//       {/* Header with title and close icon */}
//       <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
//         <Typography variant="h6">Add New Hardware</Typography>
//         <IconButton>
//           <CloseIcon />
//         </IconButton>
//       </Box>
//       <hr /> <br />

//       {/* Hardware Selection - Search and Add Button */}
//       {hardwareTypes.map((hardware) => (
//         <Box key={hardware.key} display="flex" alignItems="center" gap={2} mb={2}>
//           <TextField
//             fullWidth
//             placeholder={hardware.placeholder}
//             sx={{ "& .MuiInputBase-root": { height: 40 } }}
//             InputProps={{
//               endAdornment: (
//                 <IconButton size="small">
//                   <SearchIcon />
//                 </IconButton>
//               ),
//             }}
//           />
//           <Button
//             variant="outlined"
//             startIcon={openForms[hardware.key] ? <RemoveCircleOutlineIcon /> : <AddCircleOutlineIcon />}
//             sx={{ width: "150px" }}
//             onClick={() => toggleForm(hardware.key)}
//           >
//             {openForms[hardware.key] ? `Close ${hardware.label}` : `Add ${hardware.label}`}
//           </Button>
//         </Box>
//       ))}

//       {/* Hardware Forms */}
//       {hardwareTypes.map(
//         (hardware) =>
//           openForms[hardware.key] && (
//             <Box key={hardware.key} sx={{ border: "1px solid #ddd", p: 2, borderRadius: 2, mb: 2 }}>
//               <Typography variant="subtitle1" mb={2}>
//                 {hardware.label} Details
//               </Typography>

//               <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={2} mb={2}>
//                 <Box>
//                   <Typography>Select Branch *</Typography>
//                   <TextField select fullWidth>
//                     <MenuItem value="branch1">Branch 1</MenuItem>
//                     <MenuItem value="branch2">Branch 2</MenuItem>
//                   </TextField>
//                 </Box>
//                 <Box>
//                   <Typography>Type *</Typography>
//                   <TextField select fullWidth>
//                     <MenuItem value="type1">Type 1</MenuItem>
//                     <MenuItem value="type2">Type 2</MenuItem>
//                   </TextField>
//                 </Box>
//                 <Box>
//                   <Typography>Name *</Typography>
//                   <TextField fullWidth />
//                 </Box>
//               </Box>

//               <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={2} mb={2}>
//                 <Box>
//                   <Typography>IP Address *</Typography>
//                   <TextField fullWidth />
//                 </Box>
//                 <Box>
//                   <Typography>Secret *</Typography>
//                   <TextField fullWidth />
//                 </Box>
//                 <Box>
//                   <Typography>Status *</Typography>
//                   <TextField select fullWidth>
//                     <MenuItem value="active">Active</MenuItem>
//                     <MenuItem value="inactive">Inactive</MenuItem>
//                   </TextField>
//                 </Box>
//               </Box>

//               <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={2} mb={2}>
//                 <Box>
//                   <Typography>Accounting Interval *</Typography>
//                   <TextField type="time" fullWidth />
//                 </Box>
//                 <Box>
//                   <Typography>Serial Number *</Typography>
//                   <TextField fullWidth />
//                 </Box>
//               </Box>

//               <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gap={2} mb={2}>
//                 <Box>
//                   <Typography>H.No</Typography>
//                   <TextField fullWidth />
//                 </Box>
//                 <Box>
//                   <Typography>Street / Building *</Typography>
//                   <TextField fullWidth />
//                 </Box>
//                 <Box>
//                   <Typography>Landmark *</Typography>
//                   <TextField fullWidth />
//                 </Box>
//                 <Box>
//                   <Typography>City *</Typography>
//                   <TextField fullWidth />
//                 </Box>
//               </Box>

//               <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gap={2} mb={2}>
//                 <Box>
//                   <Typography>Pincode *</Typography>
//                   <TextField fullWidth />
//                 </Box>
//                 <Box>
//                   <Typography>District *</Typography>
//                   <TextField fullWidth />
//                 </Box>
//                 <Box>
//                   <Typography>State *</Typography>
//                   <TextField fullWidth />
//                 </Box>
//                 <Box>
//                   <Typography>Country *</Typography>
//                   <TextField fullWidth />
//                 </Box>
//               </Box>

//               <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={2}>
//                 <Box>
//                   <Typography>Latitude *</Typography>
//                   <TextField fullWidth />
//                 </Box>
//                 <Box>
//                   <Typography>Longitude *</Typography>
//                   <TextField fullWidth />
//                 </Box>
//               </Box>
//             </Box>
//           )
//       )}
//     </Container>
//   );
// };

// export default AddHardwareForm;


import React, { useState } from "react";
import { TextField, IconButton, Button, Box, Typography, MenuItem, Container,Modal } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import CloseIcon from "@mui/icons-material/Close";

const AddHardwareForm = ({open,handleClose}) => {
  const hardwareTypes = [
    { key: "NAS", label: "NAS", placeholder: "Search With NAS Serial Number" },
    { key: "OLT", label: "OLT", placeholder: "Search With OLT Serial Number" },
    { key: "DP", label: "DP", placeholder: "Search With DP Serial Number" },
    { key: "CPE", label: "CPE", placeholder: "Search With CPE Serial Number" },
  ];
  const [openForms, setOpenForms] = useState({});
  const toggleForm = (key) => {
    setOpenForms((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <Modal open={open} onClose={handleClose}>
  <Container 
  maxWidth="md"
  sx={{ 
    mt: 4, 
    p: 0, 
    borderRadius: 2, 
    boxShadow: 24, 
    bgcolor: "background.paper",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "95%", sm: "80%", md: "70%", lg: "60%" },
    // width: 1000,
    // maxHeight: 700, // Allows scrolling for long content
    maxHeight: { xs: "60vh", sm: "70vh", md: "80vh", lg: "85vh" }, // Responsive height
  }}
>
  
      {/* Header */}
      <Box 
 sx={{
  position: "sticky",
  top: 0,
  zIndex: 10,
  p: 1,
  // bgcolor: "background.paper",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}}
>
        <Typography variant="h6">Add New Hardware</Typography>
        <IconButton  onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      <hr /> <br />

      {/* Hardware Selection - Search and Add Button */}
      <Box sx={{ maxHeight: 500,overflowY: "auto", flex: 1, p: 3, pt: 0 }}>
      {hardwareTypes.map((hardware) => (
        <Box key={hardware.key} mb={2}>
          <Box display="flex" alignItems="center" gap={2}>
            <TextField
              fullWidth
              placeholder={hardware.placeholder}
              sx={{ "& .MuiInputBase-root": { height: 40 } }}
              InputProps={{
                endAdornment: (
                  <IconButton size="small">
                    <SearchIcon />
                  </IconButton>
                ),
              }}
            />
            <Button
              variant="outlined"
              startIcon={openForms[hardware.key] ? <RemoveCircleOutlineIcon /> : <AddCircleOutlineIcon />}
              sx={{ width: "160px" }}
              onClick={() => toggleForm(hardware.key)}
            >
              {openForms[hardware.key] ? `Close ${hardware.label}` : `Add ${hardware.label}`}
            </Button>
          </Box>

          {/* Hardware Form (Appears below only for the selected hardware) */}
          {openForms[hardware.key] && (
            <Box sx={{ p: 2, borderRadius: 2, mt: 2 }}>
              <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={2} mb={2}>
                <Box>
                  <Typography>Select Branch *</Typography>
                  <TextField select fullWidth     sx={{ "& .MuiInputBase-root": { height: 36 } }} // Reduced height
                  >
                    <MenuItem value="Gangavaram">GANGAVARAM</MenuItem>
                    <MenuItem value="Kakinada">KAKINADA</MenuItem>
                    <MenuItem value="Mandapeta">MANDAPETA</MenuItem>
                    <MenuItem value="Rajamahendravaram">RAJAMAHENDRAVARAM</MenuItem>
                    <MenuItem value="Test">Test</MenuItem>
                    <MenuItem value="Vijayawada">VIJAYAWADA</MenuItem>
                    <MenuItem value="Visakhapatnam">VISAKHAPATNAM</MenuItem>
                  </TextField>
                </Box>
                <Box>
                  <Typography>{hardware.label} Type *</Typography>
                  <TextField select fullWidth sx={{ "& .MuiInputBase-root": { height: 36 } }}>
                    <MenuItem value="Alcatel">Alcatel</MenuItem>
                    <MenuItem value="Cisco">Cisco</MenuItem>
                    <MenuItem value="HB">HB</MenuItem>
                    <MenuItem value="Huawei">Huawei</MenuItem>
                    <MenuItem value="Juniper">Juniper</MenuItem>
                    <MenuItem value="Mikrotik">Mikrotik</MenuItem>
                    <MenuItem value="Vbng-soft">Vbng-soft</MenuItem>
                  </TextField>
                </Box>
                <Box>
                  <Typography>Name *</Typography>
                  <TextField fullWidth sx={{ "& .MuiInputBase-root": { height: 36 } }}/>
                </Box>
              </Box>
              <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={2} mb={2}>
                <Box>
                  <Typography>IP Address *</Typography>
                  <TextField fullWidth sx={{ "& .MuiInputBase-root": { height: 36 } }}/>
                </Box>
                <Box>
                  <Typography>Secret *</Typography>
                  <TextField fullWidth sx={{ "& .MuiInputBase-root": { height: 36 } }}/>
                </Box>
                <Box>
                  <Typography>Status *</Typography>
                  <TextField select fullWidth sx={{ "& .MuiInputBase-root": { height: 36 } }}>
                    <MenuItem value="active">Active</MenuItem>
                    <MenuItem value="inactive">Inactive</MenuItem>
                  </TextField>
                </Box>
              </Box>
              <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={2} mb={2}>
                <Box>
                  <Typography>Accounting Interval *</Typography>
                  <TextField type="time" fullWidth sx={{ "& .MuiInputBase-root": { height: 36 } }}/>
                </Box>
                <Box>
                  <Typography>Serial Number *</Typography>
                  <TextField fullWidth sx={{ "& .MuiInputBase-root": { height: 36 } }}/>
                </Box>
              </Box>
              <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gap={2} mb={2}>
                <Box>
                  <Typography>H.No</Typography>
                  <TextField fullWidth sx={{ "& .MuiInputBase-root": { height: 36 } }}/>
                </Box>
                <Box>
                  <Typography>Street / Building *</Typography>
                  <TextField fullWidth sx={{ "& .MuiInputBase-root": { height: 36 } }}/>
                </Box>
                <Box>
                  <Typography>Landmark *</Typography>
                  <TextField fullWidth sx={{ "& .MuiInputBase-root": { height: 36 } }}/>
                </Box>
                <Box>
                  <Typography>City *</Typography>
                  <TextField fullWidth sx={{ "& .MuiInputBase-root": { height: 36 } }}/>
                </Box>
              </Box>
              <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gap={2} mb={2}>
                <Box>
                  <Typography>Pincode *</Typography>
                  <TextField fullWidth sx={{ "& .MuiInputBase-root": { height: 36 } }}/>
                </Box>
                <Box>
                  <Typography>District *</Typography>
                  <TextField fullWidth sx={{ "& .MuiInputBase-root": { height: 36 } }}/>
                </Box>
                <Box>
                  <Typography>State *</Typography>
                  <TextField fullWidth sx={{ "& .MuiInputBase-root": { height: 36 } }}/>
                </Box>
                <Box>
                  <Typography>Country *</Typography>
                  <TextField fullWidth sx={{ "& .MuiInputBase-root": { height: 36 } }}/>
                </Box>
              </Box>
              <Box display="flex" gap={2}>
  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
    <Typography sx={{ mb: "2px" }}>Latitude *</Typography>
    <TextField sx={{ width: "250px", "& .MuiInputBase-root": { height: 36, margin: 0, padding: 0 } }} />
  </Box>
  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start", ml: "4px" }}>
    <Typography sx={{ mb: "2px" }}>Longitude *</Typography>
    <TextField sx={{ width: "250px", "& .MuiInputBase-root": { height: 36, margin: 0, padding: 0 } }} />
  </Box>
</Box>
              <Box display="flex" justifyContent="flex-start" gap={2} mt={3}>
  <Button variant="contained" color="primary">
    Create
  </Button>
  <Button variant="outlined" color="secondary">
    Reset
  </Button>
</Box>
            </Box>
          )}
        </Box>
      ))}
      </Box>
    </Container>
    </Modal>
  );
};
export default AddHardwareForm;


// import React, { useState } from "react";
// import { TextField, IconButton, Button, Box, Typography, MenuItem, Container } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
// import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
// import CloseIcon from "@mui/icons-material/Close";

// const AddHardwareForm = () => {
//   const hardwareTypes = [
//     { key: "NAS", label: "NAS", placeholder: "Search With NAS Serial Number" },
//     { key: "OLT", label: "OLT", placeholder: "Search With OLT Serial Number" },
//     { key: "DP", label: "DP", placeholder: "Search With DP Serial Number" },
//     { key: "CPE", label: "CPE", placeholder: "Search With CPE Serial Number" },
//   ];

//   const [openForms, setOpenForms] = useState({});

//   // Unique form fields per hardware type
//   const hardwareForms = {
//     NAS: (
//       <>
//         <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={2} mb={2}>
//           <Box>
//             <Typography>NAS IP Address *</Typography>
//             <TextField fullWidth sx={{ "& .MuiInputBase-root": { height: 36 } }} />
//           </Box>
//           <Box>
//             <Typography>NAS Location *</Typography>
//             <TextField fullWidth sx={{ "& .MuiInputBase-root": { height: 36 } }} />
//           </Box>
//         </Box>
//       </>
//     ),
//     OLT: (
//       <>
//         <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={2} mb={2}>
//           <Box>
//             <Typography>OLT Model *</Typography>
//             <TextField select fullWidth sx={{ "& .MuiInputBase-root": { height: 36 } }}>
//               <MenuItem value="Huawei">Huawei</MenuItem>
//               <MenuItem value="Cisco">Cisco</MenuItem>
//             </TextField>
//           </Box>
//           <Box>
//             <Typography>OLT Rack Position *</Typography>
//             <TextField fullWidth sx={{ "& .MuiInputBase-root": { height: 36 } }} />
//           </Box>
//         </Box>
//       </>
//     ),
//     DP: (
//       <>
//         <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={2} mb={2}>
//           <Box>
//             <Typography>DP Name *</Typography>
//             <TextField fullWidth sx={{ "& .MuiInputBase-root": { height: 36 } }} />
//           </Box>
//           <Box>
//             <Typography>DP Port Count *</Typography>
//             <TextField type="number" fullWidth sx={{ "& .MuiInputBase-root": { height: 36 } }} />
//           </Box>
//         </Box>
//       </>
//     ),
//     CPE: (
//       <>
//         <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={2} mb={2}>
//           <Box>
//             <Typography>CPE MAC Address *</Typography>
//             <TextField fullWidth sx={{ "& .MuiInputBase-root": { height: 36 } }} />
//           </Box>
//           <Box>
//             <Typography>CPE Firmware Version *</Typography>
//             <TextField fullWidth sx={{ "& .MuiInputBase-root": { height: 36 } }} />
//           </Box>
//         </Box>
//       </>
//     ),
//   };

//   const toggleForm = (key) => {
//     setOpenForms((prev) => ({ ...prev, [key]: !prev[key] }));
//   };

//   return (
//     <Container maxWidth="md" sx={{ mt: 4, p: 3, borderRadius: 2, boxShadow: 3, bgcolor: "background.paper" }}>
//       {/* Header */}
//       <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
//         <Typography variant="h6">Add New Hardware</Typography>
//         <IconButton>
//           <CloseIcon />
//         </IconButton>
//       </Box>
//       <hr /> <br />

//       {/* Hardware Selection - Search and Add Button */}
//       {hardwareTypes.map((hardware) => (
//         <Box key={hardware.key} mb={2}>
//           <Box display="flex" alignItems="center" gap={2}>
//             <TextField
//               fullWidth
//               placeholder={hardware.placeholder}
//               sx={{ "& .MuiInputBase-root": { height: 40 } }}
//               InputProps={{
//                 endAdornment: (
//                   <IconButton size="small">
//                     <SearchIcon />
//                   </IconButton>
//                 ),
//               }}
//             />
//             <Button
//               variant="outlined"
//               startIcon={openForms[hardware.key] ? <RemoveCircleOutlineIcon /> : <AddCircleOutlineIcon />}
//               sx={{ width: "160px" }}
//               onClick={() => toggleForm(hardware.key)}
//             >
//               {openForms[hardware.key] ? `Close ${hardware.label}` : `Add ${hardware.label}`}
//             </Button>
//           </Box>

//           {/* Hardware Form (Appears below only for the selected hardware) */}
//           {openForms[hardware.key] && (
//             <Box sx={{ p: 2, borderRadius: 2, mt: 2 }}>
//               <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={2} mb={2}>
//                 <Box>
//                   <Typography>Select Branch *</Typography>
//                   <TextField select fullWidth sx={{ "& .MuiInputBase-root": { height: 36 } }}>
//                     <MenuItem value="Gangavaram">GANGAVARAM</MenuItem>
//                     <MenuItem value="Kakinada">KAKINADA</MenuItem>
//                     <MenuItem value="Mandapeta">MANDAPETA</MenuItem>
//                   </TextField>
//                 </Box>
//                 <Box>
//                   <Typography>{hardware.label} Type *</Typography>
//                   <TextField select fullWidth sx={{ "& .MuiInputBase-root": { height: 36 } }}>
//                     <MenuItem value="Alcatel">Alcatel</MenuItem>
//                     <MenuItem value="Cisco">Cisco</MenuItem>
//                     <MenuItem value="Huawei">Huawei</MenuItem>
//                   </TextField>
//                 </Box>
//               </Box>

//               {/* Render Specific Fields */}
//               {hardwareForms[hardware.key]}

//               <Box display="flex" justifyContent="flex-start" gap={2} mt={3}>
//                 <Button variant="contained" color="primary">
//                   Create
//                 </Button>
//                 <Button variant="outlined" color="secondary">
//                   Reset
//                 </Button>
//               </Box>
//             </Box>
//           )}
//         </Box>
//       ))}
//     </Container>
//   );
// };

// export default AddHardwareForm;
