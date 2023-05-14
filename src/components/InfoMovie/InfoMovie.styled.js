import styled from "@emotion/styled";
import { Link } from "react-router-dom";


const LinkBack = styled(Link)`
  text-decoration: none;
  padding: 10px;
  border-radius: ${({theme}) => theme.space[3]}px;
  border: none;
  box-shadow: ${({theme}) => theme.shadows.normal};
  color: ${({theme}) => theme.colors.text};
  background-color: ${({theme}) => theme.colors.backgroundColor};
  font-size: ${({theme}) => theme.fontSizes.m};
  &.active {
    color: orange;
  }
`;
export default LinkBack;

export const Container = styled.div`
  display: flex;
  gap: 20px;
  font-size: 24px;
`;