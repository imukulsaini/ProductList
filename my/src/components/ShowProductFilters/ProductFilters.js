import { BrandFilter } from "./components/BrandFilters";
import { CategoryFilters } from "./components/CategoryFilters";
import { ClearFilters } from "./components/ClearFilters";
import { PriceRangeFilters } from "./components/PriceRangeFilters";
import { SizeFilters } from "./components/SizeFilters";
import { SortPrice} from "./components/SortPrice";
import "./productfilters.styles.css";

export function ProductFilters() {
  return (
    <div className="product-filters__show">
      <h3>Filters</h3>
      <ClearFilters />
      <div className="show__filters">
        <SortPrice/>
        <PriceRangeFilters />
        <BrandFilter />
        <SizeFilters />
        <CategoryFilters />
      </div>
    </div>
  );
}
