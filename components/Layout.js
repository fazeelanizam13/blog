import React from "react";
import { CustomHead, NavBar, Footer } from "../components";

export default function Layout({ title, absolutePath, children }) {
  return [
    <CustomHead title={title} absolutePath={absolutePath} />,
    <div className="box">
      <NavBar />
      <div className="contentInBox">{children}</div>
    </div>,
    <Footer />,
  ];
}
