import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";

import MDBox from "components/MDBox";
import Sidenav from "examples/Sidenav";
import Configurator from "examples/Configurator";

import theme from "assets/theme";
import themeDark from "assets/theme-dark";

import routes from "routes";
import { useMaterialUIController, setMiniSidenav, setOpenConfigurator } from "context";

import brandWhite from "assets/images/logo-ct.png";
import brandDark from "assets/images/logo-ct-dark.png";

// Layouts de autenticación
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import ResetPassword from "layouts/authentication/reset-password/cover";
import Profile from "layouts/profile";

export default function App() {
  const [controller, dispatch] = useMaterialUIController();
  const {
    miniSidenav,
    layout,
    openConfigurator,
    sidenavColor,
    transparentSidenav,
    whiteSidenav,
    darkMode,
  } = controller;

  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const { pathname } = useLocation();
  const isAuthenticated = localStorage.getItem("auth") === "true";

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) return getRoutes(route.collapse);
      if (route.route)
        return (
          <Route
            exact
            path={route.route}
            element={isAuthenticated ? route.component : <Navigate to="/authentication/sign-in" />}
            key={route.key}
          />
        );
      return null;
    });

  const configsButton = (
    <MDBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="3.25rem"
      height="3.25rem"
      bgColor="white"
      shadow="sm"
      borderRadius="50%"
      position="fixed"
      right="2rem"
      bottom="2rem"
      zIndex={99}
      color="dark"
      sx={{ cursor: "pointer" }}
      onClick={() => setOpenConfigurator(dispatch, !openConfigurator)}
    >
      <Icon fontSize="small" color="inherit">
        settings
      </Icon>
    </MDBox>
  );

  return (
    <ThemeProvider theme={darkMode ? themeDark : theme}>
      <CssBaseline />
      {isAuthenticated && layout === "dashboard" && (
        <>
          <Sidenav
            color={sidenavColor}
            brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
            brandName="Lyntra"
            routes={routes}
            onMouseEnter={() => {
              if (miniSidenav && !onMouseEnter) {
                setMiniSidenav(dispatch, false);
                setOnMouseEnter(true);
              }
            }}
            onMouseLeave={() => {
              if (onMouseEnter) {
                setMiniSidenav(dispatch, true);
                setOnMouseEnter(false);
              }
            }}
          />
          <Configurator />
          {configsButton}
        </>
      )}

      <Routes>
        {/* Autenticación */}
        <Route
          path="/authentication/sign-in"
          element={isAuthenticated ? <Navigate to="/dashboard" /> : <SignIn />}
        />
        <Route
          path="/authentication/sign-up"
          element={isAuthenticated ? <Navigate to="/dashboard" /> : <SignUp />}
        />
        <Route
          path="/authentication/reset-password"
          element={isAuthenticated ? <Navigate to="/dashboard" /> : <ResetPassword />}
        />

        {/* Rutas protegidas */}
        {getRoutes(routes)}

        {/* Perfil */}
        <Route
          path="/profile"
          element={isAuthenticated ? <Profile /> : <Navigate to="/authentication/sign-in" />}
        />

        {/* Fallback */}
        <Route
          path="*"
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" />
            ) : (
              <Navigate to="/authentication/sign-in" />
            )
          }
        />
      </Routes>
    </ThemeProvider>
  );
}
