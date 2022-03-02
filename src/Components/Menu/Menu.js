import React from "react";
import styles from "./Menu.module.css";
const Menu = (props) => {
  console.log("Menu.js render");

  return (
    <menu className={styles.container}>
      <ul className={styles.menu}>
        <li>Home</li>
        <li>About</li>
        <li>Phono</li>
        <li>Card:{props.card}</li>
      </ul>
    </menu>
  );
};

export default Menu;
