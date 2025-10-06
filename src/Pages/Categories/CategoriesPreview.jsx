import { Fragment, useContext } from 'react';
import CategoryPreview from '../../components/CategoryPreview/CategoryPreview'
import { ProductContext } from '../../contexts/products.context';

const CategoriesPreview = () => {
    const {categoriesMap} = useContext(ProductContext);
return (
  <Fragment>
  {
      Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products= {products} />
        )
      })
    }
  </Fragment> 
)
};
export default CategoriesPreview;
