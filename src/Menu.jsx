import React from 'react';
import { Link } from "react-router-dom";

const Menu = ({name, menu}) => {
  return (
    <div>
        <ul className='menu__datas'>
                {menu?.map((menuData) => (
                        <li key={menuData?.id} className='menu__data'>
                        <img className='menu__img' src={menuData?.imgSrc} alt={menuData?.name} /> 
                        <h3>{menuData?.name}</h3>                   
                        <p>Rs. {menuData?.price} for {menuData?.qty}</p>                   
                        <p>{name}</p>                   
                        </li>
                ))}
        </ul>
    </div>
  )
}

export default Menu