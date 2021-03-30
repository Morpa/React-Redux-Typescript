import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../store/modules/cart/actions";
import { Product } from "../store/modules/cart/types";

type CatalogItemProps = {
  product: Product
}

const CatalogItem = ({ product }: CatalogItemProps) => {
  const dispatch = useDispatch()

  const handleProductToCart = useCallback(
    () => {
      dispatch(addProductToCart(product))
    },
    [dispatch, product],
  )

  return (
    <article>
      <strong>{product.title}</strong> {" - "}
      <span>{product.price}</span> {" "}
      <button
        type='button'
        onClick={handleProductToCart}
      >
        Comprar
      </button>
    </article>
  );
};

export default CatalogItem;
