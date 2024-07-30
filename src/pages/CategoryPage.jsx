import React from 'react';
import { Link, useParams } from 'react-router-dom';
import navbarimg from '../assets/nav_bar.jpg'
function CategoryPage() {
  const { aesthetic } = useParams();
  const types = ['tops', 'pants', 'skirts'];

  return (
    <div>
     <header>
    <img className='navbar' src={navbarimg}></img>
    </header>
    
      <h1>{aesthetic.charAt(0).toUpperCase() + aesthetic.slice(1)}</h1>
      <div className="type-list">
        {types.map(type => (
          <Link key={type} to={`/category/${aesthetic}/${type}`}>
            <button className="type-button">
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
