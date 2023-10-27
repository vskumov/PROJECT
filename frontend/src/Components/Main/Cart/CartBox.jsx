import { useSelector } from "react-redux";
import ProductInCart from "./Elements/ProductInCart";

function CartBox() {
  const cartList = useSelector((state) => state.cart);

  return (
    <section className="cart__box">
      {cartList.cartList.map((product) => (
        <ProductInCart key={product.id} product={product} />
      ))}
    </section>
  );
}

export default CartBox;
