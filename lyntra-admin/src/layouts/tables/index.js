// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Layout y componentes
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";

// Hooks y contexto
import { useState } from "react";
import { useMaterialUIController } from "context";

// Modales
import EditUserModal from "layouts/tables/components/modals/editUserModal";
import ConfirmDeleteModal from "layouts/tables/components/modals/confirmDeleteModal";
import UserHistoryModal from "layouts/tables/components/modals/userHistoryModal";

function Tables() {
  const { columns, rows } = authorsTableData();
  const { columns: pColumns, rows: pRows } = projectsTableData();
  const [controller] = useMaterialUIController();
  const { sidenavColor, darkMode } = controller;

  const [selectedUser, setSelectedUser] = useState(null);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [historyOpen, setHistoryOpen] = useState(false);

  const openModal = (action, user) => {
    setSelectedUser(user);
    if (action === "edit") setEditOpen(true);
    if (action === "delete") setDeleteOpen(true);
    if (action === "history") setHistoryOpen(true);
  };

  const patchedRows = rows.map((row) => {
    const name =
      row.usuario?.props?.children?.[1]?.props?.children?.[0]?.props?.children || "Usuario";

    return {
      ...row,
      accion: (
        <MDBox display="flex" justifyContent="center" gap={1}>
          <MDButton
            variant="text"
            color="info"
            size="small"
            onClick={() => openModal("edit", { name })}
          >
            <Icon>edit</Icon>
          </MDButton>
          <MDButton
            variant="text"
            color="error"
            size="small"
            onClick={() => openModal("delete", { name })}
          >
            <Icon>delete</Icon>
          </MDButton>
          <MDButton
            variant="text"
            color="secondary"
            size="small"
            onClick={() => openModal("history", { name })}
          >
            <Icon>history</Icon>
          </MDButton>
        </MDBox>
      ),
    };
  });

  return (
    <DashboardLayout>
      <DashboardNavbar />

      <EditUserModal open={editOpen} onClose={() => setEditOpen(false)} user={selectedUser} />

      <ConfirmDeleteModal
        open={deleteOpen}
        onClose={() => setDeleteOpen(false)}
        user={selectedUser}
      />
      <UserHistoryModal
        open={historyOpen}
        onClose={() => setHistoryOpen(false)}
        user={selectedUser}
      />

      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor={sidenavColor}
                borderRadius="lg"
                coloredShadow={sidenavColor}
              >
                <MDTypography variant="h6" color={darkMode ? "white" : "dark"}>
                  Usuarios Registrados
                </MDTypography>
              </MDBox>
              <MDBox px={2} mt={2} display="flex" justifyContent="flex-end">
                <MDButton variant="gradient" color="success" size="small">
                  <Icon sx={{ mr: 1 }}>person_add</Icon>
                  Agregar Usuario
                </MDButton>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows: patchedRows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor={sidenavColor}
                borderRadius="lg"
                coloredShadow={sidenavColor}
              >
                <MDTypography variant="h6" color={darkMode ? "white" : "dark"}>
                  Eventos del Sistema
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns: pColumns, rows: pRows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>

      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
