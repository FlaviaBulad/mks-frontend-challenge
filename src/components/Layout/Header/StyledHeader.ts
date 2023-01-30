import styled from "styled-components";

export const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 90px;

  background: #0f52ba;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 2rem;

  @media (max-width: 768px) {
    height: 48px;
  }
`;
