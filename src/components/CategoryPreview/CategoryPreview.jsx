// import { Link } from 'react-router-dom';
// // import './CategoryPreview.style.scss';
// import './categoryPreview.style.scss'

// import ProductCard from '../ProductCards/ProductCard';

// const CategoryPreview = ({ title, products }) => {
//   console.log('CategoryPreview props:', { title, products });

//   if (!title || !products || !Array.isArray(products)) {
//     console.warn('Invalid props in CategoryPreview:', { title, products });
//     return <div>No products available for this category.</div>;
//   }

//   return (
//     <div className="category-preview-container">
//       <h2>
//         <Link className="title" to={title} aria-label={`Shop ${title} category`}>
//           {title.toUpperCase()}
//         </Link>
//       </h2>
//       <div className="preview">
//         {products
//           .slice(0, 4) // Use slice for efficiency
//           .map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//       </div>
//     </div>
//   );
// };

// export default CategoryPreview;

// src/components/CategoryPreviewItem/CategoryPreviewItem.jsx
import { Link } from "react-router-dom";
import ProductCard from "../ProductCards/ProductCard.jsx";
import "./categoryPreview.style.scss";


const CategoryPreview = ({ title, products }) => {
  return (
     <div className="category-preview-container">

      <h2>
    <Link
          className="title"
          to={title}
          aria-label={`Shop ${title} category`}
        >
          {title.toUpperCase()}
        </Link>
      </h2>
           <div className="preview">

        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;