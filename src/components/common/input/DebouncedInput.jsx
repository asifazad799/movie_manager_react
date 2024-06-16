import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

import { CustomInput } from "./CustomInput";

export function DebouncedInput({ title, handleChange, label }) {
  const [inputVal, setInputVal] = useState("");
  const [debouncedValue] = useDebounce(inputVal, 1000);

  const handleInputChange = (e) => {
    setInputVal(e.target.value);
  };

  useEffect(() => {
    if (handleChange) handleChange(debouncedValue);
  }, [debouncedValue]);

  return (
    <CustomInput
      fullWidth
      variant="outlined"
      id="search"
      label={label || "Search Asif"}
      title={title || "Search New Movie"}
      onChange={handleInputChange}
    />
  );
}
