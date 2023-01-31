import styled from "styled-components";

export const SidebarContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 486px;
  top: 0;
  bottom: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  background: #0f52ba;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);

  @media (max-width: 768px) {
    max-width: 330px;
  }

  .cart-title {
    margin-top: 36px;
    padding-right: 250px;

    font-weight: 700;
    font-size: 1.6875rem;
    line-height: 2.0625rem;
    color: #ffffff;

    @media (max-width: 768px) {
      padding-right: 100px;
    }
  }
  .react-icons {
    position: absolute;
    right: 10%;
    top: 3.81%;
    bottom: 92.48%;

    font-size: 50px;
    fill: #000;
    cursor: pointer;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.8);
    }
  }

  .total {
    width: 100%;
    padding: 42px 47px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;

    & > p {
      font-weight: 700;
      font-size: 1.75rem;
      line-height: 0.9rem;

      color: #ffffff;
    }
  }
  .checkout-btn {
    width: 100%;
    height: 97px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 700;
    font-size: 1.75rem;
    line-height: 0.9rem;

    color: #ffffff;
    background: #000000;

    cursor: pointer;

    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.8);
    }

    @media (max-width: 768px) {
      height: 70px;

      font-size: 1.25rem;
      line-height: 1.3rem;
    }
  }
  .footer-wrap {
    width: 100%;
  }
`;
