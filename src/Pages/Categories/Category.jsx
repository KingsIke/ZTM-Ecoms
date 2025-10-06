import { useContext, useEffect, useState, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../../contexts/products.context';
import ProductCard from '../../components/ProductCards/ProductCard';
import './category.style.scss';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(ProductContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className='category-title'>{category.toUpperCase()}</h2>
      <div className='category-container'>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;