
import { useProduct } from "../../../contex/product.context";
import { FilterHeadName } from "./FilterHeadName";

export function BrandFilter() {
  const {
    state: { brandFilters },
    productDispatch
  } = useProduct();
  return (
    <div className='brand__filter '>
      <FilterHeadName name="Select Brand" />
    {
    brandFilters &&
    brandFilters.map((item) => {
      return (
        <div className="filter__type-brand filter__info">
          <input
            onChange={(e) =>
              productDispatch({
                type: "FILTER_BRAND",
                payload: e.target.id
              })
            }
            checked={item.checked}
            className="filter__type-input"
            id={item._id}
            type="checkbox"
          />
          <label className="filter__type-name">{item.name}</label>
        </div>
      );
    })}
  </div>
  );
}