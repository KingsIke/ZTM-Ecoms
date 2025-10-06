import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";
// import SHOP_DATA from "../shop-data.js";
// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";

export const ProductContext = createContext({
    categoriesMap: {},
});

export const  ProductsProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    // FOR CREATING THE COLLECTION IN DB

    // useEffect(()=> {
    //     addCollectionAndDocuments('categories', SHOP_DATA)
    // }, [])

      useEffect(() => {
        const getCategoriesMap = async () => {
            try {
                const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap);

                setCategoriesMap(categoryMap); // Update state with categoryMap
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };
        getCategoriesMap();
    }, []);
    const value = { categoriesMap };

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}