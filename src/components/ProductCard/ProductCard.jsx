import "./productcard.styles.css";

export function ProductCard({ items }) {
  const { name, brand, category, price, size, image } = items;
  return (
    <div
      style={{ border: "1px solid black", padding: "1px", margin: "3px" }}
      className="product-card"
    >
      <div className="product-image">
        <img className="image" src={image} alt="" />
      </div>
      <h3 className="product-name">{name}</h3>
      <span className="product-price">
        Rs : <strong>{price} /-</strong>
      </span>
      <span className="product-size">Size : {size}</span>
      <p className="product-brand">Brand : {brand}</p>
      <span className="product-category">For : {category}</span>
    </div>
  );
}
