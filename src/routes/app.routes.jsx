import { Route, Routes } from "react-router-dom";
import { Cadastro } from "../pages/Cadastro";
import Feed from "../pages/Feed";
import { Home } from "../pages/Home";
import { Product } from "../pages/Product";
import { Sobre } from "../pages/Sobre";
import Login from "../pages/login";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/feed/:name" element={<Feed />} />
      <Route path="/product" element={<Product />} />
      <Route path="/Login" element={<Login />}/>
      {/* <Route path="/dish/create" element={<DishCreate />} />
      <Route path="/dish/view/:id" element={<DishView />} />
      <Route path="/dish/update/:id" element={<DishUpdate />} /> */}
    </Routes>
  );
};
