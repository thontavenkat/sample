
// import React, { useState,useRef } from "react";
// import {
//     Box,
//   Button,
//   Select,
//   MenuItem,
//   TextField,
//   FormControl,
//   Grid,
//   Typography,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   TablePagination,
//   Checkbox,
//   IconButton,
// } from "@mui/material";
// import { Visibility, Place, Refresh, Delete, Add, Public  } from "@mui/icons-material";
// import exporticon from "./../../assests/images/Network/Export.png";
// import refreshicon from "./../../assests/images/Network/refresh.png";

// const data = [
//     { id: 1, serialNo: "12345", name: "NAS-1", status: "Active", branch: "Kakinada", nasType: "Mikrotik", ipAddress: "192.168.1.1", secret: "abc123", accTime: "24h", address: "123 Main St, New York, NY 10001" },
//     { id: 2, serialNo: "67890", name: "NAS-2", status: "Inactive", branch: "Vijayawada", nasType: "Cisco", ipAddress: "192.168.1.2", secret: "xyz456", accTime: "12h", address: "456 Elm St, Los Angeles, CA 90012" },
//     { id: 3, serialNo: "54321", name: "NAS-3", status: "Active", branch: "Visakhapatnam", nasType: "Juniper", ipAddress: "192.168.1.3", secret: "def789", accTime: "36h", address: "789 Maple Ave, Chicago, IL 60611" },
//     { id: 4, serialNo: "98765", name: "NAS-4", status: "Inactive", branch: "Mandapeta", nasType: "Ubiquiti", ipAddress: "192.168.1.4", secret: "ghi012", accTime: "48h", address: "101 Pine St, Houston, TX 77002" },
//     { id: 5, serialNo: "11223", name: "NAS-5", status: "Active", branch: "Rajamahendravaram", nasType: "Huawei", ipAddress: "192.168.1.5", secret: "jkl345", accTime: "72h", address: "202 Oak Dr, Miami, FL 33130" },
//   ];
  

// const NasTable = () => {
//   const [selected, setSelected] = useState([]);
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);
//   const [filterSerialNo, setFilterSerialNo] = useState("");
//     const [hardwareCategory, setHardwareCategory] = useState("");
//     const [hardwareType, setHardwareType] = useState("");
//     const [branch, setBranch] = useState("");
//     const [scrollOffset, setScrollOffset] = useState(0);
//     const tableContainerRef = useRef(null);

//   // Handle row selection
//   const handleSelect = (id) => {
//     setSelected((prevSelected) =>
//       prevSelected.includes(id)
//         ? prevSelected.filter((item) => item !== id)
//         : [...prevSelected, id]
//     );
//   };

//   // Handle page change
//   const handleChangePage = (_, newPage) => {
//     setPage(newPage);
//   };

//   // Handle rows per page change
//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   // Filter data based on Serial No.
//   const filteredData = data.filter((row) => {
//     return (
//       (filterSerialNo ? row.serialNo.toLowerCase().includes(filterSerialNo.toLowerCase()) : true) &&
// (branch && branch !== "All"
//       ? row.branch.toLowerCase().includes(branch.toLowerCase())
//       : true)
//         );
//   });
//   const handleScroll = () => {
//     if (tableContainerRef.current) {
//       const scrollLeft = tableContainerRef.current.scrollLeft;
//       const offset = Math.min(scrollLeft / 10, 3); // Move up to 3px
//       setScrollOffset(offset);
//     }
//   };

