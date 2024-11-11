// kebutuhan alami
import './App.css';

// kebutuhan tambahan
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "boxicons/css/boxicons.min.css";

// Kebutuhan react
import {Routes, Route} from "react-router-dom";
import NavHome from './components/header/nav-home';
import HeroHome from './components/hero/hero-home';
import Author from './components/author/author';
import Main from './components/main/main';


function App() {
  return (
    <Routes>
<<<<<<< HEAD
        <Route basename="/anime-project"
=======
        <Route
>>>>>>> 3582a9384c6248ca7c4e080b045ad2042f5de6dc
          path="/"
          element={
            <>
              <NavHome />
              <HeroHome />
              <Main />
            </>
          }
        />

        <Route basename="/anime-project" path="/author" element={<Author />} />
    </Routes>
  );
}

export default App;
