// @mui material components
import Grid from "@mui/material/Grid";

// Custom components
import MDBox from "components/MDBox";

// Layout elements
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Dashboard widgets
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";

// Chart data
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

function Dashboard() {
  const { sales, tasks } = reportsLineChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <MDBox
          sx={(theme) => ({
            overflowX: "auto",
            backgroundColor: theme.palette.background.default,
            paddingBottom: 1,
            paddingLeft: 2,
            paddingRight: 2,
            borderRadius: theme.shape.borderRadius,
            "&::-webkit-scrollbar": {
              height: "6px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: theme.palette.grey[500],
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "transparent",
            },
          })}
        >
          <Grid
            container
            spacing={3}
            sx={{
              flexWrap: "nowrap",
              width: "max-content",
            }}
          >
            <Grid item sx={{ minWidth: 280, marginTop: 2 }}>
              <ComplexStatisticsCard
                color="error"
                icon="sos"
                title="Alerta SOS"
                count="Juan Pérez"
                percentage={{
                  color: "error",
                  amount: "Hace 2 min",
                  label: "SOS activado",
                }}
              />
            </Grid>

            <Grid item sx={{ minWidth: 280, marginTop: 2 }}>
              <ComplexStatisticsCard
                color="warning"
                icon="access_time"
                title="Inactividad prolongada"
                count="Luis Mendoza"
                percentage={{
                  color: "warning",
                  amount: "Hace 10 min",
                  label: "Sin movimiento detectado",
                }}
              />
            </Grid>

            <Grid item sx={{ minWidth: 280, marginTop: 2 }}>
              <ComplexStatisticsCard
                color="info"
                icon="gps_off"
                title="Pérdida de GPS"
                count="María López"
                percentage={{
                  color: "info",
                  amount: "Hace 5 min",
                  label: "Sin señal satelital",
                }}
              />
            </Grid>

            <Grid item sx={{ minWidth: 280, marginTop: 2 }}>
              <ComplexStatisticsCard
                color="success"
                icon="trending_up"
                title="Velocidad anormal"
                count="Carlos Díaz"
                percentage={{
                  color: "success",
                  amount: "Hace 1 min",
                  label: "Detectado 35km/h",
                }}
              />
            </Grid>

            <Grid item sx={{ minWidth: 280, marginTop: 2 }}>
              <ComplexStatisticsCard
                color="primary"
                icon="person"
                title="Caídas detectadas"
                count="Juan Pérez"
                percentage={{
                  color: "primary",
                  amount: "Hace 2 min",
                  label: "1 alerta reciente",
                }}
              />
            </Grid>

            <Grid item sx={{ minWidth: 280, marginTop: 2 }}>
              <ComplexStatisticsCard
                color="secondary"
                icon="battery_alert"
                title="Batería Crítica"
                count="Pedro Ramírez"
                percentage={{
                  color: "secondary",
                  amount: "Hace 15 min",
                  label: "Menos del 15% de batería",
                }}
              />
            </Grid>
          </Grid>
        </MDBox>

        {/* Sección inferior */}
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <Projects />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <OrdersOverview />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
