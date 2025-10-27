import { createContext, useState, useEffect } from 'react';
// import { getCategoriesAndDocuments } from '../utils/firebase.utils'; // Adjust path
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";


export const ProductContext = createContext({
  categoriesMap: {},
  isLoading: false,
});

export const ProductProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoryMap = await getCategoriesAndDocuments();
        setCategoriesMap(categoryMap);
      } catch (error) {
        console.error('Error in ProductProvider fetch:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCategories();
  }, []);

  const value = { categoriesMap, isLoading };

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};