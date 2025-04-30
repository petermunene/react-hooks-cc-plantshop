import React ,{useState}from "react";

function NewPlantForm({allPlants,setFilteredPlants,setAllPlants}) {
  const [name,setName]=useState("")
  const [price,setPrice]=useState('')
  const [image,setImage]=useState('')
  

  function handleOnSubmit(newPlant){
    
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      const updatedPlants = [...allPlants, data];
      setAllPlants(updatedPlants);
      setFilteredPlants(updatedPlants);
    })
  }


  function handleSubmit(e){
    e.preventDefault();
    const newPlantArray={name ,price,image}
    
    handleOnSubmit(newPlantArray)


  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={(e)=>setName(e.target.value)} />
        <input type="text" name="image" placeholder="Image URL" onChange={(e)=>setImage(e.target.value)} />
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={(e)=>setPrice(e.target.value)} />
        <button type="submit" >Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
