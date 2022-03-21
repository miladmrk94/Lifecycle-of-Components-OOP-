import React, { useContext, useReducer } from "react";
import { productsData } from "../db/products";
//import _ from "lodash";

const ProductContext = React.createContext();
const ProductContextDispatcher = React.createContext();

const initialProduct = productsData;
const reducer = (state, action) => {
  switch (action.type) {
    case "deletedItem":
      const filterProducts = state.filter((item) => {
        return item.id !== action.id;
      });
      return filterProducts;
    // ----------------------
    case "addItem":
      const findIndexProduct = state.findIndex((item) => {
        return item.id === action.id;
      });
      const productByIndex = { ...state[findIndexProduct] };
      productByIndex.quantity++;
      const products = [...state];
      products[findIndexProduct] = productByIndex;
      return products;
    // ----------------------
    case "minusItem":
      let indexProduct = state.findIndex((item) => {
        return item.id === action.id;
      });
      const selectProduct = { ...state[indexProduct] };

      if (selectProduct.quantity <= 1) {
        const filterProducts = state.filter((item) => {
          return item.id !== action.id;
        });
        return filterProducts;
      } else {
        selectProduct.quantity--;
        const products = [...state];
        products[indexProduct] = selectProduct;
        return products;
      }
    // ----------------------
    // case "filterItem":
    //   if (action.event.value === "All") {
    //     return productsData;
    //   } else {
    //     const filter = productsData.filter((item) => {
    //       return item.availableSizes.indexOf(action.event.value) >= 0;
    //     });

    //     return filter;
    //   }
    // ----------------------
    // case "sort":
    //   if (action.SortOptions.value === "Up") {
    //     const sort = _.orderBy(state, ["price"], ["desc"]);
    //     return sort;
    //   } else {
    //     const sort = _.orderBy(state, ["price"], ["asc"]);
    //     return sort;
    //   }
    //------------------------------

    default:
      return state;
  }
};

const ProductProvider = ({ children }) => {
  // const [item, setItem] = useState(productsData);
  const [product, dispatch] = useReducer(reducer, initialProduct);

  return (
    <ProductContext.Provider value={product}>
      <ProductContextDispatcher.Provider value={dispatch}>
        {children}
      </ProductContextDispatcher.Provider>
    </ProductContext.Provider>
  );
};

export default ProductProvider;

export const useProducts = () => {
  return useContext(ProductContext);
};
export const useProductsAction = () => {
  return useContext(ProductContextDispatcher);
};
// const textInputHandler = (e, id) => {
//   const findIndex = item.findIndex((item) => {
//     return item.id === id;
//   });
//   const selectProduct = { ...item[findIndex] };
//   selectProduct.title = e.target.value;
//   const products = [...item];
//   products[findIndex] = selectProduct;
//   setItem(products);
// };

// const deleteHandler = (id) => {
//   const filterProducts = item.filter((item) => {
//     return item.id !== id;
//   });
//   setItem(filterProducts);
// };

// const quantityAddHandler = (id) => {
//   const findIndexProduct = item.findIndex((item) => {
//     return item.id === id;
//   });
//   const productByIndex = { ...item[findIndexProduct] };
//   productByIndex.quantity++;
//   const products = [...item];
//   products[findIndexProduct] = productByIndex;
//   setItem(products);
// };

// const quantityMinusHandler = (id) => {
//   let indexProduct = item.findIndex((item) => {
//     return item.id === id;
//   });
//   const selectProduct = { ...item[indexProduct] };

//   if (selectProduct.quantity <= 1) {
//     const filterProducts = item.filter((item) => {
//       return item.id !== id;
//     });
//     setItem(filterProducts);
//   } else {
//     selectProduct.quantity--;
//     const products = [...item];
//     products[indexProduct] = selectProduct;
//     setItem(products);
//   }
// };

// const filterSizeHandler = (selectedOption, select) => {
//   if (selectedOption.value === "All") {
//     setItem(productsData);
//   } else {
//     const filter = productsData.filter((item) => {
//       return item.availableSizes.indexOf(selectedOption.value) >= 0;
//     });
//     // if (selectedOption.value === "Up") {
//     //   const sort = _.orderBy(filter, ["price"], ["asc"]);
//     //   return setItem(sort);
//     // } else {
//     //   const sort = _.orderBy(filter, ["price"], ["desc"]);
//     //   return setItem(sort);
//     // }
//     sortHandler(select);
//     setItem(filter);
//   }
// };

// const sortHandler = (select) => {
//   if (select.value === "Up") {
//     const sort = _.orderBy(item, ["price"], ["desc"]);
//     return setItem(sort);
//   } else {
//     const sort = _.orderBy(item, ["price"], ["asc"]);
//     return setItem(sort);
//   }
// };

// return {
//   textInputHandler,
//   deleteHandler,
//   quantityAddHandler,
//   quantityMinusHandler,
//   filterSizeHandler,
//   sortHandler,
// };
