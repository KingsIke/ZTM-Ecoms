import styled from "styled-components";

export const SignUpContainer = styled.div`
    display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 380px;
  margin: 0 auto;

  @media (max-width: 425px) {
    padding: 0 16px;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    padding: 0 24px;
  }
`;

export const SignUpHeader = styled.h2`
    margin: 6px 0;
`
