import React from 'react';
import { restaurantsData } from './db/data';

const Cuisine = ({cuisineData, setRestaurantInfo}) => {
  
  const getRestaurants = (id) => {
    const data = restaurantsData?.filter(({cuisine_id}) => cuisine_id === id);
    setRestaurantInfo(data)
    console.log(data)
}

  return (
    <div> {cuisineData?.map(({id, name}) => (
        <button onClick={() => getRestaurants(id)} key={id}> {name} </button>
      ))}</div>
  )
}

export default Cuisine