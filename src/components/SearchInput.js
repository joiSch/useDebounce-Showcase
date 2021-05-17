import React, { useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { useDebounce } from "../utils/useDebounce";

export const SearchInput = () => {
  const [value, setValue] = React.useState("");
  const debouncedValue = useDebounce(value, 500);

  useEffect(() => {
    console.log(`Do some expensive operations with: ${debouncedValue}`);
  }, [debouncedValue]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return <TextField value={value} label="Search" onChange={handleChange} />;
};
