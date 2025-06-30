import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAlert from "components/MDAlert";
import MDButton from "components/MDButton";
import MDSnackbar from "components/MDSnackbar";

// Layout
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

function Notifications() {
  const [sosSB, setSosSB] = useState(false);
  const [caidaSB, setCaidaSB] = useState(false);
  const [velocidadSB, setVelocidadSB] = useState(false);
  const [inactividadSB, setInactividadSB] = useState(false);
  const [gpsSB, setGpsSB] = useState(false);
  const [bateriaSB, setBateriaSB] = useState(false);

  const alertContent = (text) => (
    <MDTypography variant="body2" color="white">
      {text}
    </MDTypography>
  );

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={6} mb={3}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} lg={8}>
            <Card>
              <MDBox p={2}>
                <MDTypography variant="h5">Alertas del Sistema</MDTypography>
              </MDBox>
              <MDBox pt={2} px={2}>
                <MDAlert color="error" dismissible>
                  {alertContent("Juan Pérez ha activado el botón de emergencia.")}
                </MDAlert>
                <MDAlert color="primary" dismissible>
                  {alertContent("Ana Torres sufrió una caída. Nivel crítico de impacto.")}
                </MDAlert>
                <MDAlert color="success" dismissible>
                  {alertContent("Carlos Díaz se mueve a 35 km/h. Revisión recomendada.")}
                </MDAlert>
                <MDAlert color="warning" dismissible>
                  {alertContent("Luis Mendoza lleva 30 minutos sin movimiento.")}
                </MDAlert>
                <MDAlert color="info" dismissible>
                  {alertContent("María López ha perdido señal satelital durante más de 3 ciclos.")}
                </MDAlert>
                <MDAlert color="secondary" dismissible>
                  {alertContent("Dispositivo de Pedro Ramírez con menos del 15% de batería.")}
                </MDAlert>
              </MDBox>
            </Card>
          </Grid>

          <Grid item xs={12} lg={8}>
            <Card>
              <MDBox p={2} lineHeight={0}>
                <MDTypography variant="h5">Notificaciones Emergentes</MDTypography>
                <MDTypography variant="button" color="text" fontWeight="regular">
                  Presiona un botón para probar el sistema de notificaciones tipo Snackbar.
                </MDTypography>
              </MDBox>
              <MDBox p={2}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} md={4}>
                    <MDButton
                      variant="gradient"
                      color="error"
                      fullWidth
                      onClick={() => setSosSB(true)}
                    >
                      Alerta SOS
                    </MDButton>
                    <MDSnackbar
                      color="error"
                      icon="sos"
                      title="Alerta SOS"
                      content="Juan Pérez ha activado el botón de emergencia."
                      dateTime="Hace 2 min"
                      open={sosSB}
                      onClose={() => setSosSB(false)}
                      close={() => setSosSB(false)}
                      bgWhite
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <MDButton
                      variant="gradient"
                      color="primary"
                      fullWidth
                      onClick={() => setCaidaSB(true)}
                    >
                      Caída Detectada
                    </MDButton>
                    <MDSnackbar
                      color="primary"
                      icon="person"
                      title="Caída Detectada"
                      content="Ana Torres sufrió una caída. Nivel crítico de impacto."
                      dateTime="Hace 3 min"
                      open={caidaSB}
                      onClose={() => setCaidaSB(false)}
                      close={() => setCaidaSB(false)}
                      bgWhite
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <MDButton
                      variant="gradient"
                      color="success"
                      fullWidth
                      onClick={() => setVelocidadSB(true)}
                    >
                      Velocidad Anormal
                    </MDButton>
                    <MDSnackbar
                      color="success"
                      icon="trending_up"
                      title="Velocidad Alta"
                      content="Carlos Díaz se mueve a 35 km/h. Revisión recomendada."
                      dateTime="Hace 1 min"
                      open={velocidadSB}
                      onClose={() => setVelocidadSB(false)}
                      close={() => setVelocidadSB(false)}
                      bgWhite
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <MDButton
                      variant="gradient"
                      color="warning"
                      fullWidth
                      onClick={() => setInactividadSB(true)}
                    >
                      Inactividad Prolongada
                    </MDButton>
                    <MDSnackbar
                      color="warning"
                      icon="access_time"
                      title="Inactividad"
                      content="Luis Mendoza lleva 30 minutos sin movimiento."
                      dateTime="Hace 10 min"
                      open={inactividadSB}
                      onClose={() => setInactividadSB(false)}
                      close={() => setInactividadSB(false)}
                      bgWhite
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <MDButton
                      variant="gradient"
                      color="info"
                      fullWidth
                      onClick={() => setGpsSB(true)}
                    >
                      Pérdida de GPS
                    </MDButton>
                    <MDSnackbar
                      color="info"
                      icon="gps_off"
                      title="Sin señal GPS"
                      content="María López ha perdido señal satelital durante más de 3 ciclos."
                      dateTime="Hace 5 min"
                      open={gpsSB}
                      onClose={() => setGpsSB(false)}
                      close={() => setGpsSB(false)}
                      bgWhite
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <MDButton
                      variant="gradient"
                      color="secondary"
                      fullWidth
                      onClick={() => setBateriaSB(true)}
                    >
                      Batería Baja
                    </MDButton>
                    <MDSnackbar
                      color="secondary"
                      icon="battery_alert"
                      title="Batería Crítica"
                      content="Dispositivo de Pedro Ramírez con menos del 15% de batería."
                      dateTime="Hace 15 min"
                      open={bateriaSB}
                      onClose={() => setBateriaSB(false)}
                      close={() => setBateriaSB(false)}
                      bgWhite
                    />
                  </Grid>
                </Grid>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Notifications;
