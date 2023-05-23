import { Box, Button, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
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
          <Typography variant="subtitle1" color="#00FF00" align="center">
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
    <Box
      sx={{
        width: "80%",
        margin: "auto",
        my: "10vh",
      }}
    >
      <Typography variant="h2" color="#00FF00" align="center">
        Contact
      </Typography>
      <Typography sx={{ my: 5 }} variant="body2" color="#00FF00" align="center">
        ご質問やご相談がございましたら、お気軽にご連絡ください。
        <br />
        ビジネスのご依頼や取り扱いに関するお問い合わせも、このフォームから承っております。
      </Typography>
      <Grid container spacing={4} minHeight="60vh" alignItems="center">
        <Grid xs={12} md={12} sx={{ padding: 0 }}>
          <Typography variant="body1" color="#00FF00" align="center">
            070-3514-7684
            <br />
            eiki111ixa@icloud.com
          </Typography>
        </Grid>
        <Grid xs={12} md={12} sx={{ padding: 0 }}>
          <form onSubmit={handleSubmit}>
            <TextField
              InputLabelProps={{
                style: {
                  color: "#00FF00",
                },
              }}
              InputProps={{
                inputProps: {
                  style: {
                    color: "#00FF00",
                  },
                },
              }}
              required
              fullWidth
              margin="normal"
              label="件名"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <TextField
              InputLabelProps={{
                style: {
                  color: "#00FF00", // ラベルのカラーを指定
                },
              }}
              InputProps={{
                inputProps: {
                  style: {
                    color: "#00FF00", // カラーを指定
                  },
                },
              }}
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
              <Button
                variant="contained"
                type="submit"
                style={{
                  border: "2px solid #00FF00",
                  backgroundColor: "black",
                  color: "#00FF00",
                }}
              >
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
