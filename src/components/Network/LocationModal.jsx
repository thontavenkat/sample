// import React from "react";
// import { Modal, Box, Typography, IconButton } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";

// const LocationModal = ({ open, handleClose, locationData }) => {
//   if (!locationData) return null; // Prevents rendering if no data

//   return (
//     <Modal open={open} onClose={handleClose}>
//       <Box
//         sx={{
//           position: "absolute",
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//           width: 800,
//           height:400,
//           bgcolor: "background.paper",
//           boxShadow: 24,
//           p: 4,
//           borderRadius: 2,
//         }}
//       >
//         <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
//           <Typography variant="h6" component="h2">
//             Location Details
//           </Typography>
//           <IconButton onClick={handleClose} size="small">
//             <CloseIcon />
//           </IconButton>
//         </Box>
//       </Box>
//     </Modal>
//   );
// };

// export default LocationModal;



import * as React from 'react';
import { Modal, Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Map, {NavigationControl, Marker} from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';


const LocationModal = ({ open, handleClose, locationData }) => {
  if (!locationData) return null; // Prevents rendering if no data

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", sm: "80%", md: "60%", lg: 900 }, // Responsive width
          height: { xs: 400, md: 450 }, // Auto height on small screens
          bgcolor: "background.paper",
          boxShadow: 24,
          p: { xs: 1, md: 4 }, // Responsive padding
          borderRadius: 2,
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
          <Typography variant="h6" component="h2">
            Location Details
          </Typography>
          <IconButton onClick={handleClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
        <hr />
        {/* Additional content can be added here */}
        <Map mapLib={maplibregl} 
        initialViewState={{
          longitude:  78.3794,
          latitude: 17.4532,
          zoom: 14
        }}
        style={{width: "100%", height: " calc(80vh - 160px)"}}
        mapStyle="https://api.maptiler.com/maps/streets/style.json?key=y694Rqw1SfcpYen1M06N"
      >
         <Marker longitude={78.3794} latitude={17.4532} color='#00000'/>
        <NavigationControl position="top-left" />
      </Map>
      </Box>
    </Modal>
  );
};

export default LocationModal;
