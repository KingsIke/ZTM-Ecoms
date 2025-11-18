import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../../Pages/Categories/CategoriesPreview.jsx";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils.js";
import {setCategoriesMap} from "../../store/category/category.action.js";
import Category from "../Categories/Category.jsx";

const Shop = () => {
 const dispatch = useDispatch(); 
    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const categoryMap = await getCategoriesAndDocuments();

          dispatch(setCategoriesMap(categoryMap));
        } catch (error) {
          console.error('Error in ProductProvider fetch:', error);
        }
      };
      fetchCategories();
    }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
