import { useProduct } from "../../../contex/product.context";

export function PriceRangeFilters() {
  const {
    state: { sliderValue },
    productDispatch
  } = useProduct();
  return (
    <>
      <label>Select Price Range : </label>
      <span> 20 - {sliderValue}</span>
      <br />
      <input
        type="range"
        min="20"
        value={sliderValue}
        onChange={(e) => {
          productDispatch({
            type: "SLIDER_CHANGE_PRICE",
            payload: e.target.value
          });
        }}
        max="10000"
        id="priceSlider"
      />
    </>
  );
}
