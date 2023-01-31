import { CardContainer } from "./StyledCard";
import Image from "next/image";

function Card() {
  return (
    <CardContainer>
      <div className="image-wrapper"></div>
      <button className="card-button">COMPRAR</button>
    </CardContainer>
  );
}

export default Card;
