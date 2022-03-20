export function getFilteredItems(
  productData,
  { sliderValue, brandFilters, sizeFilters, categoryFilters }
) {
  const filterBrandItems = brandFilters.map(
    (item) => item.checked === true && item.name.toLowerCase()
  );
  const sizeFiltersItems = sizeFilters?.map(
    (item) => item.checked === true && item.name.toLowerCase()
  );

  const categoryFiltersItems = categoryFilters?.map(
    (item) => item.checked === true && item.name.toLowerCase()
  );

  return productData
    .filter((items) =>
      items.price > 10 && items.price < sliderValue ? items : null
    )
    .filter((item) =>
      filterBrandItems?.every((value) => value === false)
        ? item
        : filterBrandItems?.includes(item.brand.toLowerCase())
    )
  .filter((item) =>
    sizeFiltersItems.every((value) => value === false)
      ? item
      : sizeFiltersItems.includes(item.size.toLowerCase())
  )
  .filter((item) =>
  categoryFiltersItems.every((value) => value === false)
    ? item
    : categoryFiltersItems.includes(item.category.toLowerCase())
)

}




export function getSortedProduct(productData, sortBy) {
  if (sortBy && sortBy === "low-to-high") {
    return productData.sort((a, b) => a.price - b.price);
  }
  if (sortBy && sortBy === "high-to-low") {
    return productData.sort((a, b) => b.price - a.price);
  }
  return productData;
}





