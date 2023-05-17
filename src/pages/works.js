import BusinessWorkCards from "@/components/BusinessWorkCards";
import HabitWorkCards from "@/components/HabitWorkCards";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography variant="subtitle1" color="textPrimary" align="center">
            {children}
          </Typography>
        </Box>
      )}
    </div>
  );
}

function Works() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "80%",
        margin: "auto",
        my: "10vh",
      }}
    >
      <Typography variant="h2" color="textPrimary" align="center">
        Works
      </Typography>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          justifyContent: "center",
          marginTop: 2,
        }}
      >
        <Tabs value={value} onChange={handleChange}>
          <Tab label="趣味" />
          <Tab label="案件" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <HabitWorkCards />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <BusinessWorkCards />
      </TabPanel>
    </Box>
  );
}
export default Works;
