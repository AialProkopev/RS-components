import React from 'react';
import Layout from './components/Layout';
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

const routerObj = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<MainPage />} />
    <Route path="about" element={<AboutPage />} />
    <Route path="*" element={<ErrorPage />} />
  </Route>
);

const router = createBrowserRouter(routerObj);

export { router, routerObj };
