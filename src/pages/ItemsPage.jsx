// import React, { useEffect, useState } from 'react';
// import { Link, useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import navbarimg from '../assets/nav_bar.jpg';
// import sidebar from '../assets/sidebar.jpg';
// import '../styles/ItemPage.css'; 

// const ItemsPage = () => {
//   const { aesthetic, type } = useParams();
//   const [items, setItems] = useState([]);
//   const navigate = useNavigate();
//   const types = ['tops', 'pants', 'skirts'];

//   useEffect(() => {
//     axios.get(`http://localhost:8000/api/items/?category=${aesthetic}&clothing_type=${type}`)
//       .then(response => setItems(response.data))
//       .catch(error => console.error('Error fetching data:', error));
//   }, [aesthetic, type]);

//   return (
//     <div>
//       <header>
//         <img className='navbar' src={navbarimg} alt="Navbar" />
//       </header>
//       <div className="content">
//         <aside>
//           <img src={sidebar} alt="Sidebar" />
//         </aside>
//         <main>
//           <h1>{type.charAt(0).toUpperCase() + type.slice(1)} in {aesthetic.charAt(0).toUpperCase() + aesthetic.slice(1)}</h1>
//           <div className="type-list">
//             {types.map(t => (
//               <button
//                 key={t}
//                 className={`type-button ${t === type ? 'selected-button' : ''}`}
//                 onClick={() => navigate(`/category/${aesthetic}/${t}`)}
//               >
//                 {t.charAt(0).toUpperCase() + t.slice(1)}
//               </button>
//             ))}
//           </div>
//           <div className="image-gallery">
//             {items.map(item => (
//               <Link key={item.id} to={`/item/${item.id}/recommendations`}>
//               {/* <p> {item.id} </p> */}
//                 <img
//                   src={item.image}
//                   alt={`Item ${item.id}`}
//                   style={{ width: '200px', height: 'auto', margin: '10px' }}
//                 />
//               </Link>
//             ))}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default ItemsPage;

import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import navbarimg from '../assets/nav_bar.jpg';
import sidebar from '../assets/sidebar.jpg';
import '../styles/ItemPage.css'; 

const ItemsPage = () => {
  const { aesthetic, type } = useParams();
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  const types = ['tops', 'pants', 'skirts'];

  useEffect(() => {
    axios.get(`http://localhost:8000/api/items/?category=${aesthetic}&clothing_type=${type}`)
      .then(response => setItems(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, [aesthetic, type]);

  return (
    <div>
      <header>
        <img className='navbar' src={navbarimg} alt="Navbar" />
      </header>
      <div className="content">
        <aside>
          <img src={sidebar} alt="Sidebar" />
        </aside>
        <main>
          <h1>{type.charAt(0).toUpperCase() + type.slice(1)} in {aesthetic.charAt(0).toUpperCase() + aesthetic.slice(1)}</h1>
          <div className="type-list">
            {types.map(t => (
              <button
                key={t}
                className={`type-button ${t === type ? 'selected-button' : ''}`}
                onClick={() => navigate(`/category/${aesthetic}/${t}`)}
              >
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>
          <div className="image-gallery">
            {items.map(item => (
              <Link key={item.id} to={`/item/${item.id}/recommendations`} state={{ imageUrl: item.image }}>
                <img
                  src={item.image}
                  alt={`Item ${item.id}`}
                  style={{ width: '220px', height: '300px', margin: '2rem', boxShadow:'0 2px 4px rgba(0, 0, 0, 0.1)'}}
                />
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ItemsPage;
