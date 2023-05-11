import { useState } from "react";
import {
  Tabs,
  Tab,
  TextField,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import { IoLogoInstagram, FaGithub } from "../lib/icons";

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

function ContactForm() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const recipient = "eiki111ixa@icloud.com";
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${message}`;
  };

  return (
    <Box sx={{ width: "80%", margin: "auto", marginTop: "10vh" }}>
      <Typography variant="h2" color="textPrimary" align="center">
        Contact
      </Typography>
      <Typography
        variant="body1"
        color="textPrimary"
        align="center"
        sx={{ marginTop: 2, marginBottom: 2 }}
      >
        ご質問やご相談がございましたら、お気軽にご連絡ください。
        <br />
        ビジネスのご依頼や取り扱いに関するお問い合わせも、このフォームから承っております。
      </Typography>
      <Grid container spacing={4} minHeight="60vh" alignItems="center">
        <Grid xs={12} md={12} sx={{ padding: 0 }}>
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
              <Tab label="個人宛" />
              <Tab label="会社宛" />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            TEL: 070-3514-7684
            <br />
            MAIL: eiki111ixa@icloud.com
          </TabPanel>
          <TabPanel value={value} index={1}>
            TEL: 070-3514-7684
            <br />
            MAIL: navitex20230509@gmail.com
          </TabPanel>
        </Grid>
        <Grid xs={12} md={12} sx={{ padding: 0 }}>
          <form onSubmit={handleSubmit}>
            <TextField
              required
              fullWidth
              margin="normal"
              label="件名"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <TextField
              required
              fullWidth
              margin="normal"
              label="内容"
              multiline
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Box
              sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}
            >
              <Button variant="contained" type="submit">
                送信
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ContactForm;
