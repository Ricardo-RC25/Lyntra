// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Timeline component
import TimelineItem from "examples/Timeline/TimelineItem";

function OrdersOverview() {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={3} px={3}>
        <MDTypography variant="h6" fontWeight="medium">
          Alertas por tipo
        </MDTypography>
        <MDBox mt={0} mb={2}>
          <MDTypography variant="button" color="text" fontWeight="regular">
            <MDTypography display="inline" variant="body2" verticalAlign="middle">
              <Icon sx={{ color: ({ palette: { info } }) => info.main }}>warning</Icon>
            </MDTypography>
            &nbsp;
            <MDTypography variant="button" color="text" fontWeight="medium">
              Activadas este mes
            </MDTypography>
          </MDTypography>
        </MDBox>
      </MDBox>

      <MDBox p={2}>
        <TimelineItem
          color="error"
          icon="sos"
          title="SOS activadas (12)"
          dateTime="Total acumulado"
        />
        <TimelineItem
          color="warning"
          icon="access_time"
          title="Inactividad detectada (7)"
          dateTime="Total acumulado"
        />
        <TimelineItem
          color="info"
          icon="gps_off"
          title="Pérdida de GPS (5)"
          dateTime="Total acumulado"
        />
        <TimelineItem
          color="success"
          icon="trending_up"
          title="Velocidad anormal (3)"
          dateTime="Total acumulado"
        />
        <TimelineItem
          color="primary"
          icon="person"
          title="Caídas detectadas (2)"
          dateTime="Total acumulado"
        />
        <TimelineItem
          color="secondary"
          icon="battery_alert"
          title="Batería crítica (1)"
          dateTime="Total acumulado"
          lastItem
        />
      </MDBox>
    </Card>
  );
}

export default OrdersOverview;
