import React from "react";
import CustomTabs from "./CustomTabs";

function RandomComponent(params) {
  return <h1>Some Random Content</h1>;
}

export default function TabText() {
  const tabs = [
    {
      label: "Tab 1",
      content: <div>This is content 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>This is content 2</div>,
    },
    {
      label: "Tab 3",
      content: <RandomComponent />,
    },
  ];

  const handleChange = (currentTabIndex) => {
    console.log(currentTabIndex);
  };

  return (
    <div>
      <CustomTabs tabsContent={tabs} onChange={handleChange} />
    </div>
  );
}
