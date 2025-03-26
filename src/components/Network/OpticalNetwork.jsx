import React, { useState, useEffect } from "react";
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
  useMediaQuery,
  useTheme
} from "@mui/material";
import { Visibility, Place, Delete, Add, Public } from "@mui/icons-material";
import exporticon from "./../../assests/images/Network/Export.png";
import refreshicon from "./../../assests/images/Network/refresh.png";
import AddHardwareForm from "./Hardware_Model.jsx";
import "./../../assests/css/optical_network.css"; // Import the CSS file

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
  const [openModal, setOpenModal] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [filterSerialNo, setFilterSerialNo] = useState("");
  const [hardwareCategory, setHardwareCategory] = useState("");
  const [hardwareType, setHardwareType] = useState("");
  const [branch, setBranch] = useState("");
  const isSmallScreen = useMediaQuery("(max-width:600px)");
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
  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }

    return () => {
      document.body.style.overflow = "auto"; // Ensure cleanup on unmount
    };
  }, [openModal]);

  return (
    <Box className="nas-container">
      <Grid container alignItems="center" justifyContent="space-between" className="header-section">
        <Grid item xs={12} sm="auto">
          <Typography variant="h4" className="header-title">Optical Network</Typography>
        </Grid>
        <Grid 
      item 
      xs={12} 
      sm="auto" 
      className={`header-button-group ${isSmallScreen ? "column-layout" : "row-layout"}`}
    >
      {/* Icon buttons should always stay in a row */}
      <div className="header-icon-buttons">
        <IconButton className="export-icon-button">
          <img src={exporticon} alt="Export" />
        </IconButton>

        <IconButton className="refresh-icon-button">
          <img src={refreshicon} alt="Refresh" />
        </IconButton>

        <IconButton className="icon-button primary">
          <Delete />
        </IconButton>
      </div>

      {/* These buttons should move to a new line on small screens */}
      <div className="Map-add-action-buttons">
        <Button 
          variant="contained" 
          className="map-view-btn" 
          disabled 
          startIcon={<Public />}
        >
          Map View
        </Button>

        <Button 
          variant="contained" 
          className="add-button" 
          startIcon={<Add />} 
          onClick={() => setOpenModal(true)}
        >
          ADD
        </Button>
      </div>
    </Grid>
      </Grid>

      <Grid container spacing={2} className="dropdown-filter-section">
        {[
          { label: "Hardware Category", value: hardwareCategory, setter: setHardwareCategory, options: ["Internet", "Cable"] },
          { label: "Hardware Type", value: hardwareType, setter: setHardwareType, options: ["NAS", "OLT", "DP", "CPE"] },
          { label: "Branch", value: branch, setter: setBranch, options: ["All", "Gangavaram", "Kakinada", "Mandapeta", "Rajamahendravaram", "Test", "Vijayawada", "Visakhapatnam"] },
        ].map(({ label, value, setter, options }, index) => (
          <Grid item key={index} className="filter-item">
            <Typography variant="body2" className="dropdown-filter-label">{label}</Typography>
            <Select 
  value={value} 
  onChange={(e) => setter(e.target.value)} 
  size="small" 
  className="dropdown-filter-select"
  MenuProps={{
    disableScrollLock: true, // Prevents page shift when dropdown opens
    PaperProps: {
      sx: {
        maxHeight: 200, // Ensures scrolling
        overflowY: "auto",
      },
    },
  }}
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
           <Grid item className="serial-no-container">
  <Typography variant="body2" className="serial-no-label">Serial No.</Typography>
  <TextField 
    variant="outlined" 
    size="small" 
    onChange={(e) => setFilterSerialNo(e.target.value)}
    className="serial-no-input"
  />
</Grid>

      </Grid>

      <TableContainer className="table-container">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><Checkbox /></TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Serial Number</TableCell>
              <TableCell>Actions</TableCell>
              <TableCell>View</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Branch</TableCell>
              <TableCell>NAS Type</TableCell>
              <TableCell>IP Address</TableCell>
              <TableCell>Secret</TableCell>
              <TableCell>Accounting Time</TableCell>
              <TableCell>Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow key={row.id} hover>
                <TableCell><Checkbox checked={selected.includes(row.id)} onChange={() => handleSelect(row.id)} /></TableCell>
                <TableCell  className="table-row-id">{row.id}</TableCell>
                <TableCell>{row.serialNo}</TableCell>
                <TableCell><IconButton  className="Visibility-icon-button"><Visibility /></IconButton></TableCell>
                <TableCell><IconButton  className="place-icon-button"><Place /></IconButton></TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>
  <Box className="status-cell">
    <Box
      className={`status-indicator ${row.status === "Active" ? "status-active" : "status-inactive"}`}
    />
    {row.status}
  </Box>
</TableCell>                <TableCell>{row.branch}</TableCell>
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

    <TablePagination rowsPerPageOptions={[5, 10, 25]} component="div" count={filteredData.length} rowsPerPage={rowsPerPage} page={page} onPageChange={handleChangePage} onRowsPerPageChange={handleChangeRowsPerPage} />
      <AddHardwareForm open={openModal} handleClose={() => setOpenModal(false)} />

    </Box>
  );
};

export default NasTable;
