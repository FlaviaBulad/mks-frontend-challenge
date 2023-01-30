import styled from "styled-components";

export const StyledLogo = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.4rem;

  @media (max-width: 768px) {
    gap: 0.25rem;
  }

  & > h1 {
    font-weight: 600;
    font-size: 2.5rem;
    line-height: 2.52rem;
    color: #ffffff;

    @media (max-width: 768px) {
      font-size: 2rem;
      line-height: 1.8rem;
    }
  }
  & > p {
    font-weight: 300;
    font-size: 1.25rem;
    line-height: 1.8rem;
    color: #ffffff;

    @media (max-width: 768px) {
      font-size: 0.85rem;
      line-height: 1.4rem;
    }
  }
`;
