import React, { useState } from "react";
import { useProductsAction } from "./../Provider/ProductProvider";
import Select from "react-select";

const options = [
  { value: "ALL", label: "ALL" },
  { value: "S", label: "S" },
  { value: "M", label: "M" },
  { value: "X", label: "X" },
  { value: "L", label: "L" },
  { value: "XL", label: "XL" },
  { value: "XXL", label: "XLL" },
];

const optionsPrice = [
  { value: "Hight", label: "Highest" },

  { value: "Low", label: "Lowest" },
];

const FilterComp = () => {
  const dispatch = useProductsAction();
  const [value, setValue] = useState("");
  const [PriceValue, setPriceValue] = useState();

  const sizeHandler = (e) => {
    console.log(e.value);
    dispatch({ type: "filter", event: e });
    console.log(PriceValue);
    if (PriceValue !== undefined) {
      dispatch({
        type: "sort",
        event: PriceValue,
      });
    }

    setValue(e);

    console.log(PriceValue);
  };
  const priceHandler = (e) => {
    dispatch({ type: "sort", event: e });
    setPriceValue(e);
  };
  return (
    <div>
      {/* سورت کردن بر اساس سایز لباس ها */}
      <Select onChange={sizeHandler} options={options} value={value} />
      {/* سورت کردن بر اساس قیمت */}

      <Select
        onChange={priceHandler}
        options={optionsPrice}
        value={PriceValue}
      />
    </div>
  );
};

export default FilterComp;
