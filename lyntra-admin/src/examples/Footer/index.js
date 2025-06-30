// @mui material components
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Base styles
import typography from "assets/theme/base/typography";

function Footer() {
  const { size } = typography;

  return (
    <MDBox width="100%" display="flex" justifyContent="center" alignItems="center" py={2} px={1.5}>
      <MDTypography
        variant="button"
        fontWeight="regular"
        color="text"
        fontSize={size.sm}
        display="flex"
        alignItems="center"
      >
        &copy; {new Date().getFullYear()}, desarrollado con
        <MDBox fontSize={size.md} color="error" mx={0.5}>
          <Icon fontSize="inherit">favorite</Icon>
        </MDBox>
        por el equipo de Lyntra
      </MDTypography>
    </MDBox>
  );
}

export default Footer;
