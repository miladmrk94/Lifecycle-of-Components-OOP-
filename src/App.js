// import React, { Component } from "react";
// import "./App.css";
// import Menu from "./Components/Menu/Menu";
// import ProductList from "./Components/Products/ProductList";
// import ClassCounter from "./Components/ClassCounter";
// import CounterFunction from "./Components/CounterFunction";
// import Wrapper from "./Components/hoc/Wrapper";

// // class App extends Component {
// //   state = {};
// //   render() {
// //     return (
// //       <div>
// //         <ClassCounter />
// //         {/* <CounterFunction /> */}
// //         <Wrapper />
// //       </div>
// //     );
// //   }
// // }

// // export default App;
// export const UserContext = React.createContext();

// class App extends Component {
//   state = {
//     product: [
//       { title: "Book 1", price: "200$", id: 0, quantity: 1 },
//       { title: "Book 2", price: "300$", id: 1, quantity: 1 },
//       { title: "Book 3", price: "100$", id: 2, quantity: 1 },
//       { title: "Book 4", price: "500$", id: 3, quantity: 1 },
//     ],
//   };

//   textInputHandler = (e, id) => {
//     // const findChange = this.state.product.find((item) => {
//     //   return item.id === id;
//     // });
//     // findChange.title = e.target.value;
//     // this.setState({ ...this.state.product, findChange });
//     const findIndex = this.state.product.findIndex((item) => {
//       return item.id === id;
//     });
//     const selectProduct = { ...this.state.product[findIndex] };
//     selectProduct.title = e.target.value;
//     const products = [...this.state.product];
//     products[findIndex] = selectProduct;
//     this.setState({ product: products });
//   };

//   deleteHandler = (id) => {
//     const filterProducts = this.state.product.filter((item) => {
//       return item.id !== id;
//     });
//     this.setState({ ...this.state.product, product: filterProducts });
//   };

//   quantityAddHandler = (id) => {
//     const findIndexProduct = this.state.product.findIndex((item) => {
//       return item.id === id;
//     });
//     console.log(findIndexProduct);
//     const productByIndex = { ...this.state.product[findIndexProduct] };
//     productByIndex.quantity++;
//     const products = [...this.state.product];
//     products[findIndexProduct] = productByIndex;
//     this.setState({ product: products });
//   };
//   fun;
//   quantityMinusHandler = (id) => {
//     let indexProduct = this.state.product.findIndex((item) => {
//       return item.id === id;
//     });
//     const product = { ...this.state.product[indexProduct] };

//     if (product.quantity <= 1) {
//       const filterProducts = this.state.product.filter((item) => {
//         return item.id !== id;
//       });
//       this.setState({ ...this.state.product, product: filterProducts });
//     } else {
//       product.quantity--;
//       const products = [...this.state.product];
//       products[indexProduct] = product;
//       this.setState({ product: products });
//     }
//   };

//   componentDidUpdate(prevProps, prevState) {
//     console.log("app.js CDP");
//     console.log(prevState);
//   }
//   //WARNING! To be deprecated in React v17. Use componentDidMount instead.

//   render() {
//     console.log("app.js render");
//     return (
//       <div>
//         {/* <UserContext.Provider value={"milad rastgooooooo"}>
//           <header>
//             <Menu card={this.state.product.length} />
//           </header>
//           <section>
//             <ProductList
//               product={this.state.product}
//               textInput={this.textInputHandler}
//               plusBtn={this.quantityAddHandler}
//               minusBtn={this.quantityMinusHandler}
//               deleteBtn={this.deleteHandler}
//             />
//           </section>
//         </UserContext.Provider> */}

//       </div>
//     );
//   }
// }

// export default Wrapper(App, "container");

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

import React, { useContext } from "react";
import CounterOne from "./Components/Context/CounterOne";

import CounterProvider from "./Components/Context/CounterProvider";

const App = () => {
  return (
    <div>
      Hi
      <CounterProvider>
        <CounterOne />
      </CounterProvider>
    </div>
  );
};

export default App;
