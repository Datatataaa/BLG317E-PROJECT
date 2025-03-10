import React from "react";
import Select from "react-select";
import MenuList from "./menu-list";
import Option from "./option";

const ReactSelect = ({
  options,
  value,
  onChange,
  placeholder,
  disabled = false,
  isMulti = false,
  defaultValue
}) => {
  return (
    <Select
      options={options}
      value={value && [value]}
      onChange={onChange}
      isMulti = {isMulti}
      defaultValue={defaultValue}
      isDisabled={options.length === 0 || disabled} 
      classNamePrefix="react-select"
      placeholder={placeholder}
      components={{
        MenuList,
        Option
      }}
    />
  );
};

export default ReactSelect;