// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import navbarimg from '../assets/nav_bar.jpg';
// import sidebar from '../assets/sidebar.jpg';
// import '../styles/RecommendationsPage.css'; 
// const RecommendationsPage = () => {
//   const { id } = useParams();
//   const [recommendations, setRecommendations] = useState([]);

//   useEffect(() => {
//     axios.get(`http://localhost:8000/api/items/${id}/recommendations/`)
//       .then(response => setRecommendations(response.data))
//       .catch(error => console.error('Error fetching recommendations:', error));
//   }, [id]);

//   return (
//     <div>
//        <header>
//         <img className='navbar' src={navbarimg} alt="Navbar" />
//       </header>
//       <div className='content'>
//       <aside>
//           <img src={sidebar} alt="Sidebar" />
//         </aside>
//         <main>
//       <h1>Recommendations</h1>
      
//       <div className="image-gallery">
//         {recommendations.map((rec, index) => (
//           <img
//             key={index}
//             src={`http://localhost:8000${rec.image}`}
//             alt={`Recommendation ${index}`}
//             style={{ width: '200px', height: 'auto', margin: '10px' }}
//           />
//         ))}
//         </div>
//         </main>
//       </div>
      
//     </div>
//   );
// };

// export default RecommendationsPage;
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import navbarimg from '../assets/nav_bar.jpg';
import sidebar from '../assets/sidebar.jpg';
import '../styles/RecommendationsPage.css'; 

const RecommendationsPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const [recommendations, setRecommendations] = useState([]);
  const [originalImage, setOriginalImage] = useState(location.state?.imageUrl);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/items/${id}/recommendations/`)
      .then(response => setRecommendations(response.data))
      .catch(error => console.error('Error fetching recommendations:', error));
  }, [id]);

  return (
    <div>
      <header>
        <img className='navbar' src={navbarimg} alt="Navbar" />
      </header>
      <div className='content'>
        <aside>
          <img src={sidebar} alt="Sidebar" />
        </aside>
        <main>
          <h1>Recommendations</h1>
          <div style={{ display: 'flex',flexDirection: 'row'}}>
          {originalImage && (
            <div style={{flex: '1'} }>
              {/* <h2>Original Item</h2> */}
              <div className="rec-text">
              <h2 style={{ fontFamily:'sans-serif' ,fontSize:'2.5em',fontWeight:'600' ,textAlign:'center', color:'white'   }}> Build your outfit !</h2>
              </div>
              <img
                src={originalImage}
                alt="Original"
                style={{ width: '400px', height: '80vh',marginLeft:'10%', marginTop:'5%',  }}
              />

            </div>
          )}
          {/* <div>
          <h2 style={{ fontFamily:'sans-serif' ,fontSize:'2.5em',fontWeight:'600' ,textAlign:'center',   color: "#ff796d" }}>Try it with !</h2>
          </div> */}
          <div className="image-gallery"  style={{display: 'flex',flexDirection:'row', flex:'1.5'}}>
            
            {recommendations.map((rec, index) => (

              <img
                key={index}
                src={`http://localhost:8000${rec.image}`}
                alt={`Recommendation ${index}`}
                style={{ width: '220px', height: '300px', margin: '10px'}}
              />
            ))}
          </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default RecommendationsPage;
