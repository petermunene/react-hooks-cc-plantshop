import React,{useState,useEffect} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [allPlants,setAllPlants]=useState([])
  const [filteredPlants,setFilteredPlants]=useState([])

  useEffect(()=>{
    fetch("http://localhost:6001/plants")
    .then((res)=>(res.json()))
    .then((plants)=>{setAllPlants(plants)
      setFilteredPlants(plants)
    })},[])
  

  
  return (
    <div className="app">
      <Header />
      <PlantPage plants={allPlants} filteredPlants={filteredPlants} allPlants={allPlants}
                 setFilteredPlants={setFilteredPlants} setAllPlants={setAllPlants}/>
    </div>
  );
}

export default App;
