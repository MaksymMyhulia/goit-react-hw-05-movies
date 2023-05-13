import { ContainerSub, ListSubInfo } from "./PageList.styled";
import StyledLink from "components/Layout/Layout.styled";

export const PageList = () => {
    return (
      <ContainerSub>
        <h2>Additional information</h2>
        <ListSubInfo>
          <li>
            <StyledLink to="cast">Cast</StyledLink>
          </li>
          <li>
            <StyledLink to="reviews">Reviews</StyledLink>
          </li>
        </ListSubInfo>
      </ContainerSub>
    );
  };