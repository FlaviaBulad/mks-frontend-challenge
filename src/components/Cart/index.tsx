import { TiShoppingCart } from "react-icons/ti";
import { IconContext } from "react-icons";

import { CartContainer } from "./StyledCart";

function Cart() {
  return (
    <>
      <CartContainer>
        <div className="wrapper">
          <IconContext.Provider value={{ className: "react-icons" }}>
            <TiShoppingCart />
          </IconContext.Provider>
          <span className="cart-item-number">0</span>
        </div>
      </CartContainer>
    </>
  );
}

export default Cart;
