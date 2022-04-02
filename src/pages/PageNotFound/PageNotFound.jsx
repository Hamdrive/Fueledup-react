import React from "react";
import Error404 from "../../assets/Error404.png";
import { Navbar } from "../../components";
import styles from "./PageNotFound.module.css";

export function PageNotFound() {
  return (
    <>
    <Navbar />
      <div>
        <img
          className={`${styles.splashscreen}`}
          src={Error404}
          alt={"404 error"}
        />
      </div>
    </>
  );
}
