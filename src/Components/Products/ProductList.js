import React, { Component } from "react";
import Product from "./Product";
import styles from "./ProductList.module.css";

class ProductList extends Component {
  render() {
    console.log("productList.js render");
    if (this.props.product.length === 0) {
      return <div className={styles.container}>Card in Empty</div>;
    }
    return (
      <div className={styles.container}>
        {this.props.product.map((item) => {
          return (
            <Product
              key={item.id}
              title={item.title}
              price={item.price}
              value={item.title}
              quantity={item.quantity}
              textInput={(e) => this.props.textInput(e, item.id)}
              plusBtn={() => this.props.plusBtn(item.id)}
              minusBtn={() => this.props.minusBtn(item.id)}
              deleteBtn={() => this.props.deleteBtn(item.id)}
            />
          );
        })}
      </div>
    );
  }
}

export default ProductList;
