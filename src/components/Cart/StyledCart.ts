import styled from "styled-components";

export const CartContainer = styled.div`
  width: 5.625rem;
  height: 2.813rem;

  display: flex;

  background: #ffffff;
  border-radius: 8px;

  cursor: pointer;

  @media (max-width: 768px) {
    width: 3.25rem;
    height: 1.625rem;
  }

  div {
    display: flex;
    align-items: center;

    gap: 0.5rem;
    margin: 0 auto;

    @media (max-width: 768px) {
      gap: 0.25rem;
    }
  }
  .react-icons {
    font-size: 1.563rem;
    color: #000000;
    @media (max-width: 768px) {
      font-size: 0.875rem;
    }
  }
  span {
    font-family: "Montserrat";
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.375rem;

    color: #000000;

    @media (max-width: 768px) {
      font-size: 0.75rem;
      line-height: 0.875rem;
    }
  }
`;
