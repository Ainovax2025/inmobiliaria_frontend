// eslint-disable-next-line no-unused-vars
import styles from '../styles/spinner.css';
import { useState } from "react";

export default function LoadingSpinner() {

  return (
        <div className="overlay">
          <div className="spinner"></div>
        </div>
  );
}
