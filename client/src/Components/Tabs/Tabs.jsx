import React from "react";

import Tab from "./Tab/Tab";
import { TabContainer } from "./Tabs.styled";

export default function Tabs() {
  const tabs = [
    "Latest",
    "Discover",
    "Popular",
    "Top Rated",
  ];

  return (
    <TabContainer>
      {tabs.map((tab) => {
        if (tab === "Latest") return <Tab active={true} tab={tab} key={tab} />;
        else return <Tab active={false} tab={tab} key={tab} />;
      })}
    </TabContainer>
  );
}
