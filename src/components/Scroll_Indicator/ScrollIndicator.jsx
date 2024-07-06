import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./scroll.css";

export default function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();

      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  const handleScrollPercent = () => {
    const scrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercent((scrolled / height) * 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercent);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  });

  console.log(data, scrollPercent);

  return (
    <div>
      <div className="top-container">
        <h2>Custom Scroll Indicator</h2>
        <div className="scroll-progress">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPercent}%` }}
          ></div>
        </div>
      </div>
      <ol className="data-container">
        {data && data.length > 0
          ? data.map((dataItem) => (
              <li style={{ color: "#fff", padding: "10px 0 10px 0" }}>
                {dataItem.title}
              </li>
            ))
          : null}
      </ol>
    </div>
  );
}
