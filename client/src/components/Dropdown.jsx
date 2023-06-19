import { useState } from "react";

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState("Community Discussion");

  const handleOptionChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);

    if (selectedValue === "Community Discussion") {
      window.location.href = "/community";
    } else if (selectedValue === "My Learning") {
      window.location.href = "/toolkit";
    }
  };

  return (
    <select
      value={selectedOption}
      onChange={handleOptionChange}
      fontWeight="bold"
      fontSize="20px"
      color="primary"
    >
      <option value="Community Discussion">Community Discussion</option>
      <option value="My Learning"> My Learning</option>
    </select>
  );
};

export default Dropdown;
