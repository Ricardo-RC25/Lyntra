import Card from "@mui/material/Card";
import MDBox from "components/MDBox";

function Projects() {
  return (
    <Card>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
        <MDBox height="500px" width="100%">
          <iframe
            title="Mapa"
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-99.18%2C19.39%2C-99.08%2C19.48&layer=mapnik&marker=19.4326%2C-99.1332"
            style={{ borderRadius: "10px" }}
          ></iframe>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default Projects;
