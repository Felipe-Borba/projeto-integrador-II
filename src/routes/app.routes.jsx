import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Cadastro } from "../pages/Cadastro";
import { Sobre } from "../pages/Sobre";
import HomeUser from "../pages/HomeUser";
import Login from "../pages/login";
import { Product } from "../pages/Product";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/usuario/:name" element={<HomeUser />} />
      <Route path="/product" element={<Product />} />
      <Route path="/Login" element={<Login />}/>
      {/* <Route path="/dish/create" element={<DishCreate />} />
      <Route path="/dish/view/:id" element={<DishView />} />
      <Route path="/dish/update/:id" element={<DishUpdate />} /> */}
    </Routes>
  );
};
