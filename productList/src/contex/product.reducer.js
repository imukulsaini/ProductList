import { brandsData } from "../Data/brandData.js";
import { categoryData } from "../Data/categoryData";
import { sizeData } from "../Data/sizeData";

export function productReducer(state, action) {
  switch (action.type) {
    case "SLIDER_CHANGE_PRICE":
      return {
        ...state,
        sliderValue: action.payload
      };

    case "FILTER_SIZE": {
      return {
        ...state,
        sizeFilters: state.sizeFilters.map((item) =>
          item._id === action.payload
            ? { ...item, checked: !item.checked }
            : item
        )
      };
    }
    case "FILTER_BRAND": {
      console.log("action vala payload", action.payload);
      return {
        ...state,
        brandFilters: state.brandFilters.map((item) =>
          item._id === action.payload
            ? { ...item, checked: !item.checked }
            : item
        )
      };
    }
    case "FILTER_CATEGORY":
      return {
        ...state,
        categoryFilters: state.categoryFilters.map((item) =>
          item._id === action.payload
            ? { ...item, checked: !item.checked }
            : item
        )
      };

    case "SORT":
      return {
        ...state,
        sortBy: action.payload
      };

    case "CLEAR_FILTERS": {
      return {
        ...state,
        sortBy: "",
        sliderValue: 100000,
        brandFilters: brandsData,
        categoryFilters: categoryData,
        sizeFilters: sizeData
      };
    }
    default:
      return {
        state
      };
  }
}