//   return (
//     <Box sx={{ p: 3, maxWidth: "95%", mx: "auto" }}>
//     {/* Header Section - Title & Buttons */}
//     <Grid container alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
//     <Grid item>
//     <Typography variant="h5" sx={{ fontWeight: "bold" }}>
//       Optical Network
//     </Typography>
//   </Grid>
//   <Grid item>
//   <IconButton>
//       <img src={exporticon} alt="Export" width="20" height="20" />
//     </IconButton>
//     <IconButton>
//       <img src={refreshicon} alt="Refresh" width="20" height="20" />
//     </IconButton>
//     <IconButton color="primary">
//       <Delete /> {/* Delete Icon */}
//     </IconButton>
//     <Button variant="contained" disabled startIcon={<Public />} sx={{ ml: 1 }}>
//       Map View {/* Map View Button */}
//     </Button>
//     <Button variant="contained" color="primary" startIcon={<Add />} sx={{ ml: 1 }}>
//       New {/* New Button */}
//     </Button>
//   </Grid>
//     </Grid>

//     {/* Filter Section with Labels Above Fields */}
//     {/* <Grid container spacing={0} sx={{ mb: 2 }}> */}
//     <FormControl fullWidth sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
//   {/* Hardware Category */}
//   <Box sx={{ width: "200px" }}>
//     <Typography variant="body2" sx={{ fontWeight: "bold", mb: 0.3 }}>Hardware Category</Typography>
//     <Select
//       value={hardwareCategory}
//       onChange={(e) => setHardwareCategory(e.target.value)}
//       sx={{
//         height: "36px",
//         fontSize: "14px",
//         minWidth: "180px",
//         "& .MuiSelect-select": { padding: "4px 10px" }
//       }}
//     >
//       <MenuItem value="Internet">Internet</MenuItem>
//       <MenuItem value="Cable">Cable TV</MenuItem>
//     </Select>
//   </Box>

//   {/* Hardware Type */}
//   <Box sx={{ width: "200px" }}>
//     <Typography variant="body2" sx={{ fontWeight: "bold", mb: 0.3 }}>Hardware Type</Typography>
//     <Select
//       value={hardwareType}
//       onChange={(e) => setHardwareType(e.target.value)}
//       sx={{
//         height: "36px",
//         fontSize: "14px",
//         minWidth: "180px",
//         "& .MuiSelect-select": { padding: "4px 10px" }
//       }}
//     >
//       <MenuItem value="NAS">NAS</MenuItem>
//       <MenuItem value="OLT">OLT</MenuItem>
//       <MenuItem value="DP">DP</MenuItem>
//       <MenuItem value="CPE">CPE</MenuItem>
//     </Select>
//   </Box>

//   {/* Branch */}
//   <Box sx={{ width: "200px" }}>
//     <Typography variant="body2" sx={{ fontWeight: "bold", mb: 0.3 }}>Branch</Typography>
//     <Select
//       value={branch}
//       onChange={(e) => setBranch(e.target.value)}
//       sx={{
//         height: "36px",
//         fontSize: "14px",
//         minWidth: "180px",
//         "& .MuiSelect-select": { padding: "4px 10px" }
//       }}
//     >
//       <MenuItem value="All">All</MenuItem>
//       <MenuItem value="Gangavaram">GANGAVARAM</MenuItem>
//       <MenuItem value="Kakinada">KAKINADA</MenuItem>
//       <MenuItem value="Mandapeta">MANDAPETA</MenuItem>
//       <MenuItem value="Rajamahendravaram">RAJAMAHENDRAVARAM</MenuItem>
//       <MenuItem value="Test">TEST</MenuItem>
//       <MenuItem value="Vijayawada">VIJAYAWADA</MenuItem>
//       <MenuItem value="Visakhapatnam">VISAKHAPATNAM</MenuItem>
//     </Select>
//   </Box>

//   {/* Serial No */}
//   <Box sx={{ width: "150px" }}>
//     <Typography variant="body2" sx={{ fontWeight: "bold", mb: 0.3 }}>Serial No.</Typography>
//     <TextField
//       variant="outlined"
//       size="small"
//       onChange={(e) => setFilterSerialNo(e.target.value)}
//       sx={{
//         "& .MuiOutlinedInput-root": {
//           height: "36px",
//           fontSize: "14px",
//           minWidth: "120px",
//           "& input": { padding: "4px 8px" }
//         }
//       }}
//     />
//   </Box>
// </FormControl>



