import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Dropdown = () => {
  const location = useLocation();
  const [selectedOption, setSelectedOption] = useState("Community Discussion");

  useEffect(() => {
    if (location.pathname === "/community") {
      setSelectedOption("Community Discussion");
    } else if (location.pathname === "/toolkit") {
      setSelectedOption("My Learning");
    }
  }, [location.pathname]);

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
      style={{ fontWeight: "bold", fontSize: "20px", color: "primary" }}
    >
      <option value="Community Discussion">Community Discussion</option>
      <option value="My Learning">My Learning</option>
    </select>
  );
};

export default Dropdown;
