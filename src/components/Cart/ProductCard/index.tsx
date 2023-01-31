import {
  Container,
  CountWrapper,
  CountButton,
  DeleteButton,
} from "./StyledProductCard";

function ProductCard() {
  return (
    <Container>
      <h3 className="product-name">product name</h3>
      <div className="responsive-wrapper">
        <CountWrapper>
          <p className="qtd">Qtd:</p>
          <CountButton>
            <button className="minus">-</button>
            <p className="amount">1</p>
            <button className="plus">+</button>
          </CountButton>
        </CountWrapper>
        <p>R$00,00</p>
      </div>
      <DeleteButton>x</DeleteButton>
    </Container>
  );
}

export default ProductCard;
