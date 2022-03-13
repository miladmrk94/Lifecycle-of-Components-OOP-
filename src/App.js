import React, { useState } from "react";
import "./App.css";
import Menu from "./Components/Menu/Menu";
import ProductList from "./Components/Products/ProductList";
import Wrapper from "./Components/hoc/Wrapper";

export const UserContext = React.createContext();

const App = () => {
  const [item, setItem] = useState([
    { title: "Book 1", price: "200$", id: 0, quantity: 1 },
    { title: "Book 2", price: "300$", id: 1, quantity: 1 },
    { title: "Book 3", price: "100$", id: 2, quantity: 1 },
    { title: "Book 4", price: "500$", id: 3, quantity: 1 },
  ]);

  const textInputHandler = (e, id) => {
    const findIndex = item.findIndex((item) => {
      return item.id === id;
    });
    const selectProduct = { ...item[findIndex] };
    selectProduct.title = e.target.value;
    const products = [...item];
    products[findIndex] = selectProduct;
    console.log(products);
    setItem(products);
  };

  const deleteHandler = (id) => {
    const filterProducts = item.filter((item) => {
      return item.id !== id;
    });
    setItem(filterProducts);
  };

  const quantityAddHandler = (id) => {
    const findIndexProduct = item.findIndex((item) => {
      return item.id === id;
    });
    console.log(findIndexProduct);
    const productByIndex = { ...item[findIndexProduct] };
    productByIndex.quantity++;
    const products = [...item];
    products[findIndexProduct] = productByIndex;
    setItem(products);
  };

  const quantityMinusHandler = (id) => {
    let indexProduct = item.findIndex((item) => {
      return item.id === id;
    });
    const selectProduct = { ...item[indexProduct] };

    if (selectProduct.quantity <= 1) {
      const filterProducts = item.filter((item) => {
        return item.id !== id;
      });
      setItem(filterProducts);
    } else {
      selectProduct.quantity--;
      const products = [...item];
      products[indexProduct] = selectProduct;
      setItem(products);
    }
  };

  return (
    <div>
      <UserContext.Provider value={"milad rastgooooooo"}>
        <header>
          <Menu card={item.length} />
        </header>
        <section>
          <ProductList
            product={item}
            textInput={textInputHandler}
            plusBtn={quantityAddHandler}
            minusBtn={quantityMinusHandler}
            deleteBtn={deleteHandler}
          />
        </section>
      </UserContext.Provider>
    </div>
  );
};

export default Wrapper(App, "container");

// import React, { Component } from "react";
// import HocBTN from "./Components/hoc/testHOC/HocBTN";
// import HocHover from "./Components/hoc/testHOC/HocHover";

// class App extends Component {
//   state = {};
//   render() {
//     return (
//       <div>
//         sss
//         <HocBTN />
//       </div>
//     );
//   }
// }

// export default App;

/// مبحث context , useReducer
// import React, { useContext } from "react";
// import CounterOne from "./Components/Context/CounterOne";

// import CounterProvider from "./Components/Context/CounterProvider";
// import CounterReducer from "./Components/CounterReducer";

// const App = () => {
//   return (
//     <div>
//       Hi
//       <CounterProvider>
//         <CounterOne />
//         <CounterReducer />
//       </CounterProvider>
//     </div>
//   );
// };

// export default App;
