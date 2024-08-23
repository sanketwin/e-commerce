import React, { useState } from "react";
import "./dropdown.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ClickAwayListener } from "@mui/material";

const Dropdown = () => {
  const [isOpenDropdown, setisOpenDropdown] = useState(false);
  const [selectedIndex, setselectedIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState("All Categories");

  const openDropdown = () => {
    setisOpenDropdown(!isOpenDropdown);
  };

  const closeDropdown = (index: any, e: any) => {
    setselectedIndex(index);
    setisOpenDropdown(false);
    console.log(e);

    setSelectedItem(e.target.innerText);
  };

  return (
    <>
      <ClickAwayListener onClickAway={() => setisOpenDropdown(false)}>
        <div className="selectDropdown cursor">
          <div className="d-flex align-items-center">
            <span className="openDropdown me-2" onClick={openDropdown}>
              {selectedItem}
            </span>
            <KeyboardArrowDownIcon className="downArrow" />
          </div>
          {isOpenDropdown === true && (
            <div className="selectDrop shadow">
              <div className="searchField">
                <input type="text" />
              </div>
              <ul className="searchResult">
                <li
                  onClick={(e) => closeDropdown(0, e)}
                  className={`${selectedIndex === 0 ? "active" : ""}`}
                >
                  All Categories
                </li>
                <li
                  onClick={(e) => closeDropdown(1, e)}
                  className={`${selectedIndex === 1 ? "active" : ""}`}
                >
                  Milk and Dairies
                </li>
                <li
                  onClick={(e) => closeDropdown(2, e)}
                  className={`${selectedIndex === 2 ? "active" : ""}`}
                >
                  Wines & Drinks
                </li>
                <li
                  onClick={(e) => closeDropdown(3, e)}
                  className={`${selectedIndex === 3 ? "active" : ""}`}
                >
                  Clothing & beauty
                </li>
                <li
                  onClick={(e) => closeDropdown(4, e)}
                  className={`${selectedIndex === 4 ? "active" : ""}`}
                >
                  Fresh Seafood
                </li>
                <li
                  onClick={(e) => closeDropdown(5, e)}
                  className={`${selectedIndex === 5 ? "active" : ""}`}
                >
                  Pet Foods & Toy
                </li>
                <li
                  onClick={(e) => closeDropdown(6, e)}
                  className={`${selectedIndex === 6 ? "active" : ""}`}
                >
                  Fast food
                </li>
                <li
                  onClick={(e) => closeDropdown(7, e)}
                  className={`${selectedIndex === 7 ? "active" : ""}`}
                >
                  Baking material
                </li>
                <li
                  onClick={(e) => closeDropdown(8, e)}
                  className={`${selectedIndex === 8 ? "active" : ""}`}
                >
                  Vegetables
                </li>
                <li
                  onClick={(e) => closeDropdown(9, e)}
                  className={`${selectedIndex === 9 ? "active" : ""}`}
                >
                  Fresh Fruit
                </li>
                <li
                  onClick={(e) => closeDropdown(10, e)}
                  className={`${selectedIndex === 10 ? "active" : ""}`}
                >
                  Bread and Juice
                </li>
                <li
                  onClick={(e) => closeDropdown(11, e)}
                  className={`${selectedIndex === 11 ? "active" : ""}`}
                >
                  Bread and Juice
                </li>
                <li
                  onClick={(e) => closeDropdown(12, e)}
                  className={`${selectedIndex === 12 ? "active" : ""}`}
                >
                  Bread and Juice
                </li>
                <li
                  onClick={(e) => closeDropdown(13, e)}
                  className={`${selectedIndex === 13 ? "active" : ""}`}
                >
                  Bread and Juice
                </li>
                <li
                  onClick={(e) => closeDropdown(14, e)}
                  className={`${selectedIndex === 14 ? "active" : ""}`}
                >
                  Bread and Juice
                </li>
              </ul>
            </div>
          )}
        </div>
      </ClickAwayListener>
    </>
  );
};

export default Dropdown;
