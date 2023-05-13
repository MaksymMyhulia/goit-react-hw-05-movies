import React from 'react';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
export const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  );
};
