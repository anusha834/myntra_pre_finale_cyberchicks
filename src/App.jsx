// // src/App.jsx
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const App = () => {
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     // Fetch image URLs from the Django API
//     axios.get('http://localhost:8000/api/items/')
//       .then(response => setImages(response.data))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <div>
//       <h1>Image Gallery</h1>
//       <div className="image-gallery">
//         {images.map((item) => (
//           <img
//             key={item.id}
//             // src={`http://localhost:8000/media/${item.image_path2}`} // Construct the image URL
//             src={item.image}// Construct the image URL
//             alt={`Item ${item.id}`}
//             style={{ width: '200px', height: 'auto', margin: '10px' }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;
    // 
    // import React, { useEffect, useState } from 'react';
    // import axios from 'axios';
    
    // const App = () => {
    //   const [images, setImages] = useState({
    //     boho: [],
    //     egirl: [],
    //     oldmoney: []
    //   });
    
    //   // Helper function to normalize category names
    //   const normalizeCategory = (category) => {
    //     switch (category.toLowerCase()) {
    //       case 'boho':
    //         return 'boho';
    //       case 'e-girl':
    //         return 'egirl';
    //       case 'oldmoney':
    //         return 'oldmoney';
    //       default:
    //         return null; // Handle unknown categories or add more categories as needed
    //     }
    //   };
    
    //   useEffect(() => {
    //     // Fetch image URLs from the Django API
    //     axios.get('http://localhost:8000/api/items/')
    //       .then(response => {
    //         const data = response.data;
    //         // Categorize images based on their normalized category
    //         const categorizedImages = data.reduce((acc, item) => {
    //           const normalizedCategory = normalizeCategory(item.category);
    //           if (normalizedCategory && acc[normalizedCategory]) {
    //             acc[normalizedCategory].push(item.image); // Assuming item.image contains the relative path
    //           }
    //           return acc;
    //         }, {
    //           boho: [],
    //           egirl: [],
    //           oldmoney: []
    //         });
    //         setImages(categorizedImages);
    //       })
    //       .catch(error => console.error('Error fetching data:', error));
    //   }, []);
    
    //   return (
    //     <div>
    //       <h1>Image Gallery</h1>
    //       {Object.keys(images).map((category) => (
    //         <div key={category} className="category-section">
    //           <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
    //           <div className="image-gallery">
    //             {images[category].map((image, index) => (
    //               <img
    //                 key={index}
    //                 src={image} // Construct the image URL
    //                 alt={`Item ${index}`}
    //                 style={{ width: '200px', height: 'auto', margin: '10px' }}
    //               />
    //             ))}
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   );
    // };
    
    // export default App;

