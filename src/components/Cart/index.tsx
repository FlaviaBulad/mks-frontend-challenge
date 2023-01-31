import { TiShoppingCart } from "react-icons/ti";
import { IconContext } from "react-icons";

import { CartContainer } from "./StyledCart";
import Sidebar from "./Sidebar";

function Cart() {
  return (
    <>
      <CartContainer>
        <div className="wrapper">
          <IconContext.Provider value={{ className: "react-icons" }}>
            <TiShoppingCart />
            <Sidebar />
          </IconContext.Provider>
          <span className="cart-item-number">0</span>
        </div>
      </CartContainer>
    </>
  );
}

export default Cart;
