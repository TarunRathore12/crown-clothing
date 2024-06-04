import { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ProductCard from '../../components/product-card/product-card.component';
import { CategoryContainer, Title } from './category.styles';
import { categoriesIsLoadingSelector, categoriesSelector } from '../../store/categories/categories.selector';
import Spinner from '../../components/spinner/spinner.component';

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(categoriesSelector);
  const [products, setProducts] = useState(categoriesMap[category]);
  const isLoading = useSelector(categoriesIsLoadingSelector);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      {
        isLoading ? <Spinner /> :
          <Fragment>
            <Title>{category.toUpperCase()}</Title>
            <CategoryContainer>
              {products &&
                products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </CategoryContainer>
          </Fragment>
      }
    </>
  );
};

export default Category;
