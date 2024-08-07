import styled from "styled-components";

export const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const GridForm = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  column-gap: 50px;
  padding: 10px;

  @media (max-width: 440px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;
