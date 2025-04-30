import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({filteredPlants,handleOnSubmit , allPlants,setFilteredPlants,setAllPlants}) {
  return (
    <main>
      <NewPlantForm handleOnSubmit={handleOnSubmit} allPlants={allPlants} setFilteredPlants={setFilteredPlants}  setAllPlants={setAllPlants}  />
      <Search allPlants={allPlants} setFilteredPlants={setFilteredPlants} />
      <PlantList plants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
