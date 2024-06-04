import { createSelector } from "reselect";

const categoriesReducer = (state) => state.categories;

export const categoriesSelector = createSelector(
  [categoriesReducer],
  (categoriesReducer) => categoriesReducer.categoriesMap
);
