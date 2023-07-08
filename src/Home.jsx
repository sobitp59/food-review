import React, { useState } from 'react'
import Restauarant from './Restauarant'
import Cuisine from './Cuisine'
import { cuisineData} from './db/data'

const Home = () => {
    const [restaurantInfo, setRestaurantInfo] = useState([])


 

  console.log(restaurantInfo)

  return (
    <div>
        <h1>Food Ordering App</h1>
        <h3>select your cuisine:</h3>

        <Cuisine cuisineData={cuisineData} setRestaurantInfo={setRestaurantInfo}/>
        <Restauarant restaurantInfo={restaurantInfo} />
    </div>
  )
}

export default Home