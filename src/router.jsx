import { Route, Routes } from "react-router-dom";
import About from "./container/about/about";
import Home from "./container/home/home";
import Menu from "./container/menu/menu";
import Feature from "./container/features/feature";
<<<<<<< HEAD
import Gallery from "./container/gallery/gallery";
import Blog from "./container/blog/blog";
import Contacts from "./container/contacts/contacts";
=======

import Details from "./container/home/components/details";
import Login from "./container/auth/components/login";
>>>>>>> 9f64a8e06a6580ba8cb7c13d09ff22708aeac9fc



function Routers() {
  return (
    <Routes>
      
<<<<<<< HEAD
      <Route path="/" element={<Home/>}/>
     
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/feature" element={<Feature/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/contacts" element={<Contacts/>}/>
      
      <Route path="/about" element={<About />} />
=======
      <Route path="/home" element={<Home/>}/>
     
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/feature" element={<Feature/>}/>
      
      <Route path="/about" element={<About />} />
      <Route path="/details/:id" element={<Details/>}/>
      <Route path="/" element={<Login/>}/>

>>>>>>> 9f64a8e06a6580ba8cb7c13d09ff22708aeac9fc

    </Routes>
   
   
  );
}

export default Routers;
