import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Button,
  CssBaseline,
  Grid,
  Hidden,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-scroll";
import ScrollButton from "./ScrollButton";

const Layout = ({ children, title }) => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {/* <MenuItem>
        <ScrollButton to="top" title="top" />
      </MenuItem> */}
      <MenuItem>
        <ScrollButton to="works" title="works" />
      </MenuItem>
      <MenuItem>
        <ScrollButton to="skills" title="skills" />
      </MenuItem>
      <MenuItem>
        <ScrollButton to="profile" title="profile" />
      </MenuItem>
      <MenuItem>
        <ScrollButton to="contact" title="contact" />
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <CssBaseline />
      <Box
        component="header"
        position="fixed"
        top={0}
        left={0}
        right={0}
        bgcolor="transparent"
        boxShadow="none"
        zIndex={1}
      >
        <Toolbar variant="dense" style={{ backgroundColor: "transparent" }}>
          <Grid container alignItems="center" sx={{ marginTop: 1 }}>
            <Grid item xs={6} sm={2}>
              <Button variant="outlined" sx={{ marginTop: 1 }}>
                <Link
                  to="top"
                  smooth={true}
                  offset={-50}
                  duration={500}
                  delay={500}
                >
                  <Typography variant="h6" color="#00FF00">
                    {title}
                  </Typography>
                </Link>
              </Button>
            </Grid>
            <Grid item xs={6} sm={10} container justifyContent="flex-end">
              <Hidden smUp>
                <IconButton
                  aria-label="show more"
                  aria-controls="primary-search-account-menu-mobile"
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  style={{ color: "#00FF00" }}
                >
                  <MenuIcon />
                </IconButton>
              </Hidden>
              <Hidden smDown>
                <ScrollButton to="works" title="Works" />
                <ScrollButton to="skills" title="Skills" />
                <ScrollButton to="profile" title="Profile" />
                <ScrollButton to="contact" title="Contact" />
              </Hidden>
            </Grid>
          </Grid>
        </Toolbar>
      </Box>
      {renderMobileMenu}
      <Box>{children}</Box>
    </>
  );
};

export default Layout;