//     {/* </Grid> */}
    
// <br></br>
//       {/* Serial No. Filter */}
    
//       <TableContainer
//   ref={tableContainerRef}
//   sx={{ overflowX: "auto", maxWidth: "100%", paddingRight: "20px" }}
//   onScroll={handleScroll}
// >
//   <Table sx={{ minWidth: 1200 }}>
//     <TableHead>
//       <TableRow>
//         <TableCell sx={{ background: "#fff", fontWeight: "bold",  }}>
//           <Checkbox />
//         </TableCell>
//         <TableCell sx={{ background: "#fff", fontWeight: "bold",  }}>
//           ID
//         </TableCell>
//         <TableCell sx={{ background: "#fff", fontWeight: "bold",  }}>
//           Serial Number
//         </TableCell>
//         <TableCell sx={{ background: "#fff", fontWeight: "bold", }}>
//           Actions
//         </TableCell>
//         <TableCell sx={{ background: "#fff", fontWeight: "bold",  }}>
//           View
//         </TableCell>
//         {/* Other columns remain scrollable */}
//         <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
//         <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
//         <TableCell sx={{ fontWeight: "bold" }}>Branch</TableCell>
//         <TableCell sx={{ fontWeight: "bold" }}>NAS Type</TableCell>
//         <TableCell sx={{ fontWeight: "bold" }}>IP Address</TableCell>
//         <TableCell sx={{ fontWeight: "bold" }}>Secret</TableCell>
//         <TableCell sx={{ fontWeight: "bold" }}>Accounting Time</TableCell>
//         <TableCell sx={{ fontWeight: "bold", whiteSpace: "nowrap" }}>
//           Address
//         </TableCell>
//       </TableRow>
//     </TableHead>

//     <TableBody>
//       {filteredData
//         .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//         .map((row) => (
//           <TableRow
//             key={row.id}
//             hover
//             sx={{
//               "&:hover": {
//                 backgroundColor: "#f5f5f5", // Ensures a single hover effect
//                 transition: "background 0.3s ease",
//               },
//             }}
//           >
//             <TableCell>
//               <Checkbox
//                 checked={selected.includes(row.id)}
//                 onChange={() => handleSelect(row.id)}
//               />
//             </TableCell>
//             <TableCell sx={{color:" #1890ff" }}>
//               {row.id}
//             </TableCell>
//             <TableCell>
//               {row.serialNo}
//             </TableCell>
//             <TableCell>
//               <IconButton sx={{color:"#000080"}}>
//                 <Visibility />
//               </IconButton>
//             </TableCell>
//             <TableCell >
//               <IconButton sx={{color:"#000080"}}>
//                 <Place />
//               </IconButton>
//             </TableCell>
//             <TableCell>{row.name}</TableCell>
//             <TableCell>
//   <Box
//     sx={{
//       display: "flex",
//       alignItems: "center",
//       gap: "8px", // Space between bubble and text
//       height: "100%", // Ensure it takes full cell height
//     }}
//   >
//     <Box
//       sx={{
//         width: "10px",
//         height: "10px",
//         borderRadius: "50%",
//         backgroundColor: row.status === "Active" ? " #1890ff" : "#dc3545",
//         flexShrink: 0, // Prevents shrinking
//       }}
//     />
//     {row.status}
//   </Box>
// </TableCell>

//             <TableCell>{row.branch}</TableCell>
//             <TableCell>{row.nasType}</TableCell>
//             <TableCell>{row.ipAddress}</TableCell>
//             <TableCell>{row.secret}</TableCell>
//             <TableCell>{row.accTime}</TableCell>
//             <TableCell sx={{ whiteSpace: "nowrap" }}>{row.address}</TableCell>
//           </TableRow>
//         ))}
//     </TableBody>
//   </Table>
// </TableContainer>



//       {/* Pagination */}
//       <TablePagination
//         rowsPerPageOptions={[5, 10, 25]}
//         component="div"
//         count={filteredData.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//     </Box>
//   );
// };

