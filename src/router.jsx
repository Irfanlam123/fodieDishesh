import { Route, Routes } from "react-router-dom";
import About from "./container/about/about";
import Home from "./container/home/home";
import Menu from "./container/menu/menu";
import Feature from "./container/features/feature";
import Gallery from "./container/gallery/gallery";
import Blog from "./container/blog/blog";
import Contacts from "./container/contacts/contacts";



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
