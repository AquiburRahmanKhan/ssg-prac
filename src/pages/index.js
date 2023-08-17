import React from "react";
import useGlobalData from "@docusaurus/useGlobalData";

import FAQS from "../components/faqs";
import Header from "../components/header";
import HeroBanner from "../components/heroBanner";
import ClientLogo from "../components/clientLogo";
import styles from "./index.module.css";

export default function Home() {
  const globalData = useGlobalData();
  const contentfulData = globalData["load-contentful-data"]["default"];

  return (
    <>
      <Header navigation={contentfulData.navigation} />
      <main>
        <HeroBanner heroBannerData={contentfulData.heroBannerData} />
        <ClientLogo clientLogoData={contentfulData.clientLogoData} />
        <FAQS faqs={contentfulData.faqs} />
      </main>
    </>
  );
}
