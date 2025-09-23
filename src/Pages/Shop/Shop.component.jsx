// import SHOP_DATA from '../../shop-data.json';

// const Shop = () => {
//   return (
//     <>
//       {SHOP_DATA.map(({ id, name }) => (
//         <div key={id}>
//           <h1>{name}</h1>
//         </div>
//       ))}
//     </>
//   );
// };

// export default Shop;

import { useContext } from "react";
import  {ProductContext} from "../../contexts/products.context"
import ProductCard from "../../components/ProductCards/ProductCard";
import './Shop.style.scss'
 const Shop = () => {
  const {products } = useContext(ProductContext)
  return (
    <div className="product-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product}/>
      ))}
    </div>
  );
};
export default Shop;
