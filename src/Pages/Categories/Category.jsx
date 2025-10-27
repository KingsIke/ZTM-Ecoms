import { useContext, useEffect, useState, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../../contexts/products.context';
import ProductCard from '../../components/ProductCards/ProductCard';
import './category.style.scss';


const Category = () => {
  const { category } = useParams();
  const { categoriesMap, isLoading } = useContext(ProductContext);
  const [products, setProducts] = useState(categoriesMap[category] || []);

  useEffect(() => {
    setProducts(categoriesMap[category] || []);
  }, [category, categoriesMap]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!products || products.length === 0) {
    return <div>Loading {category} products...</div>;
  }

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Fragment>
  );
};


export default Category;