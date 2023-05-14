import styled from "@emotion/styled";

export const PageNf = styled.div`
  text-align: center;
  color: red;
  height: 700px;
  padding-top: 200px;
  font-weight: 700;
  text-shadow: 0 1px 1px #fff, 1px 1px 1px #4b1414;

  h1 {
    margin-bottom: ${({theme}) => theme.space[4]}px;
    text-align: center;
    color: ${({theme}) => theme.colors.accent};

    font-size: 44px;
    letter-spacing: 1.5px;
  }
`;

export const Wrap = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;