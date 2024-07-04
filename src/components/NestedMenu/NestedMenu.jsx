import React from "react";
import MenuList from "./MenuList";
import "./style.css";

export default function NestedMenu({ menus = [] }) {
  return (
    <div className="nested-menu-container">
      <MenuList list={menus} />
    </div>
  );
}
