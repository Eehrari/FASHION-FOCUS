import { useContext } from "react";
import { ContextCart } from "../store/shopping-cart-context";

export default function Product({
  id,
  image,
  title,
  price,
  description
}) {
  const { handleAddItemToCart } = useContext(ContextCart);
  return (
    <article className="product">
      <img src={image} alt={title} />
      <div className="product-content">
        <div>
          <h3>{title}</h3>
          <p className='product-price'>${price}</p>
          <p>{description}</p>
        </div>
        <p className='product-actions'>
          <button onClick={() => handleAddItemToCart(id)}>Add to Cart</button>
        </p>
      </div>
    </article>
  );
}
