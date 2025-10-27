// src/components/CategoriesPreview/CategoriesPreview.jsx
import { Fragment, useContext } from "react";
import { ProductContext } from "../../contexts/products.context";
import CategoryPreview from '../../components/CategoryPreview/CategoryPreview.jsx';


const CategoriesPreview = () => {
  const { categoriesMap } = useContext(ProductContext);

  if (!categoriesMap || Object.keys(categoriesMap).length === 0) {
    return <div>No categories available.</div>;
  }

  return (
    <Fragment>
      {Object.entries(categoriesMap).map(([title, products]) => (
        <CategoryPreview key={title} title={title} products={products} />
      ))}
    </Fragment>
  );
};

export default CategoriesPreview;
