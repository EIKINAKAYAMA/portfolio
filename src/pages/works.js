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
import Image from "next/image";

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
  return (
    <section className="works section" id="works">
      <div className="inner">
        <h2 className="title">Works</h2>
        <div className="works-list">
          <a className="works-item" href="works-template.html">
            <p className="works-img">
              <Image
                src="/img/works-sample-thumb.jpg"
                alt=""
                width={400}
                height={300}
              />
            </p>
            <p className="works-name">作品名が入る</p>
            <p className="works-info">Design / Coding(Responsive)</p>
          </a>
          <a className="works-item" href="works-template.html">
            <p className="works-img">
              <img src="img/works-dummy-thumb.jpg" alt="" />
            </p>
            <p className="works-name">作品名が入る</p>
            <p className="works-info">
              Design / Coding(Responsive) / WordPress
            </p>
          </a>
          <a className="works-item" href="works-template.html">
            <p className="works-img">
              <img src="img/works-dummy-thumb.jpg" alt="" />
            </p>
            <p className="works-name">作品名が入る</p>
            <p className="works-info">Design</p>
          </a>
          <a className="works-item" href="works-template.html">
            <p className="works-img">
              <img src="img/works-dummy-thumb.jpg" alt="" />
            </p>
            <p className="works-name">作品名が入る</p>
            <p className="works-info">Banner Design</p>
          </a>
          <a className="works-item" href="works-template.html">
            <p className="works-img">
              <img src="img/works-dummy-thumb.jpg" alt="" />
            </p>
            <p className="works-name">作品名が入る</p>
            <p className="works-info">Banner Design</p>
          </a>
        </div>
      </div>
    </section>
  );
}
export default Works;
