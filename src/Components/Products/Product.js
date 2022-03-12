import React, { useEffect, useContext } from "react";
import { UserContext } from "../../App";
import styles from "./Product.module.css";
import { FiTrash2, FiMinusCircle, FiPlusCircle } from "react-icons/fi";

const Product = ({
  title,
  price,
  textInput,
  value,
  quantity,
  plusBtn,
  minusBtn,
  deleteBtn,
}) => {
  console.log("product.js product");
  useEffect(() => {
    console.log("product.js milad");
  }, []);

  const user = useContext(UserContext);
  console.log(user);

  return (
    <div className={styles.container}>
      <p>{title}</p>
      <p>{price}</p>
      <input onChange={textInput} className={styles.input} />
      <span>{quantity}</span>
      <button onClick={plusBtn} className={styles.plusBtn}>
        <FiPlusCircle className={styles.icon} size="1.2rem" />
      </button>
      <button onClick={minusBtn} className={styles.plusBtn}>
        {quantity > 1 ? (
          <FiMinusCircle className={styles.icon} size="1.2rem" />
        ) : (
          <FiTrash2 color="rgb(255, 85, 85)" size="1.2rem" />
        )}
      </button>
      <button onClick={deleteBtn} className={styles.deleteBtn}>
        delete
      </button>
    </div>
  );
};

export default Product;
