import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const LinkBack = styled(Link)`
  color: black;
  font-size: 20px;
  text-decoration: none;
  padding: 10px;
  border: 1px dashed orange;
  color: black;
`;
export default LinkBack;

export const Container = styled.div`
  display: flex;
  gap: 20px;
  font-size: 24px;
`;