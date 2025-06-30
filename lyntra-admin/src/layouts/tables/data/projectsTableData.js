/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */

// Material Dashboard 2 React components
import Icon from "@mui/material/Icon";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDProgress from "components/MDProgress";

export default function data() {
  const Evento = ({ iconName, nombre, color }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <Icon sx={{ color, mr: 1 }}>{iconName}</Icon>
      <MDTypography variant="button" fontWeight="medium">
        {nombre}
      </MDTypography>
    </MDBox>
  );

  const Tiempo = ({ minutos }) => (
    <MDTypography variant="caption" color="text" fontWeight="medium">
      {minutos} min
    </MDTypography>
  );

  const Porcentaje = ({ color, valor }) => (
    <MDBox display="flex" alignItems="center">
      <MDTypography variant="caption" color="text" fontWeight="medium" mr={1}>
        {valor}%
      </MDTypography>
      <MDBox width="8rem">
        <MDProgress variant="gradient" color={color} value={valor} />
      </MDBox>
    </MDBox>
  );

  return {
    columns: [
      { Header: "evento", accessor: "evento", width: "30%", align: "left" },
      { Header: "número de alertas", accessor: "alertas", align: "center" },
      { Header: "% atendidas", accessor: "atendidas", align: "center" },
      { Header: "tiempo promedio", accessor: "tiempo", align: "center" },
      { Header: "última alerta", accessor: "ultima", align: "center" },
    ],
    rows: [
      {
        evento: <Evento iconName="person" nombre="Caída Detectada" color="primary" />,
        alertas: "8",
        atendidas: <Porcentaje color="primary" valor={75} />,
        tiempo: <Tiempo minutos={3.5} />,
        ultima: "28/06/2025 14:23",
      },
      {
        evento: <Evento iconName="trending_up" nombre="Velocidad Anormal" color="success" />,
        alertas: "6",
        atendidas: <Porcentaje color="success" valor={50} />,
        tiempo: <Tiempo minutos={4.2} />,
        ultima: "27/06/2025 19:45",
      },
      {
        evento: <Evento iconName="access_time" nombre="Inactividad Prolongada" color="warning" />,
        alertas: "11",
        atendidas: <Porcentaje color="warning" valor={91} />,
        tiempo: <Tiempo minutos={2.1} />,
        ultima: "28/06/2025 12:10",
      },
      {
        evento: <Evento iconName="gps_off" nombre="Pérdida de GPS" color="info" />,
        alertas: "3",
        atendidas: <Porcentaje color="info" valor={33} />,
        tiempo: <Tiempo minutos={5.0} />,
        ultima: "26/06/2025 08:50",
      },
      {
        evento: <Evento iconName="sos" nombre="Alerta SOS" color="error" />,
        alertas: "5",
        atendidas: <Porcentaje color="error" valor={60} />,
        tiempo: <Tiempo minutos={1.7} />,
        ultima: "28/06/2025 15:01",
      },
      {
        evento: <Evento iconName="battery_alert" nombre="Batería Crítica" color="secondary" />,
        alertas: "1",
        atendidas: <Porcentaje color="secondary" valor={100} />,
        tiempo: <Tiempo minutos={6.3} />,
        ultima: "28/06/2025 15:40",
      },
    ],
  };
}
