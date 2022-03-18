import React from "react";
import { useProducts } from "../Provider/ProductProvider";
import styles from "./Menu.module.css";
const Menu = () => {
  const item = useProducts();

  return (
    <menu className={styles.container}>
      <ul className={styles.menu}>
        <li>Home</li>
        <li>About</li>
        <li>Phono</li>
        <li>Card:{item.length}</li>
      </ul>
    </menu>
  );
};

export default Menu;
