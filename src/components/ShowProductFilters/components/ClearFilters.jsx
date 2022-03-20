import { useProduct } from "../../../contex/product.context";

export function ClearFilters(){
  
  const { productDispatch } = useProduct();

  return <button
  onClick={()=>{
    productDispatch({
      type:"CLEAR_FILTERS",
  
    })
  }}
  className='clear__filters'> Clear Filters </button>
}