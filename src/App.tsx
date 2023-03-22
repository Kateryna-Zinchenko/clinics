import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Suppliers from './components/screens/suppliers/Suppliers';
import store from './store';

export enum Path {
  Suppliers = '/suppliers',
}

export type AppDispatch = typeof store.dispatch;

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path={Path.Suppliers} element={<Suppliers />} />
    </Routes>
  </BrowserRouter>
);

export default App;
