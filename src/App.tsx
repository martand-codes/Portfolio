import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './Components/Layout';
import { Home } from './Pages/Home';
import { Systems } from './Pages/Systems';
import { Incidents } from './Pages/Incidents';

import { Arsenal } from './Pages/Arsenal';
import { Algorithms } from './Pages/Algorithms';
import { Academics } from './Pages/Academics';
import { Resume } from './Pages/Resume';
import { NotFound } from './Pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="systems" element={<Systems />} />
          <Route path="incidents" element={<Incidents />} />

          <Route path="arsenal" element={<Arsenal />} />
          <Route path="algorithms" element={<Algorithms />} />
          <Route path="academics" element={<Academics />} />
          <Route path="resume" element={<Resume />} />
          
          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