// export default NasTable;


import React, { useState, useRef } from "react";
import {
  Box,
  Button,
  Select,
  MenuItem,
  TextField,
  FormControl,
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Checkbox,
  IconButton,
  useMediaQuery, useTheme
} from "@mui/material";
import { Visibility, Place, Delete, Add, Public } from "@mui/icons-material";
import exporticon from "./../../assests/images/Network/Export.png";
import refreshicon from "./../../assests/images/Network/refresh.png";
import AddHardwareForm from "./New.jsx";


const data = [
  { id: 1, serialNo: "12345", name: "NAS-1", status: "Active", branch: "Kakinada", nasType: "Mikrotik", ipAddress: "192.168.1.1", secret: "abc123", accTime: "24h", address: "123 Main St, New York, NY 10001" },
  { id: 2, serialNo: "67890", name: "NAS-2", status: "Inactive", branch: "Vijayawada", nasType: "Cisco", ipAddress: "192.168.1.2", secret: "xyz456", accTime: "12h", address: "456 Elm St, Los Angeles, CA 90012" },
  { id: 3, serialNo: "54321", name: "NAS-3", status: "Active", branch: "Visakhapatnam", nasType: "Juniper", ipAddress: "192.168.1.3", secret: "def789", accTime: "36h", address: "789 Maple Ave, Chicago, IL 60611" },
  { id: 4, serialNo: "98765", name: "NAS-4", status: "Inactive", branch: "Mandapeta", nasType: "Ubiquiti", ipAddress: "192.168.1.4", secret: "ghi012", accTime: "48h", address: "101 Pine St, Houston, TX 77002" },
  { id: 5, serialNo: "11223", name: "NAS-5", status: "Active", branch: "Rajamahendravaram", nasType: "Huawei", ipAddress: "192.168.1.5", secret: "jkl345", accTime: "72h", address: "202 Oak Dr, Miami, FL 33130" },
];

const NasTable = () => {
  const [selected, setSelected] = useState([]);
  const theme = useTheme();
  const [openModal, setOpenModal] = useState(false); // State for modal
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [filterSerialNo, setFilterSerialNo] = useState("");
  const [hardwareCategory, setHardwareCategory] = useState("");
  const [hardwareType, setHardwareType] = useState("");
  const [branch, setBranch] = useState("");
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleSelect = (id) => {
    setSelected((prevSelected) =>
      prevSelected.includes(id) ? prevSelected.filter((item) => item !== id) : [...prevSelected, id]
    );
  };

  const handleChangePage = (_, newPage) => setPage(newPage);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredData = data.filter((row) =>
    (filterSerialNo ? row.serialNo.toLowerCase().includes(filterSerialNo.toLowerCase()) : true) &&
    (branch && branch !== "All" ? row.branch.toLowerCase().includes(branch.toLowerCase()) : true)
  );

  return (
    <Box sx={{ p: 2, width: "100%", maxWidth: "95%", mx: "auto" }}>
      {/* Header Section */}
      <Grid container alignItems="center" justifyContent="space-between" sx={{ mb: 2, flexWrap: "wrap" }}>
        <Grid item xs={12} sm="auto">
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: isMobile ? 1 : 0 }}>
            Optical Network
          </Typography>
        </Grid>
        <Grid item xs={12} sm="auto" sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          <IconButton>
            <img src={exporticon} alt="Export" width="20" height="20" />
          </IconButton>
          <IconButton>
            <img src={refreshicon} alt="Refresh" width="20" height="20" />
          </IconButton>
          <IconButton color="primary">
            <Delete />
          </IconButton>
          <Button variant="contained" disabled startIcon={<Public />}>
            Map View
          </Button>
          <Button variant="contained" color="primary" startIcon={<Add />} onClick={() => setOpenModal(true)}>
            ADD
          </Button>
        </Grid>
      </Grid>

      {/* Filter Section */}
      <Grid 
  container 
  spacing={2} 
  sx={{ mb: 2, flexWrap: "wrap", flexDirection: isSmallScreen ? "column" : "row" }}
