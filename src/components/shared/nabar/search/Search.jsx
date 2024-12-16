import { useState } from "react";

import cssClasses from "./Search.module.css";
import { BiSearch } from "react-icons/bi";

function Search() {
  const [isSearching, setIsSearching] = useState(false);

  function hanldeSearchOpen() {
    setIsSearching((isOpen) => !isOpen);
  }

  return (
    <form action="" className={cssClasses["search-form"]}>
      <BiSearch
        className={cssClasses["search-icon"]}
        onClick={hanldeSearchOpen}
        id="search"
      />
      {isSearching && (
        <input
          type="text"
          placeholder="Search"
          className={cssClasses["search-input"]}
        />
      )}
    </form>
  );
}

export default Search;
