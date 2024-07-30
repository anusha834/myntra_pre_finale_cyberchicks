
import React from 'react';
import { Link } from 'react-router-dom';
import bohoImage from '../assets/boho image.jpg';
import egirlImage from '../assets/egirl.jpg';
import oldmoneyImage from '../assets/old.jpg';
import navbarimg from '../assets/nav_bar.jpg';

const Home = () => {
  const aesthetics = [
    { name: 'boho', image: bohoImage },
    { name: 'e-girl', image: egirlImage },
    { name: 'oldmoney', image: oldmoneyImage }
  ];

  const defaultType = 'tops'; // Set a default type to navigate to

  return (
    <div>
      <header>
        <img className='navbar' src={navbarimg} alt="Navbar" />
      </header>
     

      <h1 className='aesthetic-name'>Choose an Aesthetic</h1>
      <div className="aesthetic-list">
        {aesthetics.map(aesthetic => (
          <Link
            style={{ textDecoration: 'none' }}
            key={aesthetic.name}
            to={`/category/${aesthetic.name}/${defaultType}`}
          >
            <div className='main-card'>
              <div className="aesthetic-card">
                <img src={aesthetic.image} alt={aesthetic.name} className="aesthetic-image" />
                <div className="aesthetic-name">
                  {aesthetic.name.charAt(0).toUpperCase() + aesthetic.name.slice(1)}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
