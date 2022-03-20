import { useProduct } from "../../../contex/product.context";

export function SortPrice() {
  const { productDispatch } = useProduct();

  return (
    <>
      <h3>Sort Price</h3>
      <select
        onChange={(e) =>
          productDispatch({
            type: "SORT",
            payload: e.target.value
          })
        }
        name="sortChoice"
        id="price-sort"
      >
        <option id="clear">Please choose an option</option>

        <option value="low-to-high" id="low-sort">
          Price , Low to High
        </option>

        <option value="high-to-low" id="high-sort">
          Price , High To Low
        </option>
      </select>
    </>
  );
}
