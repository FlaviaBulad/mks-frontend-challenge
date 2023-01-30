import styled from "styled-components";

export const CardContainer = styled.div`
  width: 13.625rem;
  height: 17.813rem;

  margin: 0 0 32px 22px;

  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 15.625rem;
    height: 20.5rem;
    margin: 0;
  }
`;
