import { createContext, useContext, useReducer } from "react";


import { products } from "../Data/productData";
import { brandsData } from "../Data/brandData";
import { sizeData } from "../Data/sizeData";
import { categoryData } from "../Data/categoryData";
import { productReducer } from "./product.reducer.js";


const productContext = createContext();

const initialState = {
  productItems: products,
  sortBy: "",
  sliderValue: 100000,
  sizeFilters: sizeData,
  brandFilters: brandsData,
  categoryFilters: categoryData
};

export default function ProductProvider({ children }) {
  const [state, productDispatch] = useReducer(productReducer, initialState);

  return (
    <productContext.Provider value={{ state, productDispatch }}>
      {children}
    </productContext.Provider>
  );
}

export function useProduct() {
  return useContext(productContext);
}
