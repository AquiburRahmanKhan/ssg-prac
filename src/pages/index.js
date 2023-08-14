import React from "react";
import useGlobalData from "@docusaurus/useGlobalData";

import FAQS from "../components/faqs";
import Header from "../components/header";
import styles from "./index.module.css";

export default function Home() {
  const globalData = useGlobalData();
  const contentfulData = globalData["load-contentful-data"]["default"];

  return (
    <>
      <Header navigation={contentfulData.navigation} />
      <main>
        <FAQS faqs={contentfulData.faqs} />
      </main>
    </>
  );
}
