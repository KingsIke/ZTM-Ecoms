import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../../Pages/Categories/CategoriesPreview.jsx";

import Category from "../Categories/Category.jsx";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
