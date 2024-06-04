import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import { categoriesIsLoadingSelector, categoriesSelector } from '../../store/categories/categories.selector';
import Spinner from '../../components/spinner/spinner.component';

const CategoriesPreview = () => {
  const categoriesMap = useSelector(categoriesSelector);
  const isLoading = useSelector(categoriesIsLoadingSelector);

  return (
    <>{isLoading ? <Spinner /> :
      <Fragment>
        {Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })}
      </Fragment>
    }</>
  );
};

export default CategoriesPreview;
