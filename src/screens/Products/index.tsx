import Card from "@/components/Product/Card/Card";
import { ProductsContainer } from "./StyledProducts";
function Products() {
  return (
    <ProductsContainer>
      <ul className="card-wrapper"></ul>
      <li className="card-component">
        <Card />
      </li>
    </ProductsContainer>
  );
}
export default Products;
