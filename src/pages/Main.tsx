import { Drawer } from "@material-ui/core";
import React from "react";
import About from "../components/About/About";
import NavBar from "../components/NavBar/NavBar";

export default function Main() {
  return (
    <div>
      <NavBar />
      <About />
    </div>
  );
}
