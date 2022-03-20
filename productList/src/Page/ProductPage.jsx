import { ProductFilters } from "../components/ShowProductFilters/ProductFilters";
import { useProduct } from "../contex/product.context";
import { getFilteredItems, getSortedProduct } from "../utils/index";
import { ProductCard } from "../components/ProductCard/ProductCard";

import "./productpage.styles.css";

export function ProductPage() {
  const {
    state: {
      productItems,
      sortBy,
      brandFilters,
      sizeFilters,
      categoryFilters,
      sliderValue
    }
  } = useProduct();

  const sortedData = productItems && getSortedProduct(productItems, sortBy);
  const filterdData =
    sortedData &&
    getFilteredItems(sortedData, {
      sliderValue,
      brandFilters,
      sizeFilters,
      categoryFilters
    });

  return (
    <div className="product-page">
      <section className="navbar">Product Listing AssignMent</section>
      <section className="product-page__left">
        <ProductFilters />
      </section>
      <section className="product-page__main">
        {filterdData &&
          filterdData.map((items) => {
            return <ProductCard key={items.id} items={items} />;
          })}
      </section>
      <section className="product-page__right"></section>
    </div>
  );
}
