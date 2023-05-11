import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import Image from "next/image";
import NET from "vanta/dist/vanta.clouds.min";
import { Button, Grid, Stack } from "@mui/material";

export default function Home() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          skyColor: 0x0,
          cloudColor: 0xa0c7f2,
          cloudShadowColor: 0x0,
          sunColor: 0x0,
          sunGlareColor: 0x0,
          sunlightColor: 0x0,
          speed: 0.7,
          THREE: THREE,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    // <>
    //   <Header />
    //   {/* <main ref={myRef} className="content"> */}
    //   <main className="content">
    //     {/* main-visual */}
    //     <div className="main-visual">
    //       {/* <div className="main-visual-img"></div> */}
    //     </div>

    //     <div className="top">
    //       <div className="inner">
    //         <p className="top-title">Hanako Yamada</p>
    //         <p className="top-text">
    //           30代前半のWebデザイナーです。デザイン、コーディング、ライティング、SEOなどWeb領域全般に対応できるのが私の強みです。サイト制作はお客様の夢を叶える仕事だと思っています。夢を持っている方と一緒にお仕事ができたら嬉しいです。
    //         </p>
    //       </div>
    //     </div>

    //     {/* works */}
    //     {/* <section className="works section" id="works">
    //       <div className="inner">
    //         <h2 className="title">Works</h2>
    //         <div className="works-list">
    //           <a className="works-item" href="works-template.html">
    //             <p className="works-img">
    //               <Image
    //                 src="/img/works-sample-thumb.jpg"
    //                 alt=""
    //                 width={400}
    //                 height={300}
    //               />
    //             </p>
    //             <p className="works-name">作品名が入る</p>
    //             <p className="works-info">Design / Coding(Responsive)</p>
    //           </a>
    //           <a className="works-item" href="works-template.html">
    //             <p className="works-img">
    //               <img src="img/works-dummy-thumb.jpg" alt="" />
    //             </p>
    //             <p className="works-name">作品名が入る</p>
    //             <p className="works-info">
    //               Design / Coding(Responsive) / WordPress
    //             </p>
    //           </a>
    //           <a className="works-item" href="works-template.html">
    //             <p className="works-img">
    //               <img src="img/works-dummy-thumb.jpg" alt="" />
    //             </p>
    //             <p className="works-name">作品名が入る</p>
    //             <p className="works-info">Design</p>
    //           </a>
    //           <a className="works-item" href="works-template.html">
    //             <p className="works-img">
    //               <img src="img/works-dummy-thumb.jpg" alt="" />
    //             </p>
    //             <p className="works-name">作品名が入る</p>
    //             <p className="works-info">Banner Design</p>
    //           </a>
    //           <a className="works-item" href="works-template.html">
    //             <p className="works-img">
    //               <img src="img/works-dummy-thumb.jpg" alt="" />
    //             </p>
    //             <p className="works-name">作品名が入る</p>
    //             <p className="works-info">Banner Design</p>
    //           </a>
    //         </div>
    //       </div>
    //     </section> */}

    //     {/* skill */}
    //     {/* <section className="skill section" id="skill">
    //       <div className="inner">
    //         <h2 className="title">Skill</h2>
    //         <div className="skill-list">
    //           <div className="skill-item">
    //             <p className="skill-img">
    //               <img src="img/icon_skill.png" alt="" />
    //             </p>
    //             <div className="skill-body">
    //               <h3 className="skill-name">HTML5/CSS3</h3>
    //               <p className="skill-text">
    //                 テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります。
    //               </p>
    //             </div>
    //           </div>
    //           <div className="skill-item">
    //             <p className="skill-img">
    //               <img src="img/icon_skill.png" alt="" />
    //             </p>
    //             <div className="skill-body">
    //               <h3 className="skill-name">WordPress</h3>
    //               <p className="skill-text">
    //                 テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります。
    //               </p>
    //             </div>
    //           </div>
    //           <div className="skill-item">
    //             <p className="skill-img">
    //               <img src="img/icon_skill.png" alt="" />
    //             </p>
    //             <div className="skill-body">
    //               <h3 className="skill-name">JavaScript</h3>
    //               <p className="skill-text">
    //                 テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります。
    //               </p>
    //             </div>
    //           </div>
    //           <div className="skill-item">
    //             <p className="skill-img">
    //               <img src="img/icon_skill.png" alt="" />
    //             </p>
    //             <div className="skill-body">
    //               <h3 className="skill-name">Photoshop</h3>
    //               <p className="skill-text">
    //                 テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります。
    //               </p>
    //             </div>
    //           </div>
    //           <div className="skill-item">
    //             <p className="skill-img">
    //               <img src="img/icon_skill.png" alt="" />
    //             </p>
    //             <div className="skill-body">
    //               <h3 className="skill-name">Illustrator</h3>
    //               <p className="skill-text">
    //                 テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります。
    //               </p>
    //             </div>
    //           </div>
    //           <div className="skill-item">
    //             <p className="skill-img">
    //               <img src="img/icon_skill.png" alt="" />
    //             </p>
    //             <div className="skill-body">
    //               <h3 className="skill-name">XD</h3>
    //               <p className="skill-text">
    //                 テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります。
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </section> */}

    //     {/* contact */}
    //     {/* <section className="contact section" id="contact">
    //       <div className="inner">
    //         <h2 className="title">Contact</h2>
    //         <p className="lead">
    //           お問い合わせは、
    //           <br className="sp-only" />
    //           SNSかメールにてお願いいたします。
    //         </p>
    //         <div className="contact-list">
    //           <a
    //             className="contact-item"
    //             href="https://twitter.com/"
    //             target="_blank"
    //             rel="noopener"
    //           >
    //             Twitter
    //           </a>
    //           <a
    //             className="contact-item"
    //             href="https://www.instagram.com/"
    //             target="_blank"
    //             rel="noopener"
    //           >
    //             Instagram
    //           </a>
    //           <span className="contact-item">xxxxxx@gmail.com</span>
    //         </div>
    //       </div>
    //     </section>
    //     <div className="background"></div>
    //     <div className="page-top" id="js-page-top">
    //       <span className="material-icons-outlined">expand_less</span>
    //     </div> */}
    //   </main>
    //   <Footer />
    // </>
    <Grid
      container
      height="100vh"
      alignItems="center"
      justifyContent="center"
      direction="column"
      ref={myRef}
    >
      <h1>Curiosity-driven problem-solving</h1>
      {/* <Stack direction="row" columnGap={1}>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack> */}
    </Grid>
  );
}
