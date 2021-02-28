import React from "react"
import Spot from "./Spot"
import "./style.css"
import vacationSpots from "./VacationSpots"

function App() {
  const vacationData = vacationSpots.map(spot =>{
    let backgroundColor 
    switch (spot.timeToGo) {
      case "Spring":
        backgroundColor= "#A5F3D2"
        break;
      case "Summer":
        backgroundColor= "#E7965B"
        break;
      case "Fall":
        backgroundColor= "#EDB2B2"
        break;
      case "Winter":
        backgroundColor= "#9498CF"
        break;
      default: 
        backgroundColor= "white"
        break;
    }
  
  return  (<Spot place={spot.place} price={spot.price} backgroundColor={backgroundColor}timeToGo={spot.timeToGo}/>
    )
  })
  return (
    <div className="App">
      {vacationData}
    </div>
  );
}

export default App;
