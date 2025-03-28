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



import React from "react";
import { Modal, Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

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
          width: { xs: "90%", sm: "80%", md: "60%", lg: 800 }, // Responsive width
          height: { xs: 400, md: 400 }, // Auto height on small screens
          bgcolor: "background.paper",
          boxShadow: 24,
          p: { xs: 1, md: 4 }, // Responsive padding
          borderRadius: 2,
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6" component="h2">
            Location Details
          </Typography>
          <IconButton onClick={handleClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
        {/* Additional content can be added here */}
      </Box>
    </Modal>
  );
};

export default LocationModal;
