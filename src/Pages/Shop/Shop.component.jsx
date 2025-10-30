// // import { useContext, Fragment } from "react";
// // import  {ProductContext} from "../../contexts/products.context.jsx"
// // import ProductCard from "../../components/ProductCards/ProductCard";
// // import './Shop.style.scss'
// // import CategoriesPreview from '../../components/CategoryPreview/CategoryPreview.jsx'
// // import { Route, Routes } from "react-router-dom";
// // import Category from '../Categories/Category.jsx'


// // const Shop = () => {
// //   // const {categoriesMap } = useContext(ProductContext)

// //   //   return (
// //   //   <Fragment>
// //   //     {Object.keys(categoriesMap).map((title) => (
// //   //       <Fragment key={title}>
// //   //         <h2>{title}</h2>
// //   //         <div className='product-container'>
// //   //           {categoriesMap[title].map((product) => (
// //   //             <ProductCard key={product.id} product={product} />
// //   //           ))}
// //   //         </div>
// //   //       </Fragment>
// //   //     ))}
// //   //   </Fragment>
// //   // );
// // return (
// //     <Routes>
// //       <Route index element={<CategoriesPreview />} />
// //       <Route path=':category' element={<Category />} />
// //     </Routes>
// //   );
// // };
// // export default Shop;

import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../../Pages/Categories/CategoriesPreview.jsx";

import Category from "../Categories/Category.jsx";

const Shop = () => {
  return (
    <Routes>
      {/* Default /shop route shows all category previews */}
      <Route index element={<CategoriesPreview />} />
      {/* /shop/:category shows a single category */}
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
