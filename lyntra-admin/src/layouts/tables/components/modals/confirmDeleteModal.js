import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

import { useMaterialUIController } from "context";

export default function ConfirmDeleteModal({ open, onClose, user }) {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  const userName = user?.name || "este usuario";

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <MDBox
        p={3}
        sx={{
          backgroundColor: darkMode ? "#1a2035" : "#fff",
          color: darkMode ? "#fff" : "#000",
        }}
      >
        <MDBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
          <DialogTitle sx={{ p: 0 }}>
            <MDTypography variant="h6" fontWeight="medium" color={darkMode ? "white" : "dark"}>
              Confirmar Eliminación
            </MDTypography>
          </DialogTitle>
          <IconButton onClick={onClose} sx={{ color: darkMode ? "#fff" : "inherit" }}>
            <CloseIcon />
          </IconButton>
        </MDBox>

        <DialogContent sx={{ backgroundColor: darkMode ? "#1a2035" : "#fff" }}>
          <MDTypography variant="body2">
            ¿Estás seguro de que deseas eliminar a <strong>{userName}</strong>? Esta acción no se
            puede deshacer.
          </MDTypography>
        </DialogContent>

        <DialogActions sx={{ justifyContent: "flex-end" }}>
          <MDButton variant="text" onClick={onClose}>
            Cancelar
          </MDButton>
          <MDButton color="error" onClick={onClose}>
            Eliminar
          </MDButton>
        </DialogActions>
      </MDBox>
    </Dialog>
  );
}

ConfirmDeleteModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
  }),
};
