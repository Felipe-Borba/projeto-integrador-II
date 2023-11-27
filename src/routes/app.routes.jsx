import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Cadastro } from "../pages/Cadastro";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cadastro" element={<Cadastro />}/>
      {/* <Route path="/dish/create" element={<DishCreate />} />
      <Route path="/dish/view/:id" element={<DishView />} />
      <Route path="/dish/update/:id" element={<DishUpdate />} /> */}
    </Routes>
  );
};
