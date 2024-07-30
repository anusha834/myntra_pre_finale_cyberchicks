
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
