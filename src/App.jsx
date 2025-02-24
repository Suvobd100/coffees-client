import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <div className="m-20 ">
      <h1 className="text-6xl text-blue-400 text-center">Coffee Store</h1>
      <p className="text-center">No of Coffees Available : {coffees.length}</p>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee._id} 
          coffee={coffee}
          coffees={coffees}
          setCoffees={setCoffees}
          >

          </CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App;
