import { Route, Routes } from "react-router-dom";
import About from "./container/about/about";
import Home from "./container/home/home";
import Menu from "./container/menu/menu";
import Feature from "./container/features/feature";

import Details from "./container/home/components/details";
import Login from "./container/auth/components/login";

function Routers() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />

      <Route path="/menu" element={<Menu />} />
      <Route path="/feature" element={<Feature />} />

      <Route path="/about" element={<About />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

export default Routers;
