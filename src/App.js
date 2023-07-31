import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from 'react';

import renderRoutes from './routes';
function App() {
  return (
    <Suspense fallback={<div>Loading........</div>}>
      <BrowserRouter>
        <Routes>
          {renderRoutes()}
        </Routes>
      </BrowserRouter>
    </Suspense>)
}

export default App;
{/* <Routes>
        HomeTemplate - localhost: 3000
        <Route path="" element={<Hometemplate />}>
          <Route path="" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="list-movie" element={<ListMoviePage />} />
        </Route>
        HomeTemplate - localhost: 3000
        <Route path="admin" element={<AdminTemplate />}>
          <Route path="dasboard" element={<Dasboard />} />
          <Route path="add-user" element={<AddUser />} />
        </Route>
      </Routes> */}