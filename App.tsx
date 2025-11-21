import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import BrandModels from './pages/BrandModels';
import ModelYears from './pages/ModelYears';
import BikeDetails from './pages/BikeDetails';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/brand/:brandId" element={<BrandModels />} />
          <Route path="/brand/:brandId/model/:modelId" element={<ModelYears />} />
          <Route path="/brand/:brandId/model/:modelId/year/:year" element={<BikeDetails />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;