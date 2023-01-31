import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 90px;

  position: sticky;
  top: 0px;

  z-index: 9;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 1rem;
  padding: 1rem 2rem;

  background: #0f52ba;

  @media (max-width: 768px) {
    height: 48px;
  }
`;
