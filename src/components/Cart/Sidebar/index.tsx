import { SidebarContainer } from "./StyledSidebar";

import { IoMdCloseCircle } from "react-icons/io";
import { IconContext } from "react-icons";

function Sidebar() {
  return (
    <SidebarContainer>
      <h2 className="cart-title">
        Carrinho
        <br />
        de compras
      </h2>
      <IconContext.Provider value={{ className: "react-icons" }}>
        <IoMdCloseCircle />
      </IconContext.Provider>

      <footer className="footer-wrap">
        <div className="total">
          <p>Total: </p>
          <p className="subtotal">{"R$00,00"}</p>
        </div>

        <button className="checkout-btn">Finalizar Compra</button>
      </footer>
    </SidebarContainer>
  );
}

export default Sidebar;
