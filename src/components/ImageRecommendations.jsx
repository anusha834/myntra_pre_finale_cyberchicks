// src/components/ImageRecommendations.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ImageRecommendations = () => {
  const { id } = useParams();
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    axios.get(`/api/items/${id}/recommendations`)
      .then(response => {
        setRecommendations(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the recommendations!', error);
      });
  }, [id]);

  return (
    <div>
      <h1>Recommendations</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {recommendations.map(rec => (
          <img key={rec.id} src={rec.image_path} alt={rec.clothing_type} style={{ width: '200px', margin: '10px' }} />
        ))}
      </div>
    </div>
  );
};

export default ImageRecommendations;
