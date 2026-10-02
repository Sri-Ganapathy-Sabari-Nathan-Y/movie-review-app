import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Search } from "../pages/Search";
import { MovieDetail } from "../pages/MovieDetail";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Search" element={<Search />}></Route>
      <Route path="/MovieDetail/:id" element={<MovieDetail />}></Route>
    </Routes>
  );
};
