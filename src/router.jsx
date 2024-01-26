import { Route, Routes } from "react-router-dom";
import About from "./components/about";
import Home from "./components/home";
import Menu from "./components/menu";
import Feature from "./components/feature";
import Gallery from "./components/gallery";
import Blog from "./components/blog";
import Contacts from "./components/contacts";



function Routers() {
  return (
    <Routes>
      
      <Route path="/" element={<Home/>}/>
     
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/feature" element={<Feature/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/contacts" element={<Contacts/>}/>
      
      <Route path="/about" element={<About />} />

    </Routes>
   
   
  );
}

export default Routers;
