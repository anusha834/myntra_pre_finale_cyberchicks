// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// const constants = () => {
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     // Fetch image URLs from the API
//     axios.get('http://localhost:8000/api/items/')
//       .then(response => setImages(response.data))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);
//   const urls=[]
//   return (
//     <div>
//       <h1>Image Gallery</h1>
//       <div className="image-gallery">
//         {images.map((item) => (
//           <img
//             key={item.id}
//             src={`http://localhost:8000${item.image_path2}`}
//             alt={`Item ${item.id}`}
//             style={{ width: '200px', height: 'auto', margin: '10px' }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageGallery;


