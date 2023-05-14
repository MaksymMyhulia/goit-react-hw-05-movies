import styled from "@emotion/styled";

export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
gap: 12px;

margin: 0 auto;
margin-bottom: ${({theme}) => theme.space[4]}px;
padding: ${({theme}) => theme.space[3]}px;

width: 480px;
max-width: 100%;
`;

export const Input = styled.input`
  width: 320px;
  padding: ${({theme}) => theme.space[3]}px ${({theme}) => theme.space[4]}px;
  border-radius: ${({theme}) => theme.space[3]}px;
  border: none;
  box-shadow: ${({theme}) => theme.shadows.normal};
  color: ${({theme}) => theme.colors.text};
  background-color: ${({theme}) => theme.colors.backgroundColor};

  font-size: ${({theme}) => theme.fontSizes.m};
`;


export const Button = styled.button`
  font-size: 24px;
  padding: 0 10px;
  padding: ${({theme}) => theme.space[3]}px ${({theme}) => theme.space[4]}px;
  border-radius: ${({theme}) => theme.space[3]}px;
  border: none;
  box-shadow: ${({theme}) => theme.shadows.normal};
  transition: all 0.25s ease-in-out;
  cursor: pointer;
  background-color: ${({theme}) => theme.colors.backgroundColor};
  color: ${({theme}) => theme.colors.text};

  transition: transform 250ms linear;
  outline: none;
  :hover,
  :focus {
      background-color: ${({theme}) => theme.colors.secondaryBackground};
      box-shadow: -2px -2px 5px #fff, 2px 2px 5px #8ba793;
      color: ${({theme}) => theme.colors.white};
  }
`;
