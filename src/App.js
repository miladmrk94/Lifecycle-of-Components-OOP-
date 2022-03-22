import React from "react";
import "./App.css";
import CounterOne from "./Components/Context/CounterOne";
import Menu from "./Components/Menu/Menu";
import FilterComp from "./Components/Products/FilterComp";
import ProductList from "./Components/Products/ProductList";
import ProductProvider from "./Components/Provider/ProductProvider";
const App = () => {
  return (
    <ProductProvider>
      <div>
        <header>
          <Menu />
          <FilterComp />
        </header>
        <section>
          <ProductList />
        </section>
        {/* <CounterOne /> */}
      </div>
    </ProductProvider>
  );
};

export default App;

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