>
  {[
    { label: "Hardware Category", value: hardwareCategory, setter: setHardwareCategory, options: ["Internet", "Cable"] },
    { label: "Hardware Type", value: hardwareType, setter: setHardwareType, options: ["NAS", "OLT", "DP", "CPE"] },
    { label: "Branch", value: branch, setter: setBranch, options: ["All", "Gangavaram", "Kakinada", "Mandapeta", "Rajamahendravaram", "Test", "Vijayawada", "Visakhapatnam"] },
  ].map(({ label, value, setter, options }, index) => (
    <Grid item key={index} sx={{ width: isSmallScreen ? "100%" : "200px" }}>
      <Typography variant="body2" sx={{ fontWeight: "bold", mb: 0.3 }}>{label}</Typography>
      <Select 
        value={value} 
        onChange={(e) => setter(e.target.value)} 
        size="small" 
        sx={{ width: "100%", height: "40px", fontSize: "14px" }}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </Grid>
  ))}

  {/* Serial No. Filter */}
  <Grid item sx={{ width: isSmallScreen ? "100%" : "180px" }}>
    <Typography variant="body2" sx={{ fontWeight: "bold", mb: 0.3 }}>Serial No.</Typography>
    <TextField 
      variant="outlined" 
      size="small" 
      onChange={(e) => setFilterSerialNo(e.target.value)}
      sx={{
        width: "100%",
        fontSize: "14px",
        "& .MuiOutlinedInput-root": { padding: "0px 8px" }
      }}
    />
  </Grid>
</Grid>

      {/* Table Container */}
      <TableContainer sx={{ overflowX: "auto" }}>
        <Table sx={{ minWidth: isMobile ? "100%" : 1200 }}>
          <TableHead>
            <TableRow>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>ID</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Serial Number</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Actions</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>View</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Branch</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>NAS Type</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>IP Address</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Secret</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Accounting Time</TableCell>
              <TableCell sx={{ fontWeight: "bold", whiteSpace: "nowrap" }}>Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow key={row.id} 
              hover
              sx={{
                "&:hover": {
                  backgroundColor: "#f5f5f5", // Ensures a single hover effect
                  transition: "background 0.3s ease",
                },
              }}
  >
                <TableCell><Checkbox checked={selected.includes(row.id)} onChange={() => handleSelect(row.id)} /></TableCell>
                <TableCell sx={{color:" #1890ff" }}>{row.id}</TableCell>
                <TableCell>{row.serialNo}</TableCell>
                <TableCell><IconButton sx={{color:"#000080"}}><Visibility /></IconButton></TableCell>
                <TableCell><IconButton sx={{color:"#000080"}}><Place /></IconButton></TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell > <Box
    sx={{
      display: "flex",
      alignItems: "center",
      gap: "8px", // Space between bubble and text
      height: "100%", // Ensure it takes full cell height
    }}
  >
    <Box
      sx={{
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        backgroundColor: row.status === "Active" ? " #1890ff" : "#dc3545",
        flexShrink: 0, // Prevents shrinking
      }}
    />
    {row.status}
  </Box></TableCell>
                <TableCell>{row.branch}</TableCell>
                <TableCell>{row.nasType}</TableCell>
                <TableCell>{row.ipAddress}</TableCell>
                <TableCell>{row.secret}</TableCell>
                <TableCell>{row.accTime}</TableCell>
                <TableCell>{row.address}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <TablePagination rowsPerPageOptions={[5, 10, 25]} component="div" count={filteredData.length} rowsPerPage={rowsPerPage} page={page} onPageChange={handleChangePage} onRowsPerPageChange={handleChangeRowsPerPage} />
      

      <AddHardwareForm open={openModal} handleClose={() => setOpenModal(false)} />
    </Box>
  );
};

export default NasTable;
