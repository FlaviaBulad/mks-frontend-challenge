import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 15px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #ffffff;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;

  position: relative;

  .product-name {
    width: 100%;
    max-width: 100px;
    margin-right: 5px;

    font-weight: 400;
    font-size: 0.8125rem;
    line-height: 1.0625rem;
    color: #2c2c2c;

    @media (max-width: 768px) {
      width: 100%;
      max-width: 100%;
      text-align: center;
    }
  }

  & > div > p {
    font-weight: 700;
    font-size: 14px;
    line-height: 1.0625rem;
    color: #000000;

    @media (max-width: 768px) {
      padding: 5px 8px;

      background: #373737;
      border-radius: 5px;

      font-weight: 700;
      font-size: 0.9375rem;
      line-height: 0.9375rem;
      color: #ffffff;
    }
  }

  & > div.responsive-wrapper {
    width: 100%;
    margin-top: 10px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }

  @media (max-width: 768px) {
    padding: 20px;

    flex-wrap: wrap;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const CountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .qtd {
    font-weight: 400;
    font-size: 0.625rem;
    line-height: 6px;

    color: #000000;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const CountButton = styled.div`
  background: #ffffff;
  border: 1.9px solid #bfbfbf;
  border-radius: 4px;

  @media (max-width: 768px) {
    border: 0.3px solid #bfbfbf;
  }

  & > button {
    width: 25px;
    height: 30px;

    background: #ffffff;
    @media (max-width: 768px) {
      font-size: 1.5rem;
      line-height: 1.6px;
    }
  }

  .amount {
    width: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-right: 0.2px solid #bfbfbf;
    border-left: 0.2px solid #bfbfbf;

    font-weight: 400;
    font-size: 0.625rem;
    line-height: 0.625rem;
    color: #000000;

    @media (max-width: 768px) {
      font-size: 1.2rem;
      line-height: 1.3px;
    }
  }
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: -6px;
  right: -6px;

  width: 20px;
  height: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 700;
  font-size: 0.875rem;
  line-height: 0rem;

  color: #ffffff;
  border-radius: 18px;
  background: #000000;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
  @media (max-width: 768px) {
    top: 9px;
    right: 14px;

    font-size: 2.625rem;
    font-size: 2.7rem;

    color: #000;
    background: none;
  }
`;
