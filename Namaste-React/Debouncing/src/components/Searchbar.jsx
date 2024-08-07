import React, { useState, useEffect, useCallback } from "react";
import SearchSuggest from "./SearchSuggest";

const Searchbar = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  const fetchSuggestions = async (query) => {
    if (query.length > 0) {
      try {
        const response = await fetch(
          `https://corsproxy.io/?https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${query}`
        );
        const data = await response.json();
        setSuggestions(data[1]);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
        setSuggestions([]);
      }
    } else {
      setSuggestions([]);
    }
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300); 

    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  useEffect(() => {
    fetchSuggestions(debouncedSearch);
  }, [debouncedSearch]);

  const handleSearchInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <input
        className="w-80 h-7 rounded-md px-4 py-2"
        type="text"
        placeholder="search here"
        onChange={handleSearchInput}
        value={search}
      />
      <div className="w-80 rounded-md h-auto bg-red-100 mt-1 flex flex-col gap-2 overflow-hidden">
        {suggestions &&
          suggestions.map((suggestedText, index) => (
            <SearchSuggest key={index} suggestedText={suggestedText} />
          ))}
      </div>
    </div>
  );
};

export default Searchbar;
