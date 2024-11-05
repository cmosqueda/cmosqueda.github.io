import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import ArtGallery from "./pages/artgallery";
import NotFound from "./pages/notfound";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/projects" element={<Projects></Projects>}></Route>
        <Route path="/artgallery" element={<ArtGallery></ArtGallery>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </>
  );
}

export default AppRoutes;
