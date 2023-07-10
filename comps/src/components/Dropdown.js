import { useState } from "react";

function Dropdown({ options }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const renderdOptions = options.map((option) => {
    return <div key={option.value}>{option.value}</div>;
  });
  return (
    <div>
      <div onClick={handleClick}>Select...</div>
      {isOpen && <div>{renderdOptions}</div>}
    </div>
  );
}

export default Dropdown;
