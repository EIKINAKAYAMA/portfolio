import Contact from "@/components/Contact";
import Layout from "@/components/Layout";
import Profile from "@/components/Profile";
import Skills from "@/components/Skills";
import Top from "@/components/Top";
import Works from "@/components/Works";
import { Divider } from "@mui/material";
import { Element } from "react-scroll";

export default function IndexPage() {
  return (
    <Layout title="Eiki Nakayama">
      <Element name="top">
        <Top />
        <Divider color="#00FF00" sx={{ my: "100px" }} />
      </Element>
      <Element name="works">
        <Works />
        <Divider color="#00FF00" sx={{ my: "100px" }} />
      </Element>
      <Element name="skills">
        <Skills />
        <Divider color="#00FF00" sx={{ my: "100px" }} />
      </Element>
      <Element name="profile">
        <Profile />
        <Divider color="#00FF00" sx={{ my: "100px" }} />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </Layout>
  );
}
