import React from 'react';
//import { Link } from 'react-router-dom';
import {contentComponent} from './ContentData';

import './Menu.css';

const Menu = ({ selectedLink, onLinkClick }) => {
 


    return (
    <div className="menu">

      <ul>
        <li>Please Choose Topic</li>
            
      {
        contentComponent.map((item) => {
          return(
            <li key={item.id}>
            <button onClick={() => onLinkClick(item.id)} className={selectedLink === item.id ? 'active' : ''}>
              {item.name}</button>

            </li>
          )
        })
      }
      </ul>
    </div>
  );
};

export default Menu;


