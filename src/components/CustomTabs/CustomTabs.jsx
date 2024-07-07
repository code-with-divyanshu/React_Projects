import React, { useState } from "react";
import "./style.css";

export default function CustomTabs({ tabsContent, onChange }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleOnClick = (getCurrentIndex) => {
    setCurrentTabIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  };

  return (
    <div className="wrapper">
      <div className="heading">
        {tabsContent.map((tabItem, idx) => (
          <div
            className={`tab-item ${currentTabIndex === idx ? "active" : ""}`}
            onClick={() => handleOnClick(idx)}
            key={tabItem.label}
          >
            <span className="label">{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div className="content">
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
}
