import { useProduct } from "../../../contex/product.context";
import { FilterHeadName } from "./FilterHeadName";

export function CategoryFilters() {
  const {
    state: { categoryFilters },
    productDispatch
  } = useProduct();

  return (
    <div className='category__filter'>
      <FilterHeadName name="Ideal For : "/>
    {categoryFilters &&
    categoryFilters.map((category) => {
      return (
        <div className="filter__info">
          <input
            onChange={(e) => {
              productDispatch({
                type: "FILTER_CATEGORY",
                payload: e.target.id
              });
            }}
            id={category._id}
            value={category}
            type="checkbox"
            checked={category.checked}
            className="filter__type-input"
          ></input>
          <label className="filter__type-name">{category.name}</label>
        </div>
      );
    })}
    </div>
  );
}