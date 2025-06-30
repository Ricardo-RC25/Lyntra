/* eslint-disable react/prop-types */
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function authorsTableData() {
  const Usuario = ({ image, name, id }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{id}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Alerta = ({ tipo, detalle }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {tipo}
      </MDTypography>
      <MDTypography variant="caption">{detalle}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "usuario", accessor: "usuario", width: "40%", align: "left" },
      { Header: "tipo de alerta", accessor: "alerta", align: "left" },
      { Header: "estado", accessor: "estado", align: "center" },
      { Header: "fecha y hora", accessor: "fecha", align: "center" },
      { Header: "acción", accessor: "accion", align: "center" },
    ],
    rows: [
      {
        usuario: <Usuario image={team2} name="Juan Pérez" id="ID: 0001" />,
        alerta: <Alerta tipo="Caída detectada" detalle="Nivel crítico de impacto" />,
        estado: <MDBadge badgeContent="SOS activado" color="error" variant="gradient" size="sm" />,
        fecha: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            28/06/2025 14:23
          </MDTypography>
        ),
        accion: null,
      },
      {
        usuario: <Usuario image={team3} name="Luis García" id="ID: 0025" />,
        alerta: <Alerta tipo="Inactividad prolongada" detalle="Sin movimiento 30 min" />,
        estado: <MDBadge badgeContent="Pendiente" color="warning" variant="gradient" size="sm" />,
        fecha: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            28/06/2025 12:10
          </MDTypography>
        ),
        accion: null,
      },
      {
        usuario: <Usuario image={team4} name="Ana Torres" id="ID: 0033" />,
        alerta: <Alerta tipo="Alerta de velocidad" detalle="Mov. no autorizado" />,
        estado: <MDBadge badgeContent="Atendido" color="success" variant="gradient" size="sm" />,
        fecha: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            27/06/2025 19:45
          </MDTypography>
        ),
        accion: null,
      },
    ],
  };
}
