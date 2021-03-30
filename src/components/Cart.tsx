import { useSelector } from "react-redux"
import { State } from "../store";
import { CartItem } from "../store/modules/cart/types";

const Cart = () => {

  const cart = useSelector<State, CartItem[]>(state => state.cart.items)



  return (
    <table>
      <thead>
        <tr>
          <td>Produto</td>
          <td>Preço</td>
          <td>Quantidade</td>
          <td>Subtotal</td>
        </tr>
      </thead>
      <tbody>
        {cart.map(item => (
          <tr key={item.product.id}>
            <td>{item.product.title}</td>
            <td>{item.product.price}</td>
            <td>{item.quantity}</td>
            <td>{(item.product.price * item.quantity).toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Cart