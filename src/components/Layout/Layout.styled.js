import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const StyledLink = styled(NavLink)`
  color: black;
  font-size: 22px;
  text-decoration: none;
  padding: 10px;
  border: 1px dashed orange;
  &.active {
    color: orange;
  }
`;
export default StyledLink;