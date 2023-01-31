import styled from "styled-components";

export const ProductsContainer = styled.section`
  margin: 50px auto 60px auto;
  padding: 150px 150px 0;
  max-width: 1400px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;

  @media (max-width: 768px) {
    flex-direction: column;
    padding-top: 0;
    row-gap: 20px;
  }

  .card-wrapper {
  }
`;
