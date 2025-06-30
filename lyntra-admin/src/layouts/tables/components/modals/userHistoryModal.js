import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

import { useMaterialUIController } from "context";

export default function UserHistoryModal({ open, onClose, user }) {
  const [controller] = useMaterialUIController();
  const { sidenavColor, darkMode } = controller;

  const userName = user?.name || "Usuario";

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
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
              Historial de {userName}
            </MDTypography>
          </DialogTitle>
          <IconButton onClick={onClose} sx={{ color: darkMode ? "#fff" : "inherit" }}>
            <CloseIcon />
          </IconButton>
        </MDBox>

        <DialogContent sx={{ backgroundColor: darkMode ? "#1a2035" : "#fff" }}>
          <MDTypography variant="body2">
            Aquí se mostrarán los eventos, alertas o rutas asociadas al usuario seleccionado.
          </MDTypography>
        </DialogContent>

        <MDBox mt={3} display="flex" justifyContent="flex-end">
          <MDButton onClick={onClose} color={sidenavColor}>
            Cerrar
          </MDButton>
        </MDBox>
      </MDBox>
    </Dialog>
  );
}

UserHistoryModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
  }),
};
