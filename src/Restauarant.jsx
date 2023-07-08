import React from 'react';
import { Link } from "react-router-dom";
import Menu from './Menu';


const Restauarant = ({restaurantInfo}) => {
  return (
    <div>{restaurantInfo?.length > 0 && (
        <ul>
          {restaurantInfo?.map(({name, id, menu}) => (
            <Link to={`restaurant/${id}`} key={id}>
                <li className='menu__lists' >
                <h2>dishes by {name}</h2>
                <Menu menu={menu} name={name} />
                </li>
            </Link>
          ))}
        </ul>
      )}</div>
  )
}

export default Restauarant