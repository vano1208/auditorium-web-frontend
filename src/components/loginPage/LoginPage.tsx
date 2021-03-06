import React from "react";
import styles from "./loginPage.module.css";
import Authorisation from "./authorisation/AuthorisationContainer";

const LoginPage = () => {
  return (
    <div className={styles.loginPage}>
      <div className={styles.form}>
        <Authorisation />
      </div>
    </div>
  );
};

export default LoginPage;
