import { useState } from "react";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderdOptions = options.map((option) => {
    return (
      <div onClick={() => handleOptionClick(option)} key={option.value}>
        {option.value}
      </div>
    );
  });

  return (
    <div>
      <div onClick={handleClick}>{value?.label || "Select..."}</div>
      {isOpen && <div>{renderdOptions}</div>}
    </div>
  );
}

export default Dropdown;
