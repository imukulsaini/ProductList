import { useProduct } from "../../../contex/product.context";
import { FilterHeadName } from "./FilterHeadName";

export function SizeFilters() {
  const {
    state: { sizeFilters },
    productDispatch
  } = useProduct();
  return (
    <div className='size__filters'> 
      <FilterHeadName name="Select Size " />
    {sizeFilters &&
    sizeFilters.map((item) => {
      return (
        <div className="filter__info">
          <input
            onChange={(e) =>
              productDispatch({
                type: "FILTER_SIZE",
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
