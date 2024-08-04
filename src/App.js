import { Route, Routes } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop.jsx';
import './css/style.css';
import Main from './pages/Main/Main.jsx';
import Project from './pages/Project/Project.jsx';
import TeamIntro from './pages/TeamIntro';
import Contact from './pages/Contact';
import BackEnd from './pages/TracksIntro/BackEnd';
import FrontEnd from './pages/TracksIntro/FrontEnd';
import Pm_Design from './pages/TracksIntro/Pm_Design';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import CreateProject from './pages/Project/CreateProject.jsx';

function App() {
  return (
    <>
      <Nav />
      <div className="App text-white mt-[100px]">
        <Routes>
          <Route path="/" element={<Main />} />
          {/* project(createProject는 추후 경로 이동) */}
          <Route path="/project" element={<Project />} />
          <Route path="/createProject" element={<CreateProject />} />
          <Route path="/teamIntro" element={<TeamIntro />} />
          <Route path="/contact" element={<Contact />} />

          {/* track */}
          <Route path="/backend" element={<BackEnd />} />
          <Route path="/frontend" element={<FrontEnd />} />
          <Route path="/pm_design" element={<Pm_Design />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}

export default App;
