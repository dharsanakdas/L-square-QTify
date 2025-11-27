import React from "react";
import Feedbackimg from "../../assets/givefeedback.png";
import styles from "./Feedback.module.css";

export default function Givefeedback() {
  return <img src={Feedbackimg} alt="logo" className={styles.feedback} width={100}  />;
}   
