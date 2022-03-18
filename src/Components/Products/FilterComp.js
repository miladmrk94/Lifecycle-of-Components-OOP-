import React, { useState } from "react";
import { useProductsAction } from "../Provider/ProductProvider";
import Select from "react-select";

const FilterOptions = [
  { value: "All", label: "All" },
  { value: "S", label: "S" },
  { value: "M", label: "M" },
  { value: "L", label: "L" },
  { value: "XL", label: "XL" },
  { value: "XXL", label: "XXL" },
];

const SortOptions = [
  { value: "Up", label: "Up Price" },
  { value: "Down", label: "Down Price" },
];
const FilterComp = () => {
  const dispatch = useProductsAction();
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");

  const changeHandler = (selectedOption) => {
    console.log(selectedOption);
    dispatch({ type: "filterItem", event: selectedOption });
    dispatch({ type: "sort", SortOptions: value2 });

    setValue(selectedOption);
  };

  const changeSortHandler = (SortOptions) => {
    dispatch({ type: "sort", SortOptions });
    setValue2(SortOptions);
  };
  return (
    <div>
      <h3>Order by:</h3>
      <Select value={value} onChange={changeHandler} options={FilterOptions} />
      <Select
        value={value2}
        onChange={changeSortHandler}
        options={SortOptions}
      />
    </div>
  );
};

export default FilterComp;
