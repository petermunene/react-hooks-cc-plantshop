import React from "react";




function Search({setFilteredPlants,AllPlants}) {
  
  function handleOnChange(value){
    const updatedPlants=AllPlants.filter((plant)=>plant.name.toLowerCase().includes(value.toLowerCase()))
    setFilteredPlants(updatedPlants)
   }
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => handleOnChange(e.target.value)}
      />
    </div>
  );
}

export default Search;
