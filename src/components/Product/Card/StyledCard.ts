import styled from "styled-components";

export const CardContainer = styled.div`
  width: 13.625rem;
  height: 17.813rem;

  margin: 0 0 32px 22px;

  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;

  font-family: "Montserrat";

  @media (max-width: 768px) {
    width: 15.625rem;
    height: 20.5rem;
    margin: 0;
  }

  button {
    width: 100%;
    height: 100%;
    max-height: 32px;
    background: #0f52ba;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 14px;
    cursor: pointer;

    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.125rem;
    color: #ffffff;

    border-radius: 0px 0px 8px 8px;
    border: none;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }

    .image-wrapper {
      width: 100%;
      height: 135px;
      overflow: hidden;
    }
  }
`;
