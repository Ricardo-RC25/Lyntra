import PropTypes from "prop-types";
import { useState } from "react";

// MUI
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

// Custom
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Context
import { useMaterialUIController } from "context";

function EditProfileModal({ open, onClose }) {
  const [controller] = useMaterialUIController();
  const { sidenavColor, darkMode } = controller;

  const [image, setImage] = useState("https://i.pravatar.cc/150?img=3");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <MDBox
        p={3}
        sx={{
          backgroundColor: darkMode ? "#1a2035" : "#fff",
          color: darkMode ? "#fff" : "#000",
        }}
      >
        <DialogTitle
          sx={{
            p: 0,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <MDTypography
            component="span"
            variant="h6"
            fontWeight="medium"
            color={darkMode ? "white" : "dark"}
          >
            Editar Perfil
          </MDTypography>
          <IconButton onClick={onClose} sx={{ color: darkMode ? "#fff" : "inherit" }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent
          sx={{
            backgroundColor: darkMode ? "#1a2035" : "#fff",
            maxHeight: "60vh",
            overflowY: "auto",
            "&::-webkit-scrollbar": { width: "8px" },
            "&::-webkit-scrollbar-track": { background: "transparent" },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: darkMode ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.2)",
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: darkMode ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.4)",
            },
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
              <MDBox display="flex" flexDirection="column" alignItems="center">
                <Avatar src={image} alt="profile" sx={{ width: 80, height: 80, mb: 1 }} />
                <Button
                  variant="outlined"
                  component="label"
                  startIcon={<PhotoCamera />}
                  size="small"
                  sx={{
                    color: sidenavColor,
                    borderColor: sidenavColor,
                    textTransform: "none",
                    fontWeight: "medium",
                  }}
                >
                  Cambiar foto
                  <input type="file" accept="image/*" hidden onChange={handleImageChange} />
                </Button>
              </MDBox>
            </Grid>

            <Grid item xs={12}>
              <TextField fullWidth label="Nombre completo" defaultValue="Alec M. Thompson" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Email" defaultValue="alecthompson@mail.com" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Teléfono" defaultValue="(44) 123 1234 123" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Ubicación" defaultValue="USA" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Descripción"
                multiline
                rows={3}
                defaultValue="Hola, soy Alec Thompson. Si no puedes decidir, la respuesta es no..."
              />
            </Grid>
          </Grid>

          <MDBox mt={3} display="flex" justifyContent="flex-end">
            <MDButton onClick={onClose} color={sidenavColor}>
              Guardar Cambios
            </MDButton>
          </MDBox>
        </DialogContent>
      </MDBox>
    </Dialog>
  );
}

EditProfileModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default EditProfileModal;
