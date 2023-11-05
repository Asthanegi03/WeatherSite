import React from "react";
import { useState } from "react";
import styles from "./SearchCity.module.css";
const SearchCity = (props) => {
  const [inputvalue, setInputValue] = useState("");

  const { findCoordinates, changeIsInitial } = props;    //object destructuring

  const changeHandler = (event) => {         //run while typing,store inp value
    setInputValue(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputvalue != "") {
      changeIsInitial(false);
      findCoordinates(inputvalue);
    }
  };

  return (
    <form action="" onSubmit={handleSubmit} className={styles.cityForm}>
      <input
        type="text"
        value={inputvalue}
        onChange={changeHandler}
        placeholder="Enter a City"
      />
      <button>Search</button>
    </form>
  );
};

export default SearchCity;