// import './App.css';

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const App = () => {
//   const [images, setImages] = useState({
//     boho: [],
//     egirl: [],
//     oldmoney: []
//   });
//   const [selectedAesthetic, setSelectedAesthetic] = useState(null);

//   // Helper function to normalize category names
//   const normalizeCategory = (category) => {
//     switch (category.toLowerCase()) {
//       case 'boho':
//         return 'boho';
//       case 'e-girl':
//         return 'egirl';
//       case 'oldmoney':
//         return 'oldmoney';
//       default:
//         return null; // Handle unknown categories or add more categories as needed
//     }
//   };

//   useEffect(() => {
//     // Fetch image URLs from the Django API
//     axios.get('http://localhost:8000/api/items/')
//       .then(response => {
//         const data = response.data;
//         // Categorize images based on their normalized category
//         const categorizedImages = data.reduce((acc, item) => {
//           const normalizedCategory = normalizeCategory(item.category);
//           if (normalizedCategory && acc[normalizedCategory]) {
//             acc[normalizedCategory].push(item.image); // Assuming item.image contains the relative path
//           }
//           return acc;
//         }, {
//           boho: [],
//           egirl: [],
//           oldmoney: []
//         });
//         setImages(categorizedImages);
//       })
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <div>
//       <h1>Image Gallery</h1>
//       <div className="aesthetic-list">
//         {Object.keys(images).map((category) => (
//           <button
//             key={category}
//             onClick={() => setSelectedAesthetic(category)}
//             style={{
//               margin: '10px',
//               padding: '10px 20px',
//               cursor: 'pointer',
//               backgroundColor: selectedAesthetic === category ? 'lightblue' : 'white'
//             }}
//           >
//             {category.charAt(0).toUpperCase() + category.slice(1)}
//           </button>
//         ))}
//       </div>
//       {selectedAesthetic && (
//         <div className="category-section">
//           <h2>{selectedAesthetic.charAt(0).toUpperCase() + selectedAesthetic.slice(1)}</h2>
//           <div className="image-gallery">
//             {images[selectedAesthetic].map((image, index) => (
//               <img
//                 key={index}
//                 src={image} // Construct the image URL
//                 alt={`Item ${index}`}
//                 style={{ width: '200px', height: 'auto', margin: '10px' }}
//               />
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;


// import './App.css';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const App = () => {
//   const [images, setImages] = useState({
//     boho: [],
//     egirl: [],
//     oldmoney: []
//   });
//   const [selectedAesthetic, setSelectedAesthetic] = useState(null);
//   const [recommendations, setRecommendations] = useState([]);

//   const normalizeCategory = (category) => {
//     switch (category.toLowerCase()) {
//       case 'boho':
//         return 'boho';
//       case 'e-girl':
//         return 'egirl';
//       case 'oldmoney':
//         return 'oldmoney';
//       default:
//         return null;
//     }
//   };

//   useEffect(() => {
//     axios.get('http://localhost:8000/api/items/')
//       .then(response => {
//         const data = response.data;
//         const categorizedImages = data.reduce((acc, item) => {
//           const normalizedCategory = normalizeCategory(item.category);
//           if (normalizedCategory && acc[normalizedCategory]) {
//             acc[normalizedCategory].push(item); // Push the entire item object
//           }
//           return acc;
//         }, {
//           boho: [],
//           egirl: [],
//           oldmoney: []
//         });
//         setImages(categorizedImages);
//       })
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   const handleImageClick = (image) => {
//     axios.get(`http://localhost:8000/api/items/${image.id}/recommendations/`)
//       .then(response => {
//         setRecommendations(response.data); // Update state with recommendations
//       })
//       .catch(error => console.error('Error fetching recommendations:', error));
//   };


//   return (
//     <div>
//       <h1>Image Gallery</h1>
//       <div className="aesthetic-list">
//         {Object.keys(images).map((category) => (
//           <button
//             key={category}
//             onClick={() => setSelectedAesthetic(category)}
//             style={{
//               margin: '10px',
//               padding: '10px 20px',
//               cursor: 'pointer',
//               backgroundColor: selectedAesthetic === category ? 'lightblue' : 'white'
//             }}
//           >
//             {category.charAt(0).toUpperCase() + category.slice(1)}
//           </button>
//         ))}
//       </div>
//       {selectedAesthetic && (
//         <div className="category-section">
//           <h2>{selectedAesthetic.charAt(0).toUpperCase() + selectedAesthetic.slice(1)}</h2>
//           <div className="image-gallery">
//             {images[selectedAesthetic].map((image, index) => (
//               <img
//                 key={index}
//                 src={image.image} // Construct the full image URL
//                 alt={`Item ${index}`}
//                 style={{ width: '200px', height: 'auto', margin: '10px' }}
//                 onClick={() => handleImageClick(image)}
//               />
//             ))}
//           </div>
//         </div>
//       )}
//       {recommendations.length > 0 && (
//         <div className="recommendations-section">
//           <h2>Recommendations</h2>
//           <div className="image-gallery">
//             {recommendations.map((rec, index) => (
//               <img
//                 key={index}
//                 src={`http://localhost:8000${rec.image}`} // Construct the full image URL
//                 alt={`Recommendation ${index}`}
//                 style={{ width: '200px', height: 'auto', margin: '10px' }}
//               />
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import ItemsPage from './pages/ItemsPage';
import RecommendationsPage from './pages/RecommendationsPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/category/:aesthetic" element={<CategoryPage />} /> */}
        <Route path="/category/:aesthetic/:type" element={<ItemsPage />} />
        <Route path="/item/:id/recommendations" element={<RecommendationsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
