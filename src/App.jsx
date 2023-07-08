import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./Home";
import RestaurantDetailPage from './RestaurantDetailPage';

function App() {
  

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path='restaurant/:restaurantID' element={<RestaurantDetailPage />}/> 
        </Routes>
      </div>
    </>
  )
}

export default App
