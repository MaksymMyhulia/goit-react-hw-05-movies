import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const StyledLink = styled(NavLink)`
  color: black;
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
export default StyledLink;

export const Header = styled.header`
  padding: 30px;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.44);
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const Section = styled.section`
  font-size: 24px;
  padding: 20px 30px;
`;