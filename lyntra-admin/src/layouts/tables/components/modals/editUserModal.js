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

// Custom
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Context
import { useMaterialUIController } from "context";

function EditUserModal({ open, onClose, user }) {
  const [controller] = useMaterialUIController();
  const { sidenavColor, darkMode } = controller;

  const [imagePreview, setImagePreview] = useState(user?.image || "");
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: "",
    phone: "",
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setImagePreview(reader.result);
    reader.readAsDataURL(file);
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
            Editar Usuario
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
            <Grid item xs={12} display="flex" flexDirection="column" alignItems="center">
              <Avatar src={imagePreview} sx={{ width: 80, height: 80, mb: 1 }} />
              <Button variant="outlined" component="label" size="small">
                Subir Imagen
                <input type="file" accept="image/*" hidden onChange={handleImageChange} />
              </Button>
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoFocus
                fullWidth
                label="Nombre"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Teléfono"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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

EditUserModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  user: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
  }),
};

export default EditUserModal;
