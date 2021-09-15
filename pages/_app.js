// dependencies import
import React, { useEffect } from "react";
import Script from "next/script";

// components import
import Layout from "../components/layout";

// styles import
import "../styles/fonts.css";
import "../styles/globals.css";
import "../styles/cursor.css";
import "../styles/buttons.css";
import "../styles/breakpoints.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    let scroll;
    import("locomotive-scroll").then((locomotiveModule) => {
      scroll = new locomotiveModule.default({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        smoothMobile: false,
        resetNativeScroll: true,
      });
    });
    return () => scroll.destroy();
  });

  return (
    <>
      <main className="main" data-scroll-container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
      <Script src="./cursor.js"></Script>
    </>
  );
}

export default MyApp;
