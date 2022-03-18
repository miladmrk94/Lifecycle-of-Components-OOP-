import React from "react";
import { useProducts, useProductsAction } from "../Provider/ProductProvider";
import Product from "./Product";
import styles from "./ProductList.module.css";

const ProductList = () => {
  const item = useProducts();
  const dispatch = useProductsAction();
  return (
    <div className={styles.container}>
      {item.map((item) => {
        return (
          <Product
            key={item.id}
            title={item.title}
            price={item.price}
            value={item.title}
            quantity={item.quantity}
            textInput={(e) =>
              dispatch({ type: "inputEdit", id: item.id, event: e })
            }
            plusBtn={() => dispatch({ type: "addItem", id: item.id })}
            minusBtn={() => dispatch({ type: "minusItem", id: item.id })}
            deleteBtn={() => dispatch({ type: "deletedItem", id: item.id })}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
