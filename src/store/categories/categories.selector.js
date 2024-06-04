import { createSelector } from "reselect";

const categoriesReducer = (state) => state.categories;

export const categoriesSelector = createSelector(
  [categoriesReducer],
  (categoriesReducer) => categoriesReducer.categoriesMap
);

export const categoriesIsLoadingSelector = createSelector(
  [categoriesReducer],
  (categoriesReducer) => categoriesReducer.isLoading
);

export const categoriesErrorSelector = createSelector(
  [categoriesReducer],
  (categoriesReducer) => categoriesReducer.error
);