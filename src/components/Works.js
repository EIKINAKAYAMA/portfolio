import BusinessCards from "@/components/works/BusinessCards";
import HabitCards from "@/components/works/HabitCards";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";

const TabPanel = (props) => {
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
          <Typography variant="subtitle1" color="#00FF00" align="center">
            {children}
          </Typography>
        </Box>
      )}
    </div>
  );
};

export default function Works() {
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
      <Typography variant="h2" color="#00FF00" align="center">
        Works
      </Typography>
      <Typography sx={{ my: 3 }} variant="body2" color="#00FF00" align="center">
        公開可能範囲のみ
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
          <Tab style={{ color: "#00FF00" }} label="趣味" />
          <Tab style={{ color: "#00FF00" }} label="案件" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <HabitCards />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <BusinessCards />
      </TabPanel>
    </Box>
  );
}
