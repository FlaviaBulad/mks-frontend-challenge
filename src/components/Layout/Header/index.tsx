import Cart from "@/components/Cart";
import Logo from "../Logo";
import { StyledHeader } from "./StyledHeader";

function Header() {
  return (
    <>
      <StyledHeader>
        <Logo />
        <Cart />
      </StyledHeader>
    </>
  );
}

export default Header;
